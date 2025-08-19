"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label="切换背景"
      className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white/85 transition-all hover:bg-white/20 hover:border-white/25"
    >
      {isLight ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
      <span>{isLight ? "深色" : "浅色"}</span>
    </button>
  );
}