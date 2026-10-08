import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({
  te,
  en,
  index,
  tone = "light",
  align = "left",
  className,
}: {
  te: string;
  en: string;
  index?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      <div className={cn("flex items-center gap-4", align === "center" && "justify-center")}>
        {index && (
          <span className={cn("eyebrow", dark ? "text-gold" : "text-terracotta")}>{index}</span>
        )}
        <span className={cn("h-px w-10", dark ? "bg-line-dark" : "bg-border")} />
      </div>
      <p
        lang="te"
        className={cn(
          "font-te mt-6 text-5xl leading-[1.3] md:text-7xl",
          dark ? "text-on-dark" : "text-maroon",
        )}
      >
        {te}
      </p>
      <h2
        className={cn(
          "mt-2 font-serif text-2xl font-medium uppercase tracking-[0.18em] md:text-3xl",
          dark ? "text-on-dark-muted" : "text-foreground",
        )}
      >
        {en}
      </h2>
    </Reveal>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <a
      href={href}
      className={cn(
        "eyebrow group inline-flex items-center gap-3 py-2",
        tone === "dark" ? "text-on-dark" : "text-maroon",
      )}
    >
      <span className="link-reveal pb-1">{children}</span>
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
