import { useEffect, useRef } from 'react';
import katex from 'katex';

export default function MathDisplay({ children, display = false }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && children) {
      try {
        katex.render(children, ref.current, {
          throwOnError: false,
          displayMode: display,
          trust: true
        });
      } catch (e) {
        ref.current.textContent = children;
      }
    }
  }, [children, display]);

  return display ? <div ref={ref} /> : <span ref={ref} />;
}

// Render text with inline LaTeX (wrapped in \\ delimiters)
export function MathText({ children }) {
  if (!children) return null;
  
  // Split by LaTeX delimiters and render appropriately
  const parts = children.split(/(\$[^$]+\$)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          return <Math key={i}>{part.slice(1, -1)}</Math>;
        }
        // Check for backslash-delimited math
        if (part.includes('\\')) {
          return <Math key={i}>{part}</Math>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
