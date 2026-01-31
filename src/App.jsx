import { useState, useEffect } from 'react';
import MathDisplay from './components/MathDisplay';
import { units, getRandomQuestion, getQuestionsByUnit } from './data/questions';
import './App.css';

// Views
const VIEWS = {
  HOME: 'home',
  STUDY_PLAN: 'study_plan',
  UNIT_SELECT: 'unit_select',
  PRACTICE: 'practice',
  RESULTS: 'results',
  PROGRESS: 'progress'
};

function App() {
  const [view, setView] = useState(VIEWS.HOME);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [difficulty, setDifficulty] = useState(2);
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('ace-ap-calc-progress');
    return saved ? JSON.parse(saved) : {
      questionsAttempted: 0,
      questionsCorrect: 0,
      unitStats: {},
      errorTypes: { concept: 0, algebra: 0, time: 0, other: 0 },
      history: []
    };
  });

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('ace-ap-calc-progress', JSON.stringify(progress));
  }, [progress]);

  // Timer
  useEffect(() => {
    let interval;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const startPractice = (unitId) => {
    setSelectedUnit(unitId);
    setSessionQuestions([]);
    loadNewQuestion(unitId, []);
    setView(VIEWS.PRACTICE);
  };

  const loadNewQuestion = (unitId, excludeIds) => {
    const roundedDifficulty = difficulty < 1.5 ? 1 : difficulty < 2.5 ? 2 : 3;
    const q = getRandomQuestion(unitId, excludeIds, roundedDifficulty);
    if (q) {
      setCurrentQuestion(q);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(q.timeLimit || 120);
      setTimerActive(true);
    } else {
      // No more questions at this difficulty, try any difficulty
      const anyQ = getRandomQuestion(unitId, excludeIds, null);
      if (anyQ) {
        setCurrentQuestion(anyQ);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setTimeLeft(anyQ.timeLimit || 120);
        setTimerActive(true);
      } else {
        setView(VIEWS.RESULTS);
      }
    }
  };

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setTimerActive(false);
    setShowExplanation(true);

    const isCorrect = index === currentQuestion.correct;
    const questionResult = {
      ...currentQuestion,
      userAnswer: index,
      correct: isCorrect,
      timeSpent: (currentQuestion.timeLimit || 120) - timeLeft,
      timestamp: new Date().toISOString()
    };

    setSessionQuestions(prev => [...prev, questionResult]);

    // Update progress
    setProgress(prev => {
      const unitStats = { ...prev.unitStats };
      if (!unitStats[selectedUnit]) {
        unitStats[selectedUnit] = { attempted: 0, correct: 0 };
      }
      unitStats[selectedUnit].attempted++;
      if (isCorrect) unitStats[selectedUnit].correct++;

      return {
        ...prev,
        questionsAttempted: prev.questionsAttempted + 1,
        questionsCorrect: prev.questionsCorrect + (isCorrect ? 1 : 0),
        unitStats,
        history: [...prev.history.slice(-99), questionResult]
      };
    });

    // Adaptive difficulty
    if (isCorrect && difficulty < 3) {
      setDifficulty(d => d + 0.3 > 3 ? 3 : d + 0.3);
    } else if (!isCorrect && difficulty > 1) {
      setDifficulty(d => d - 0.3 < 1 ? 1 : d - 0.3);
    }
  };

  const recordErrorType = (type) => {
    setProgress(prev => ({
      ...prev,
      errorTypes: {
        ...prev.errorTypes,
        [type]: prev.errorTypes[type] + 1
      }
    }));
  };

  const nextQuestion = () => {
    const excludeIds = sessionQuestions.map(q => q.id);
    loadNewQuestion(selectedUnit, excludeIds);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Render helpers
  const renderQuestion = (text) => {
    return <MathDisplay>{text}</MathDisplay>;
  };

  const renderOption = (text) => {
    return <MathDisplay>{text}</MathDisplay>;
  };

  // Views
  if (view === VIEWS.HOME) {
    return (
      <div className="app">
        <header className="header">
          <h1>🎓 Ace AP Calculus BC</h1>
          <p>Master calculus with adaptive practice</p>
        </header>

        <div className="home-grid">
          <button className="home-card" onClick={() => setView(VIEWS.STUDY_PLAN)}>
            <span className="card-icon">📅</span>
            <span className="card-title">4-Day Study Plan</span>
            <span className="card-desc">Intensive exam prep schedule</span>
          </button>

          <button className="home-card" onClick={() => setView(VIEWS.UNIT_SELECT)}>
            <span className="card-icon">📚</span>
            <span className="card-title">Practice by Unit</span>
            <span className="card-desc">All 10 AP units covered</span>
          </button>

          <button className="home-card" onClick={() => setView(VIEWS.PROGRESS)}>
            <span className="card-icon">📊</span>
            <span className="card-title">View Progress</span>
            <span className="card-desc">{progress.questionsAttempted} questions attempted</span>
          </button>
        </div>

        <div className="stats-summary">
          <div className="stat">
            <span className="stat-value">{progress.questionsAttempted}</span>
            <span className="stat-label">Attempted</span>
          </div>
          <div className="stat">
            <span className="stat-value">{progress.questionsCorrect}</span>
            <span className="stat-label">Correct</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {progress.questionsAttempted > 0 
                ? Math.round((progress.questionsCorrect / progress.questionsAttempted) * 100) 
                : 0}%
            </span>
            <span className="stat-label">Accuracy</span>
          </div>
        </div>
      </div>
    );
  }

  if (view === VIEWS.STUDY_PLAN) {
    return (
      <div className="app">
        <header className="header">
          <button className="back-btn" onClick={() => setView(VIEWS.HOME)}>← Back</button>
          <h1>📅 4-Day Study Plan</h1>
        </header>

        <div className="study-plan">
          <div className="day-card">
            <h3>Day 1: Foundations</h3>
            <ul>
              <li><strong>Morning:</strong> Units 1-2 (Limits, Basic Derivatives)</li>
              <li><strong>Afternoon:</strong> Units 3-4 (Chain Rule, Applications)</li>
              <li><strong>Evening:</strong> Review mistakes, practice weak areas</li>
            </ul>
            <button onClick={() => startPractice(1)}>Start Unit 1</button>
          </div>

          <div className="day-card">
            <h3>Day 2: Applications</h3>
            <ul>
              <li><strong>Morning:</strong> Unit 5 (Analytical Applications)</li>
              <li><strong>Afternoon:</strong> Unit 6 (Integration)</li>
              <li><strong>Evening:</strong> Mixed practice, FRQ prep</li>
            </ul>
            <button onClick={() => startPractice(5)}>Start Unit 5</button>
          </div>

          <div className="day-card">
            <h3>Day 3: BC Topics</h3>
            <ul>
              <li><strong>Morning:</strong> Units 7-8 (Diff Eq, Integration Apps)</li>
              <li><strong>Afternoon:</strong> Unit 9 (Parametric/Polar/Vectors)</li>
              <li><strong>Evening:</strong> Series introduction (Unit 10)</li>
            </ul>
            <button onClick={() => startPractice(9)}>Start Unit 9</button>
          </div>

          <div className="day-card">
            <h3>Day 4: Final Review</h3>
            <ul>
              <li><strong>Morning:</strong> Unit 10 (Series) - high priority</li>
              <li><strong>Afternoon:</strong> Full practice exam simulation</li>
              <li><strong>Evening:</strong> Light review, rest well!</li>
            </ul>
            <button onClick={() => startPractice(10)}>Start Unit 10</button>
          </div>
        </div>
      </div>
    );
  }

  if (view === VIEWS.UNIT_SELECT) {
    return (
      <div className="app">
        <header className="header">
          <button className="back-btn" onClick={() => setView(VIEWS.HOME)}>← Back</button>
          <h1>📚 Select Unit</h1>
        </header>

        <div className="difficulty-selector">
          <span>Difficulty: </span>
          <button 
            className={difficulty <= 1.5 ? 'active' : ''} 
            onClick={() => setDifficulty(1)}
          >Easy</button>
          <button 
            className={difficulty > 1.5 && difficulty < 2.5 ? 'active' : ''} 
            onClick={() => setDifficulty(2)}
          >Medium</button>
          <button 
            className={difficulty >= 2.5 ? 'active' : ''} 
            onClick={() => setDifficulty(3)}
          >Hard</button>
        </div>

        <div className="unit-grid">
          {units.map(unit => {
            const stats = progress.unitStats[unit.id] || { attempted: 0, correct: 0 };
            const accuracy = stats.attempted > 0 
              ? Math.round((stats.correct / stats.attempted) * 100) 
              : null;
            const questionsAvailable = getQuestionsByUnit(unit.id).length;

            return (
              <button 
                key={unit.id} 
                className="unit-card"
                onClick={() => startPractice(unit.id)}
              >
                <span className="unit-number">Unit {unit.id}</span>
                <span className="unit-name">{unit.name}</span>
                <span className="unit-desc">{unit.description}</span>
                <div className="unit-stats">
                  <span>{questionsAvailable} questions</span>
                  {accuracy !== null && <span>{accuracy}% accuracy</span>}
                </div>
                {unit.id >= 9 && <span className="bc-tag">BC Only</span>}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (view === VIEWS.PRACTICE && currentQuestion) {
    const isAnswered = selectedAnswer !== null;
    const isCorrect = selectedAnswer === currentQuestion.correct;

    return (
      <div className="app">
        <header className="header practice-header">
          <button className="back-btn" onClick={() => setView(VIEWS.UNIT_SELECT)}>← Exit</button>
          <div className="practice-info">
            <span>Unit {selectedUnit}</span>
            <span>Q {sessionQuestions.length + 1}</span>
          </div>
          <div className={`timer ${timeLeft < 30 ? 'warning' : ''} ${timeLeft < 10 ? 'danger' : ''}`}>
            {formatTime(timeLeft)}
          </div>
        </header>

        <div className="question-container">
          <div className="question-text">
            {renderQuestion(currentQuestion.question)}
          </div>

          <div className="options">
            {currentQuestion.options.map((option, index) => {
              let className = 'option';
              if (isAnswered) {
                if (index === currentQuestion.correct) {
                  className += ' correct';
                } else if (index === selectedAnswer) {
                  className += ' incorrect';
                }
              }

              return (
                <button
                  key={index}
                  className={className}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{renderOption(option)}</span>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`explanation ${isCorrect ? 'correct' : 'incorrect'}`}>
              <h4>{isCorrect ? '✓ Correct!' : '✗ Incorrect'}</h4>
              <p>{currentQuestion.explanation}</p>

              {!isCorrect && (
                <div className="error-type">
                  <span>What type of error?</span>
                  <div className="error-buttons">
                    <button onClick={() => recordErrorType('concept')}>Concept</button>
                    <button onClick={() => recordErrorType('algebra')}>Algebra</button>
                    <button onClick={() => recordErrorType('time')}>Ran out of time</button>
                    <button onClick={() => recordErrorType('other')}>Other</button>
                  </div>
                </div>
              )}

              <button className="next-btn" onClick={nextQuestion}>
                Next Question →
              </button>
            </div>
          )}
        </div>

        <div className="session-progress">
          {sessionQuestions.map((q, i) => (
            <span key={i} className={`dot ${q.correct ? 'correct' : 'incorrect'}`} />
          ))}
        </div>
      </div>
    );
  }

  if (view === VIEWS.RESULTS) {
    const correct = sessionQuestions.filter(q => q.correct).length;
    const total = sessionQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    return (
      <div className="app">
        <header className="header">
          <h1>📊 Session Results</h1>
        </header>

        <div className="results-container">
          <div className="results-score">
            <span className="score-big">{correct}/{total}</span>
            <span className="score-percent">{percentage}%</span>
          </div>

          <div className="results-breakdown">
            <h3>Question Breakdown</h3>
            {sessionQuestions.map((q, i) => (
              <div key={i} className={`result-item ${q.correct ? 'correct' : 'incorrect'}`}>
                <span>Q{i + 1}</span>
                <span>{q.correct ? '✓' : '✗'}</span>
                <span>{q.timeSpent}s</span>
              </div>
            ))}
          </div>

          <div className="results-actions">
            <button onClick={() => startPractice(selectedUnit)}>Practice Again</button>
            <button onClick={() => setView(VIEWS.UNIT_SELECT)}>Choose Unit</button>
            <button onClick={() => setView(VIEWS.HOME)}>Home</button>
          </div>
        </div>
      </div>
    );
  }

  if (view === VIEWS.PROGRESS) {
    return (
      <div className="app">
        <header className="header">
          <button className="back-btn" onClick={() => setView(VIEWS.HOME)}>← Back</button>
          <h1>📊 Your Progress</h1>
        </header>

        <div className="progress-container">
          <div className="progress-overall">
            <h3>Overall Stats</h3>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-number">{progress.questionsAttempted}</span>
                <span>Questions Attempted</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">{progress.questionsCorrect}</span>
                <span>Questions Correct</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">
                  {progress.questionsAttempted > 0 
                    ? Math.round((progress.questionsCorrect / progress.questionsAttempted) * 100) 
                    : 0}%
                </span>
                <span>Accuracy</span>
              </div>
            </div>
          </div>

          <div className="progress-errors">
            <h3>Error Analysis</h3>
            <div className="error-bars">
              {Object.entries(progress.errorTypes).map(([type, count]) => (
                <div key={type} className="error-bar">
                  <span className="error-label">{type}</span>
                  <div className="bar-container">
                    <div 
                      className="bar-fill" 
                      style={{ 
                        width: `${Math.min(100, (count / Math.max(1, progress.questionsAttempted - progress.questionsCorrect)) * 100)}%` 
                      }} 
                    />
                  </div>
                  <span className="error-count">{count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="progress-units">
            <h3>Unit Performance</h3>
            {units.map(unit => {
              const stats = progress.unitStats[unit.id] || { attempted: 0, correct: 0 };
              const accuracy = stats.attempted > 0 
                ? Math.round((stats.correct / stats.attempted) * 100) 
                : null;

              return (
                <div key={unit.id} className="unit-progress">
                  <span className="unit-label">U{unit.id}: {unit.name}</span>
                  <div className="unit-bar">
                    <div 
                      className="bar-fill" 
                      style={{ width: `${accuracy || 0}%` }} 
                    />
                  </div>
                  <span className="unit-accuracy">
                    {accuracy !== null ? `${accuracy}%` : '—'}
                  </span>
                </div>
              );
            })}
          </div>

          <button 
            className="reset-btn"
            onClick={() => {
              if (confirm('Reset all progress? This cannot be undone.')) {
                setProgress({
                  questionsAttempted: 0,
                  questionsCorrect: 0,
                  unitStats: {},
                  errorTypes: { concept: 0, algebra: 0, time: 0, other: 0 },
                  history: []
                });
              }
            }}
          >
            Reset Progress
          </button>
        </div>
      </div>
    );
  }

  return <div className="app">Loading...</div>;
}

export default App;
