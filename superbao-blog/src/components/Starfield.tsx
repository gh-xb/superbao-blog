"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

type Star = {
  x: number;
  y: number;
  r: number; // radius
  s: number; // speed
  a: number; // alpha
};

export default function Starfield({ className = "fixed inset-0 -z-10 pointer-events-none" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // 浅色主题下直接返回，不进行任何初始化
    if (theme === "light") return;

    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    ctxRef.current = context;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize() {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      const area = w * h;
      const density = 0.00015;
      const count = Math.min(800, Math.max(120, Math.floor(area * density)));

      const stars: Star[] = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: (Math.random() * 1.1 + 0.4) * dpr,
          s: (Math.random() * 0.4 + 0.2) * dpr,
          a: Math.random() * 0.6 + 0.3,
        });
      }
      starsRef.current = stars;
    }

    function draw() {
      const { width, height } = canvas;
      const ctx = ctxRef.current;
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, width, height);

      for (const star of starsRef.current) {
        const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * 2.2);
        grad.addColorStop(0, `rgba(255,255,255,${Math.min(1, star.a + 0.2)})`);
        grad.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * 2, 0, Math.PI * 2);
        ctx.fill();

        star.y -= star.s;
        star.a += (Math.random() - 0.5) * 0.02;
        if (star.a < 0.2) star.a = 0.2;
        if (star.a > 1) star.a = 1;

        if (star.y + star.r * 2 < 0) {
          star.x = Math.random() * width;
          star.y = height + star.r * 2 + Math.random() * 20 * dpr;
          star.r = (Math.random() * 1.1 + 0.4) * dpr;
          star.s = (Math.random() * 0.4 + 0.2) * dpr;
          star.a = Math.random() * 0.6 + 0.3;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    rafRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  // 在浅色模式下直接返回null，避免创建DOM元素
  if (theme === "light") {
    return null;
  }

  return <canvas ref={canvasRef} data-starfield className={className} aria-hidden="true" />;
}