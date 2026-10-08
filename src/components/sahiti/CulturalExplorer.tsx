import { useState } from "react";
import type { CulturalArea } from "@/data/sahiti";
import { cn } from "@/lib/utils";

export function CulturalExplorerItem({
  area,
  index,
  active,
  onSelect,
}: {
  area: CulturalArea;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <li className="border-b border-border">
      <button
        type="button"
        aria-expanded={active}
        aria-controls={`explorer-panel-${index}`}
        onClick={onSelect}
        onMouseEnter={onSelect}
        onFocus={onSelect}
        className="group relative flex w-full items-baseline gap-6 py-6 text-left"
      >
        <span
          aria-hidden
          className={cn(
            "absolute left-0 top-0 h-full w-[2px] origin-top bg-maroon transition-transform duration-700 ease-[var(--ease-editorial)]",
            active ? "scale-y-100" : "scale-y-0",
          )}
        />
        <span className={cn("eyebrow w-8 shrink-0 pl-4 transition-colors", active ? "text-maroon" : "text-muted-foreground")}>
          0{index + 1}
        </span>
        <span className="min-w-0 flex-1 transition-transform duration-500 group-hover:translate-x-1">
          <span lang="te" className={cn("font-te block text-3xl transition-colors md:text-4xl", active ? "text-maroon" : "text-foreground/50")}>
            {area.te}
          </span>
          <span className={cn("eyebrow mt-2 block transition-colors", active ? "text-foreground" : "text-muted-foreground")}>{area.en}</span>
        </span>
        <span aria-hidden className={cn("text-terracotta transition-all duration-500", active ? "opacity-100" : "-translate-x-2 opacity-0")}>→</span>
      </button>
      {/* Mobile accordion body */}
      <div className={cn("grid transition-[grid-template-rows] duration-700 ease-[var(--ease-editorial)] lg:hidden", active ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="pb-8">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={area.image} alt={area.en} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export function CulturalExplorer({ areas }: { areas: CulturalArea[] }) {
  const [active, setActive] = useState(0);
  const current = areas[active]!;
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <ul className="border-t border-border lg:col-span-5">
        {areas.map((a, i) => (
          <CulturalExplorerItem key={a.en} area={a} index={i} active={i === active} onSelect={() => setActive(i)} />
        ))}
      </ul>
      <div id={`explorer-panel-${active}`} aria-live="polite" className="relative hidden lg:col-span-7 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
            {areas.map((a, i) => (
              <img
                key={a.en}
                src={a.image}
                alt={i === active ? a.en : ""}
                aria-hidden={i !== active}
                loading="lazy"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-[var(--ease-editorial)]",
                  i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                )}
              />
            ))}
            <div className="bg-overlay-card absolute inset-0" />
            <div key={active} className="anim-rise absolute inset-x-0 bottom-0 p-10 text-on-dark">
              <p className="eyebrow text-gold">0{active + 1} · {current.en}</p>
              <p lang="te" className="font-te mt-4 text-6xl leading-tight">{current.te}</p>
              <p className="mt-4 max-w-md font-serif text-xl italic leading-snug text-on-dark-muted">{current.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
