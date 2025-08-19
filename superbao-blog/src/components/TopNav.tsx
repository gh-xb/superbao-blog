"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Home as HomeIcon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const GRADIENT = "radial-gradient(140% 140% at 30% 20%, #b084ff 0%, #8e74ff 40%, #ff9fb2 100%)";

const items = [
  { id: "features", label: "项目" },
  { id: "resources", label: "资源" },
  { id: "about", label: "关于" },
  { id: "contact", label: "联系" },
];

export default function TopNav() {
  const [active, setActive] = useState<string>("home");
  const { theme } = useTheme();
  const isLight = theme === "light";

  // 监听各区块可见性，动态高亮对应页签
  useEffect(() => {
    const sectionIds = ["home", ...items.map((i) => i.id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    let ticking = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (ticking) return;
        ticking = true;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
        requestAnimationFrame(() => (ticking = false));
      },
      { rootMargin: "-25% 0px -50% 0px", threshold: [0.15, 0.35, 0.55, 0.75, 0.95] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div
      className={`${isLight
          ? "border border-black/10 bg-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
          : "border border-white/10 bg-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_-1px_0_rgba(255,255,255,0.06)]"} flex items-center gap-10 rounded-[9999px] px-6 py-3`}
      style={isLight ? { backdropFilter: "none" } : { backdropFilter: "blur(12px)" }}
    >
      <a aria-label="首页" href="#home" className="shrink-0" onClick={(e) => onClick(e, "home")}>
        <span className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-white/15 shadow-inner" style={{ background: GRADIENT }}>
          <HomeIcon className="size-5 text-white" strokeWidth={2.5} />
        </span>
      </a>

      <nav className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-sm font-medium">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => onClick(e, it.id)}
              className={
                "relative group inline-flex items-center justify-center rounded-full px-4 py-2 transition-all text-white/85 hover:text-white"
              }
            >
              <span
                className={
                  `absolute inset-0 -z-10 rounded-full transition-all duration-300 ring-0 ${
                    isActive
                      ? "opacity-100 scale-100 ring-1 ring-white/15"
                      : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:ring-1 group-hover:ring-white/15"
                  }`
                }
                style={{ background: GRADIENT, boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.06)" }}
                aria-hidden
              />
              <div
                className={
                  `relative transition-all duration-300 ${
                    isActive ? "text-white scale-[1.08]" : "group-hover:scale-[1.08] group-hover:text-white"
                  }`
                }
              >
                {it.label}
              </div>
            </a>
          );
        })}
      </nav>
    </div>
  );
}