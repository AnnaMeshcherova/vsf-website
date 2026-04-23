// Primitives — Reveal (scroll fade) + TypewriterLine
const { useEffect: _useEffect, useRef: _useRef, useState: _useState } = React;

function Reveal({ children, delay = 0, as = "div", ...rest }) {
  const ref = _useRef(null);
  const [on, setOn] = _useState(false);
  _useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect prefers-reduced-motion — reveal immediately
    if (typeof window !== "undefined" && window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setOn(true), delay);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -5% 0px" });
    io.observe(el);
    // Safety fallback: if IO hasn't fired in 600ms (e.g. element already in view, scroll-jumped, etc.)
    const fallback = setTimeout(() => setOn(true), 600 + delay);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, [delay]);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${on ? "in" : ""} ${rest.className || ""}`.trim()}
      style={rest.style}
    >
      {children}
    </Tag>
  );
}

function TypewriterLine() {
  const { t, stages, lang } = useI18n();
  const staticPart = t("thesis.typewriter.static");
  const [stageIdx, setStageIdx] = _useState(0);
  const [typed, setTyped] = _useState("");
  const [phase, setPhase] = _useState("typing");

  _useEffect(() => { setStageIdx(0); setTyped(""); setPhase("typing"); }, [lang]);

  _useEffect(() => {
    const current = stages[stageIdx];
    let timer;
    if (phase === "typing") {
      if (typed.length < current.length) {
        timer = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 56);
      } else {
        // Shorter hold at the end, then delete — feels continuous
        timer = setTimeout(() => setPhase("deleting"), 720);
      }
    } else if (phase === "deleting") {
      if (typed.length > 0) {
        timer = setTimeout(() => setTyped(typed.slice(0, -1)), 24);
      } else {
        setStageIdx((i) => (i + 1) % stages.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [typed, phase, stageIdx, stages]);

  return (
    <div className="typewriter-line" aria-live="polite">
      <span className="static">{staticPart}</span>
      <span className="dyn">{typed}</span>
      <span className="caret" aria-hidden="true" />
    </div>
  );
}

Object.assign(window, { Reveal, TypewriterLine });
