import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  targetNumber: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  targetNumber,
  suffix = "",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
              setDisplayNumber(Math.floor(targetNumber * progress));
              requestAnimationFrame(animate);
            } else {
              setDisplayNumber(targetNumber);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetNumber, duration, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {displayNumber}
      {suffix}
    </div>
  );
}
