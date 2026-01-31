// AP Calculus BC Complete Question Bank - All 10 Units

export const units = [
  { id: 1, name: "Limits and Continuity", description: "Analyze limits numerically, graphically, and algebraically." },
  { id: 2, name: "Differentiation: Definition and Properties", description: "Define derivatives and apply basic differentiation rules." },
  { id: 3, name: "Differentiation: Composite, Implicit, Inverse", description: "Apply chain rule, implicit differentiation, and inverse derivatives." },
  { id: 4, name: "Contextual Applications of Differentiation", description: "Apply derivatives to real-world problems." },
  { id: 5, name: "Analytical Applications of Differentiation", description: "Use derivatives to analyze function behavior." },
  { id: 6, name: "Integration and Accumulation", description: "Understand integration and the Fundamental Theorem of Calculus." },
  { id: 7, name: "Differential Equations", description: "Solve and analyze differential equations." },
  { id: 8, name: "Applications of Integration", description: "Apply integration to find areas and volumes." },
  { id: 9, name: "Parametric, Polar, and Vector Functions", description: "Work with parametric, polar, and vector functions (BC only)." },
  { id: 10, name: "Infinite Sequences and Series", description: "Analyze convergence of series and Taylor series (BC only)." }
];

export const questions = {
  1: [
    { id: "1-1-1", unit: 1, difficulty: 1, question: "Evaluate: \\lim_{x \\to 3} (2x + 1)", options: ["5", "6", "7", "8"], correct: 2, explanation: "Direct substitution: 2(3) + 1 = 7.", timeLimit: 60 },
    { id: "1-1-2", unit: 1, difficulty: 1, question: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = ?", options: ["0", "1", "\\infty", "Does not exist"], correct: 1, explanation: "This is a fundamental limit that equals 1.", timeLimit: 60 },
    { id: "1-1-3", unit: 1, difficulty: 1, question: "If f(x) is continuous at x = a, then \\lim_{x \\to a} f(x) = ?", options: ["0", "f(a)", "f'(a)", "Undefined"], correct: 1, explanation: "Continuity means the limit equals the function value.", timeLimit: 60 },
    { id: "1-2-1", unit: 1, difficulty: 2, question: "\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = ?", options: ["0", "2", "4", "DNE"], correct: 2, explanation: "Factor: (x+2)(x-2)/(x-2) = x+2. At x=2, this is 4.", timeLimit: 90 },
    { id: "1-2-2", unit: 1, difficulty: 2, question: "\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5} = ?", options: ["0", "1", "3", "\\infty"], correct: 2, explanation: "Same degree: ratio of leading coefficients = 3/1 = 3.", timeLimit: 90 },
    { id: "1-2-3", unit: 1, difficulty: 2, question: "f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x - 1 & x \\geq 1 \\end{cases} Continuous at x = 1?", options: ["Yes", "No, jump", "No, removable", "No, infinite"], correct: 0, explanation: "Left limit = 1, right limit = 1, f(1) = 1. All equal, so continuous.", timeLimit: 120 },
    { id: "1-3-1", unit: 1, difficulty: 3, question: "\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = ?", options: ["0", "\\frac{1}{2}", "1", "DNE"], correct: 1, explanation: "Using L'Hôpital's twice or Taylor series: 1/2.", timeLimit: 120 },
    { id: "1-3-2", unit: 1, difficulty: 3, question: "\\lim_{x \\to 0^+} x \\ln x = ?", options: ["-\\infty", "0", "1", "\\infty"], correct: 1, explanation: "Rewrite as ln(x)/(1/x), apply L'Hôpital's: (1/x)/(-1/x²) = -x → 0.", timeLimit: 150 }
  ],
  2: [
    { id: "2-1-1", unit: 2, difficulty: 1, question: "\\frac{d}{dx}(x^5) = ?", options: ["x^4", "4x^4", "5x^4", "5x^5"], correct: 2, explanation: "Power rule: d/dx(x^n) = nx^(n-1). So 5x^4.", timeLimit: 60 },
    { id: "2-1-2", unit: 2, difficulty: 1, question: "\\frac{d}{dx}(\\sin x) = ?", options: ["-\\cos x", "\\cos x", "-\\sin x", "\\tan x"], correct: 1, explanation: "The derivative of sin(x) is cos(x).", timeLimit: 60 },
    { id: "2-1-3", unit: 2, difficulty: 1, question: "\\frac{d}{dx}(e^x) = ?", options: ["xe^{x-1}", "e^x", "e^{x+1}", "\\ln(e^x)"], correct: 1, explanation: "e^x is its own derivative.", timeLimit: 60 },
    { id: "2-2-1", unit: 2, difficulty: 2, question: "\\frac{d}{dx}(x^2 \\sin x) = ?", options: ["2x \\cos x", "x^2 \\cos x + 2x \\sin x", "2x \\sin x", "x^2 \\cos x"], correct: 1, explanation: "Product rule: f'g + fg' = 2x·sin(x) + x²·cos(x).", timeLimit: 90 },
    { id: "2-2-2", unit: 2, difficulty: 2, question: "\\frac{d}{dx}\\left(\\frac{x}{x+1}\\right) = ?", options: ["\\frac{1}{(x+1)^2}", "\\frac{x}{(x+1)^2}", "\\frac{1}{x+1}", "\\frac{-1}{(x+1)^2}"], correct: 0, explanation: "Quotient rule: (1·(x+1) - x·1)/(x+1)² = 1/(x+1)².", timeLimit: 90 },
    { id: "2-2-3", unit: 2, difficulty: 2, question: "\\frac{d}{dx}(\\tan x) = ?", options: ["\\sec x", "\\sec^2 x", "\\cot x", "-\\csc^2 x"], correct: 1, explanation: "d/dx(tan x) = sec²(x).", timeLimit: 60 },
    { id: "2-3-1", unit: 2, difficulty: 3, question: "f(x) = x|x|. Find f'(0).", options: ["DNE", "0", "1", "-1"], correct: 1, explanation: "f(x) = x² for x≥0, -x² for x<0. Both give derivative 0 at x=0.", timeLimit: 150 },
    { id: "2-3-2", unit: 2, difficulty: 3, question: "\\frac{d}{dx}\\left(\\frac{e^x \\sin x}{x^2}\\right) at x = π?", options: ["\\frac{e^\\pi}{\\pi^2}", "\\frac{-e^\\pi}{\\pi^2}", "\\frac{e^\\pi(\\pi - 2)}{\\pi^3}", "\\frac{-e^\\pi(\\pi + 2)}{\\pi^3}"], correct: 3, explanation: "Quotient rule with sin(π)=0, cos(π)=-1.", timeLimit: 180 }
  ],
  3: [
    { id: "3-1-1", unit: 3, difficulty: 1, question: "\\frac{d}{dx}(\\sin(3x)) = ?", options: ["\\cos(3x)", "3\\cos(3x)", "-3\\cos(3x)", "3\\sin(3x)"], correct: 1, explanation: "Chain rule: cos(3x) · 3 = 3cos(3x).", timeLimit: 60 },
    { id: "3-1-2", unit: 3, difficulty: 1, question: "\\frac{d}{dx}(e^{2x}) = ?", options: ["e^{2x}", "2e^{2x}", "2xe^{2x}", "e^{2x+1}"], correct: 1, explanation: "Chain rule: e^(2x) · 2 = 2e^(2x).", timeLimit: 60 },
    { id: "3-1-3", unit: 3, difficulty: 1, question: "\\frac{d}{dx}((x^2+1)^3) = ?", options: ["3(x^2+1)^2", "6x(x^2+1)^2", "2x(x^2+1)^3", "3(2x)^2"], correct: 1, explanation: "Chain rule: 3(x²+1)² · 2x = 6x(x²+1)².", timeLimit: 90 },
    { id: "3-2-1", unit: 3, difficulty: 2, question: "If x^2 + y^2 = 25, find dy/dx.", options: ["-\\frac{x}{y}", "\\frac{x}{y}", "-\\frac{y}{x}", "\\frac{y}{x}"], correct: 0, explanation: "Implicit: 2x + 2y(dy/dx) = 0, so dy/dx = -x/y.", timeLimit: 90 },
    { id: "3-2-2", unit: 3, difficulty: 2, question: "\\frac{d}{dx}(\\arctan x) = ?", options: ["\\frac{1}{1+x^2}", "\\frac{1}{\\sqrt{1-x^2}}", "\\frac{-1}{1+x^2}", "\\sec^2(\\arctan x)"], correct: 0, explanation: "The derivative of arctan(x) is 1/(1+x²).", timeLimit: 60 },
    { id: "3-2-3", unit: 3, difficulty: 2, question: "\\frac{d}{dx}(\\ln(\\cos x)) = ?", options: ["\\tan x", "-\\tan x", "\\cot x", "-\\cot x"], correct: 1, explanation: "Chain rule: (1/cos x)·(-sin x) = -tan(x).", timeLimit: 90 },
    { id: "3-3-1", unit: 3, difficulty: 3, question: "If y = x^x for x > 0, find dy/dx.", options: ["x^x(\\ln x + 1)", "x \\cdot x^{x-1}", "x^x \\ln x", "x^{x-1}"], correct: 0, explanation: "Log diff: ln y = x ln x. y'/y = ln x + 1. y' = x^x(ln x + 1).", timeLimit: 180 },
    { id: "3-3-2", unit: 3, difficulty: 3, question: "\\frac{d}{dx}(\\arcsin(e^x)) = ?", options: ["\\frac{e^x}{\\sqrt{1-e^{2x}}}", "\\frac{1}{\\sqrt{1-e^{2x}}}", "\\frac{e^x}{1-e^{2x}}", "\\frac{-e^x}{\\sqrt{1-e^{2x}}}"], correct: 0, explanation: "Chain rule: 1/√(1-e^(2x)) · e^x.", timeLimit: 120 }
  ],
  4: [
    { id: "4-1-1", unit: 4, difficulty: 1, question: "Position s(t) = t^2 - 4t + 3. Velocity at t = 2?", options: ["-2", "0", "2", "4"], correct: 1, explanation: "v(t) = s'(t) = 2t - 4. v(2) = 0.", timeLimit: 90 },
    { id: "4-1-2", unit: 4, difficulty: 1, question: "Circle radius increases at 2 cm/sec. Rate of circumference increase?", options: ["2\\pi", "4\\pi", "\\pi", "2"], correct: 1, explanation: "C = 2πr, dC/dt = 2π(dr/dt) = 2π(2) = 4π.", timeLimit: 90 },
    { id: "4-1-3", unit: 4, difficulty: 1, question: "Position s(t) = t^3. Acceleration at t = 1?", options: ["1", "3", "6", "9"], correct: 2, explanation: "v(t) = 3t². a(t) = 6t. a(1) = 6.", timeLimit: 90 },
    { id: "4-2-1", unit: 4, difficulty: 2, question: "Balloon volume increases at 10 cm³/sec. When r = 5, rate of radius increase?", options: ["\\frac{1}{10\\pi}", "\\frac{1}{5\\pi}", "\\frac{10}{\\pi}", "\\frac{2}{5\\pi}"], correct: 0, explanation: "V = (4/3)πr³. dV/dt = 4πr²(dr/dt). 10 = 4π(25)(dr/dt). dr/dt = 1/(10π).", timeLimit: 150 },
    { id: "4-2-2", unit: 4, difficulty: 2, question: "Linear approximation of \\sqrt{4.1}?", options: ["2.05", "2.025", "2.02", "2.01"], correct: 1, explanation: "L(x) = f(a) + f'(a)(x-a). f(x)=√x, a=4. L(4.1) = 2 + (1/4)(0.1) = 2.025.", timeLimit: 120 },
    { id: "4-2-3", unit: 4, difficulty: 2, question: "Ladder 10 ft slides down wall. Base 6 ft from wall, moving at 2 ft/s. Rate top descends?", options: ["\\frac{3}{2}", "\\frac{4}{3}", "\\frac{5}{4}", "2"], correct: 0, explanation: "x² + y² = 100. 2x(dx/dt) + 2y(dy/dt) = 0. y = 8. dy/dt = -6(2)/8 = -3/2.", timeLimit: 150 },
    { id: "4-3-1", unit: 4, difficulty: 3, question: "Cone: height = 2×radius, filling at 3 m³/min. Rate of height increase when h = 4?", options: ["\\frac{3}{\\pi}", "\\frac{3}{4\\pi}", "\\frac{1}{\\pi}", "\\frac{3}{2\\pi}"], correct: 1, explanation: "h = 2r, so r = h/2. V = πr²h/3 = πh³/12. dV/dt = πh²/4 · dh/dt. Solve.", timeLimit: 180 }
  ],
  5: [
    { id: "5-1-1", unit: 5, difficulty: 1, question: "f(x) = x^2 - 4x. Critical points?", options: ["x = 0", "x = 2", "x = 4", "x = -2"], correct: 1, explanation: "f'(x) = 2x - 4 = 0 → x = 2.", timeLimit: 60 },
    { id: "5-1-2", unit: 5, difficulty: 1, question: "f(x) = x^3. Concave up when?", options: ["x < 0", "x > 0", "All x", "Never"], correct: 1, explanation: "f''(x) = 6x > 0 when x > 0.", timeLimit: 60 },
    { id: "5-1-3", unit: 5, difficulty: 1, question: "Mean Value Theorem guarantees for f on [a,b]:", options: ["f(a) = f(b)", "f'(c) = 0 somewhere", "f'(c) = \\frac{f(b)-f(a)}{b-a} somewhere", "f has a max"], correct: 2, explanation: "MVT: there exists c where f'(c) = average rate of change.", timeLimit: 90 },
    { id: "5-2-1", unit: 5, difficulty: 2, question: "f(x) = x^3 - 3x on [-2, 2]. Absolute maximum?", options: ["2", "0", "-2", "4"], correct: 0, explanation: "f'(x) = 3x²-3 = 0 at x = ±1. Check f(-2)=-2, f(-1)=2, f(1)=-2, f(2)=2. Max = 2.", timeLimit: 120 },
    { id: "5-2-2", unit: 5, difficulty: 2, question: "Inflection point of f(x) = x^4 - 6x^2?", options: ["x = 0", "x = 1", "x = \\sqrt{3}", "x = -1"], correct: 1, explanation: "f''(x) = 12x² - 12 = 0 → x = ±1. Sign changes at these points.", timeLimit: 120 },
    { id: "5-2-3", unit: 5, difficulty: 2, question: "Minimize perimeter of rectangle with area 36.", options: ["12", "24", "36", "48"], correct: 1, explanation: "A = xy = 36. P = 2x + 2y = 2x + 72/x. P' = 0 → x = 6, y = 6. P = 24.", timeLimit: 150 },
    { id: "5-3-1", unit: 5, difficulty: 3, question: "f(x) = x + \\sin(2x). Local maxima on [0, 2π]?", options: ["1", "2", "3", "4"], correct: 1, explanation: "f'(x) = 1 + 2cos(2x) = 0 → cos(2x) = -1/2. Solve for maxima in interval.", timeLimit: 180 }
  ],
  6: [
    { id: "6-1-1", unit: 6, difficulty: 1, question: "\\int x^3 \\, dx = ?", options: ["3x^2 + C", "\\frac{x^4}{4} + C", "x^4 + C", "4x^4 + C"], correct: 1, explanation: "∫x^n dx = x^(n+1)/(n+1) + C. So x⁴/4 + C.", timeLimit: 60 },
    { id: "6-1-2", unit: 6, difficulty: 1, question: "\\int_0^2 x \\, dx = ?", options: ["1", "2", "4", "0"], correct: 1, explanation: "[x²/2] from 0 to 2 = 4/2 - 0 = 2.", timeLimit: 60 },
    { id: "6-1-3", unit: 6, difficulty: 1, question: "\\int \\cos x \\, dx = ?", options: ["-\\sin x + C", "\\sin x + C", "-\\cos x + C", "\\tan x + C"], correct: 1, explanation: "∫cos(x) dx = sin(x) + C.", timeLimit: 60 },
    { id: "6-2-1", unit: 6, difficulty: 2, question: "\\int_0^1 2x e^{x^2} \\, dx = ?", options: ["e - 1", "e", "1", "e + 1"], correct: 0, explanation: "u = x², du = 2x dx. ∫e^u du = e^u. [e^(x²)] from 0 to 1 = e - 1.", timeLimit: 120 },
    { id: "6-2-2", unit: 6, difficulty: 2, question: "FTC Part 1: \\frac{d}{dx}\\int_0^x e^{t^2} dt = ?", options: ["e^{x^2}", "2xe^{x^2}", "\\int_0^x 2te^{t^2}dt", "e^x"], correct: 0, explanation: "By FTC Part 1, derivative of ∫₀ˣ f(t)dt = f(x).", timeLimit: 90 },
    { id: "6-2-3", unit: 6, difficulty: 2, question: "\\int \\frac{1}{x^2 + 1} \\, dx = ?", options: ["\\ln(x^2+1) + C", "\\arctan x + C", "\\frac{-1}{x} + C", "\\arcsin x + C"], correct: 1, explanation: "This is the standard arctan integral.", timeLimit: 60 },
    { id: "6-3-1", unit: 6, difficulty: 3, question: "\\int x^2 e^x \\, dx = ?", options: ["(x^2-2x+2)e^x + C", "(x^2+2x+2)e^x + C", "(x^2-2)e^x + C", "x^2 e^x + C"], correct: 0, explanation: "Integration by parts twice: x²eˣ - 2xeˣ + 2eˣ + C.", timeLimit: 180 },
    { id: "6-3-2", unit: 6, difficulty: 3, question: "\\int \\frac{1}{x^2-1} \\, dx = ?", options: ["\\frac{1}{2}\\ln|\\frac{x-1}{x+1}| + C", "\\ln|x^2-1| + C", "\\arctan x + C", "\\frac{1}{2}\\ln|\\frac{x+1}{x-1}| + C"], correct: 0, explanation: "Partial fractions: 1/(x²-1) = 1/2[1/(x-1) - 1/(x+1)].", timeLimit: 150 }
  ],
  7: [
    { id: "7-1-1", unit: 7, difficulty: 1, question: "dy/dx = 2x, y(0) = 1. Find y.", options: ["x^2 + 1", "2x + 1", "x^2", "e^{x^2}"], correct: 0, explanation: "∫dy = ∫2x dx → y = x² + C. y(0) = 1 → C = 1.", timeLimit: 90 },
    { id: "7-1-2", unit: 7, difficulty: 1, question: "General solution of dy/dx = y?", options: ["y = e^x", "y = Ce^x", "y = x + C", "y = \\ln x + C"], correct: 1, explanation: "∫dy/y = ∫dx → ln|y| = x + C₁ → y = Ce^x.", timeLimit: 90 },
    { id: "7-1-3", unit: 7, difficulty: 1, question: "Slope field: dy/dx = x. Slopes along y-axis?", options: ["All 0", "All 1", "All -1", "Vary with y"], correct: 0, explanation: "On y-axis, x = 0, so dy/dx = 0 everywhere on that line.", timeLimit: 60 },
    { id: "7-2-1", unit: 7, difficulty: 2, question: "dy/dx = xy, y(0) = 2. Find y(1).", options: ["2e", "2\\sqrt{e}", "e^2", "2e^{1/2}"], correct: 3, explanation: "Separable: ∫dy/y = ∫x dx → ln y = x²/2 + C. y = Ae^(x²/2). y(0) = 2 → A = 2. y(1) = 2e^(1/2).", timeLimit: 150 },
    { id: "7-2-2", unit: 7, difficulty: 2, question: "Euler's method: dy/dx = x + y, y(0) = 1, step 0.1. Approximate y(0.1)?", options: ["1.1", "1.0", "1.2", "0.9"], correct: 0, explanation: "y₁ = y₀ + h·f(x₀,y₀) = 1 + 0.1(0+1) = 1.1.", timeLimit: 120 },
    { id: "7-2-3", unit: 7, difficulty: 2, question: "Population follows dP/dt = 0.02P. Initial 1000. Population after 50 years?", options: ["e^{50}", "1000e", "1000e^{0.02}", "1000e^{50}"], correct: 1, explanation: "P = 1000e^(0.02t). At t = 50: P = 1000e^1 = 1000e.", timeLimit: 120 },
    { id: "7-3-1", unit: 7, difficulty: 3, question: "Logistic: dP/dt = P(1 - P/100). Equilibrium solutions?", options: ["P = 0 only", "P = 100 only", "P = 0 and P = 100", "P = 50"], correct: 2, explanation: "Set dP/dt = 0: P(1 - P/100) = 0 → P = 0 or P = 100.", timeLimit: 120 },
    { id: "7-3-2", unit: 7, difficulty: 3, question: "dy/dx = y^2 - 4. Which equilibrium is stable?", options: ["y = 2", "y = -2", "Both", "Neither"], correct: 1, explanation: "dy/dx = (y-2)(y+2). At y = -2, nearby solutions approach it (stable).", timeLimit: 150 }
  ],
  8: [
    { id: "8-1-1", unit: 8, difficulty: 1, question: "Area between y = x and y = x^2 from 0 to 1?", options: ["\\frac{1}{6}", "\\frac{1}{3}", "\\frac{1}{2}", "1"], correct: 0, explanation: "∫₀¹(x - x²)dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6.", timeLimit: 120 },
    { id: "8-1-2", unit: 8, difficulty: 1, question: "Disk method: y = x, rotate about x-axis, 0 to 2. Volume?", options: ["\\frac{8\\pi}{3}", "4\\pi", "\\frac{4\\pi}{3}", "8\\pi"], correct: 0, explanation: "V = π∫₀² x² dx = π[x³/3]₀² = 8π/3.", timeLimit: 120 },
    { id: "8-1-3", unit: 8, difficulty: 1, question: "Average value of f(x) = x^2 on [0, 3]?", options: ["3", "9", "\\frac{9}{3}", "\\frac{27}{9}"], correct: 0, explanation: "(1/3)∫₀³ x² dx = (1/3)[x³/3]₀³ = (1/3)(9) = 3.", timeLimit: 90 },
    { id: "8-2-1", unit: 8, difficulty: 2, question: "Washer method: y = x², y = x, rotate about x-axis. Volume?", options: ["\\frac{2\\pi}{15}", "\\frac{\\pi}{6}", "\\frac{\\pi}{15}", "\\frac{\\pi}{30}"], correct: 0, explanation: "V = π∫₀¹(x² - x⁴)dx = π[x³/3 - x⁵/5]₀¹ = π(1/3 - 1/5) = 2π/15.", timeLimit: 150 },
    { id: "8-2-2", unit: 8, difficulty: 2, question: "Cross-sections perpendicular to x-axis are squares with base from y = 0 to y = √x. Volume, x: 0 to 4?", options: ["4", "8", "16", "32"], correct: 1, explanation: "A(x) = (√x)² = x. V = ∫₀⁴ x dx = [x²/2]₀⁴ = 8.", timeLimit: 150 },
    { id: "8-2-3", unit: 8, difficulty: 2, question: "Arc length of y = x^{3/2} from 0 to 4?", options: ["\\frac{8}{27}(10\\sqrt{10}-1)", "8", "\\frac{56}{27}", "10"], correct: 0, explanation: "L = ∫√(1 + (3√x/2)²)dx. After calculation: (8/27)(10√10 - 1).", timeLimit: 180 },
    { id: "8-3-1", unit: 8, difficulty: 3, question: "Shell method: y = x^2, about y-axis, 0 to 2. Volume?", options: ["8\\pi", "4\\pi", "16\\pi", "2\\pi"], correct: 0, explanation: "V = 2π∫₀² x·x² dx = 2π∫₀² x³ dx = 2π[x⁴/4]₀² = 2π(4) = 8π.", timeLimit: 150 }
  ],
  9: [
    { id: "9-1-1", unit: 9, difficulty: 1, question: "x = t^2, y = t^3. Find dy/dx.", options: ["\\frac{3t}{2}", "\\frac{3t^2}{2t}", "\\frac{2t}{3t^2}", "t"], correct: 0, explanation: "dy/dx = (dy/dt)/(dx/dt) = 3t²/2t = 3t/2.", timeLimit: 90 },
    { id: "9-1-2", unit: 9, difficulty: 1, question: "Convert (r, θ) = (2, π/4) to rectangular.", options: ["(\\sqrt{2}, \\sqrt{2})", "(1, 1)", "(2, 2)", "(1, \\sqrt{3})"], correct: 0, explanation: "x = 2cos(π/4) = √2, y = 2sin(π/4) = √2.", timeLimit: 90 },
    { id: "9-1-3", unit: 9, difficulty: 1, question: "r = \\sin θ is what shape?", options: ["Circle", "Line", "Cardioid", "Rose"], correct: 0, explanation: "r = sin θ is a circle passing through origin.", timeLimit: 60 },
    { id: "9-2-1", unit: 9, difficulty: 2, question: "Parametric: x = \\cos t, y = \\sin t. Find d²y/dx² at t = π/4.", options: ["-\\sqrt{2}", "-2", "\\sqrt{2}", "-\\frac{\\sqrt{2}}{2}"], correct: 0, explanation: "dy/dx = -cot t. d²y/dx² = (d/dt)(-cot t)/(-sin t) = -csc²t/(-sin t). At π/4: -√2.", timeLimit: 180 },
    { id: "9-2-2", unit: 9, difficulty: 2, question: "Area inside r = 2\\cos θ?", options: ["\\pi", "2\\pi", "4\\pi", "\\frac{\\pi}{2}"], correct: 0, explanation: "A = (1/2)∫₀^π (2cos θ)² dθ = 2∫₀^π cos²θ dθ = π.", timeLimit: 150 },
    { id: "9-2-3", unit: 9, difficulty: 2, question: "Vector: r(t) = \\langle t, t^2 \\rangle. Velocity at t = 1?", options: ["\\langle 1, 2 \\rangle", "\\langle 1, 1 \\rangle", "\\langle 0, 2 \\rangle", "\\langle 2, 1 \\rangle"], correct: 0, explanation: "v(t) = r'(t) = ⟨1, 2t⟩. v(1) = ⟨1, 2⟩.", timeLimit: 90 },
    { id: "9-3-1", unit: 9, difficulty: 3, question: "Area inside r = 1 + \\cos θ?", options: ["\\frac{3\\pi}{2}", "\\pi", "2\\pi", "\\frac{\\pi}{2}"], correct: 0, explanation: "A = (1/2)∫₀^{2π}(1 + cos θ)² dθ = 3π/2.", timeLimit: 180 },
    { id: "9-3-2", unit: 9, difficulty: 3, question: "Arc length: x = e^t\\cos t, y = e^t\\sin t, 0 ≤ t ≤ π?", options: ["\\sqrt{2}(e^\\pi - 1)", "e^\\pi - 1", "2(e^\\pi - 1)", "\\sqrt{2}e^\\pi"], correct: 0, explanation: "After calculation, L = √2∫₀^π e^t dt = √2(e^π - 1).", timeLimit: 180 }
  ],
  10: [
    { id: "10-1-1", unit: 10, difficulty: 1, question: "\\lim_{n \\to \\infty} \\frac{n}{n+1} = ?", options: ["0", "1", "\\infty", "DNE"], correct: 1, explanation: "Divide by n: 1/(1 + 1/n) → 1 as n → ∞.", timeLimit: 60 },
    { id: "10-1-2", unit: 10, difficulty: 1, question: "\\sum_{n=1}^{\\infty} \\left(\\frac{1}{2}\\right)^n = ?", options: ["1", "2", "\\frac{1}{2}", "\\infty"], correct: 0, explanation: "Geometric series with a = 1/2, r = 1/2. Sum = (1/2)/(1 - 1/2) = 1.", timeLimit: 90 },
    { id: "10-1-3", unit: 10, difficulty: 1, question: "Does \\sum 1/n converge?", options: ["Yes", "No, diverges", "Conditionally", "Cannot determine"], correct: 1, explanation: "Harmonic series diverges (p-series with p = 1).", timeLimit: 60 },
    { id: "10-2-1", unit: 10, difficulty: 2, question: "Taylor series of e^x centered at 0:", options: ["\\sum \\frac{x^n}{n!}", "\\sum x^n", "\\sum \\frac{x^n}{n}", "\\sum nx^n"], correct: 0, explanation: "e^x = Σ(x^n/n!) for all x.", timeLimit: 90 },
    { id: "10-2-2", unit: 10, difficulty: 2, question: "Radius of convergence: \\sum \\frac{x^n}{n}?", options: ["0", "1", "e", "\\infty"], correct: 1, explanation: "Ratio test: |x^(n+1)·n/(x^n·(n+1))| = |x|·n/(n+1) → |x|. R = 1.", timeLimit: 120 },
    { id: "10-2-3", unit: 10, difficulty: 2, question: "\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} converges to?", options: ["1", "\\ln 2", "e", "0"], correct: 1, explanation: "Alternating harmonic series = ln 2.", timeLimit: 90 },
    { id: "10-3-1", unit: 10, difficulty: 3, question: "Third-degree Maclaurin polynomial for \\sin x?", options: ["x - \\frac{x^3}{6}", "x + \\frac{x^3}{6}", "x - \\frac{x^3}{3}", "1 - \\frac{x^2}{2}"], correct: 0, explanation: "sin x = x - x³/3! + ... = x - x³/6.", timeLimit: 90 },
    { id: "10-3-2", unit: 10, difficulty: 3, question: "\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} represents?", options: ["\\sin x", "\\cos x", "e^x", "\\ln(1+x)"], correct: 1, explanation: "This is the Maclaurin series for cos x.", timeLimit: 90 },
    { id: "10-3-3", unit: 10, difficulty: 3, question: "Interval of convergence for \\sum \\frac{(x-2)^n}{n \\cdot 3^n}?", options: ["(-1, 5]", "[-1, 5]", "[-1, 5)", "(-1, 5)"], correct: 0, explanation: "Ratio test: R = 3. Center at 2 gives -1 < x < 5. Check endpoints: x = -1 diverges, x = 5 converges.", timeLimit: 180 }
  ]
};

export function getQuestionsByUnit(unitId, difficulty = null) {
  const unitQuestions = questions[unitId] || [];
  if (difficulty === null) return unitQuestions;
  return unitQuestions.filter(q => q.difficulty === difficulty);
}

export function getRandomQuestion(unitId, excludeIds = [], difficulty = null) {
  let available = getQuestionsByUnit(unitId, difficulty);
  available = available.filter(q => !excludeIds.includes(q.id));
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)];
}
