"use client";

import { useRef, useEffect, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}

export default function TiltCard({ 
  children, 
  className = "", 
  max = 15, 
  scale = 1.05 
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // 防抖优化的 mousemove 处理
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return; // 已有待处理的帧，跳过

    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) {
        rafRef.current = null;
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * max;
      const rotateY = ((centerX - x) / centerX) * max;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      rafRef.current = null;
    });
  }, [max, scale]);

  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.willChange = "transform";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.willChange = "auto";
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [handleMouseEnter, handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={cardRef}
      className={`transform-gpu transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d", contain: "layout style paint" }}
    >
      {children}
    </div>
  );
}