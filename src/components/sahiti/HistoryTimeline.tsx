import { useState } from "react";
import type { TimelineItem } from "@/data/sahiti";
import { cn } from "@/lib/utils";

export function HistoryTimelineItem({
  item,
  index,
  active,
  onSelect,
}: {
  item: TimelineItem;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <li className="relative md:flex-1">
      <button
        type="button"
        aria-pressed={active}
        onClick={onSelect}
        className="group relative block w-full pb-2 text-left md:pr-6 md:pt-10"
      >
        <span
          aria-hidden
          className={cn(
            "absolute -left-[37px] top-2 h-2 w-2 rotate-45 transition-all duration-500 md:-top-[5px] md:left-0",
            active ? "scale-150 bg-maroon" : "bg-terracotta/60 group-hover:bg-terracotta",
          )}
        />
        <span
          className={cn(
            "eyebrow block transition-colors",
            active ? "text-maroon" : "text-muted-foreground",
          )}
        >
          Era 0{index + 1}
        </span>
        <span
          className={cn(
            "mt-3 block font-serif text-2xl font-medium transition-colors lg:text-3xl",
            active ? "text-foreground" : "text-foreground/50 group-hover:text-foreground/80",
          )}
        >
          {item.era}
        </span>
        <span
          lang="te"
          className={cn(
            "font-te mt-1 block text-lg transition-colors",
            active ? "text-maroon" : "text-maroon/50",
          )}
        >
          {item.te}
        </span>
      </button>
      {/* Mobile: inline reveal */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-700 ease-[var(--ease-editorial)] md:hidden",
          active ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <EraDetail item={item} />
        </div>
      </div>
    </li>
  );
}

function EraDetail({ item }: { item: TimelineItem }) {
  return (
    <div className="pt-4">
      {item.image ? (
        <div className="aspect-[4/3] max-w-md overflow-hidden">
          <img
            src={item.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover grayscale-[40%]"
          />
        </div>
      ) : (
        <p
          lang="te"
          aria-hidden
          className="font-te text-6xl leading-tight text-maroon/15 md:text-8xl"
        >
          {item.te}
        </p>
      )}
      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
        {item.text}
      </p>
    </div>
  );
}

export function HistoryTimeline({ items }: { items: TimelineItem[] }) {
  const [active, setActive] = useState(0);
  const progress = ((active + 0.5) / items.length) * 100;
  const current = items[active]!;
  return (
    <div>
      <div className="relative">
        <span
          aria-hidden
          className="absolute left-0 top-0 hidden h-px bg-maroon transition-[width] duration-700 ease-[var(--ease-editorial)] md:block"
          style={{ width: `${progress}%` }}
        />
        <ol className="relative grid gap-10 border-l border-border pl-8 md:flex md:gap-0 md:border-l-0 md:border-t md:pl-0">
          {items.map((t, i) => (
            <HistoryTimelineItem
              key={t.era}
              item={t}
              index={i}
              active={i === active}
              onSelect={() => setActive(i)}
            />
          ))}
        </ol>
      </div>
      <div
        key={active}
        aria-live="polite"
        className="anim-rise mt-14 hidden grid-cols-12 gap-10 md:grid"
      >
        <div className="col-span-5">
          <p className="eyebrow text-terracotta">Era 0{active + 1}</p>
          <h3 className="mt-3 font-serif text-5xl font-medium">{current.era}</h3>
          <p lang="te" className="font-te mt-2 text-2xl text-maroon">
            {current.te}
          </p>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">{current.text}</p>
        </div>
        <div className="col-span-7">
          {current.image ? (
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={current.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover grayscale-[40%]"
              />
            </div>
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center border border-border">
              <p lang="te" aria-hidden className="font-te text-8xl text-maroon/20 lg:text-9xl">
                {current.te}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
