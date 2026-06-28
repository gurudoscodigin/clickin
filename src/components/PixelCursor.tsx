import { useEffect, useRef, useState } from "react";

/**
 * Pixel-art cursor + golden click ripple. Desktop / fine-pointer only.
 */
export function PixelCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let rafId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          if (dotRef.current) {
            dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
          }
        });
      }
    };

    const onDown = (e: MouseEvent) => {
      setPressed(true);
      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 650);
    };
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ transform: "translate(-100px, -100px)" }}
    >
      <PixelArrow pressed={pressed} />
    </div>
  );
}

export function PixelArrow({
  pressed = false,
  size = 22,
  color = "var(--ink-deep)",
  accent = "var(--gold)",
}: {
  pressed?: boolean;
  size?: number;
  color?: string;
  accent?: string;
}) {
  // 12x12 pixel arrow. 1 = ink, 2 = gold accent (tip), 0 = transparent.
  const grid: number[][] = [
    [1,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0],
    [1,2,1,0,0,0,0,0,0,0,0,0],
    [1,2,2,1,0,0,0,0,0,0,0,0],
    [1,2,2,2,1,0,0,0,0,0,0,0],
    [1,2,2,2,2,1,0,0,0,0,0,0],
    [1,2,2,2,2,2,1,0,0,0,0,0],
    [1,2,2,2,2,1,1,1,0,0,0,0],
    [1,2,2,1,2,2,1,0,0,0,0,0],
    [1,2,1,0,1,2,2,1,0,0,0,0],
    [1,1,0,0,1,2,2,1,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,0,0,0],
  ];
  const px = size / 12;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      shapeRendering="crispEdges"
      style={{
        transform: pressed ? "scale(0.85)" : "scale(1)",
        transition: "transform 120ms ease-out",
        filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.25))",
      }}
    >
      {grid.flatMap((row, y) =>
        row.map((v, x) =>
          v === 0 ? null : (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={v === 2 ? accent : color}
            />
          ),
        ),
      )}
      {/* unused px var keeps tree-shake happy */}
      <desc>{px}</desc>
    </svg>
  );
}
