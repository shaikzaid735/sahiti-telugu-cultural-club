import { useEffect, useRef } from "react";

export type LightboxItem = { image: string; alt: string; category: string };

export function GalleryLightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index]!;
  const prev = () => onChange((index - 1 + items.length) % items.length);
  const next = () => onChange((index + 1) % items.length);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onChange]);

  const ctrl =
    "eyebrow flex h-12 min-w-12 items-center justify-center gap-2 border border-line-dark px-4 text-on-dark transition-colors hover:border-gold hover:text-gold";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      className="fixed inset-0 z-[100] flex flex-col bg-charcoal/95 text-on-dark"
      style={{ animation: "rise .5s var(--ease-editorial) both" }}
    >
      <div className="flex items-center justify-between p-4 md:p-6">
        <p className="eyebrow text-on-dark-muted">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className={ctrl}
        >
          Close ✕
        </button>
      </div>
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 -z-10 cursor-default"
      />
      <figure className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 md:px-24">
        <img
          key={item.image + index}
          src={item.image}
          alt={item.alt}
          className="anim-fade max-h-full max-w-full object-contain"
        />
        <figcaption className="mt-5 text-center">
          <p className="eyebrow text-gold">{item.category}</p>
          <p className="mt-2 font-serif text-lg italic text-on-dark-muted">{item.alt}</p>
        </figcaption>
      </figure>
      <div className="flex justify-center gap-3 p-4 md:p-6">
        <button type="button" onClick={prev} aria-label="Previous image" className={ctrl}>
          ← Prev
        </button>
        <button type="button" onClick={next} aria-label="Next image" className={ctrl}>
          Next →
        </button>
      </div>
    </div>
  );
}
