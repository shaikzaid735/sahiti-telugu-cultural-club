import { useEffect, useState } from "react";
import { navLinks } from "@/data/sahiti";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-charcoal/80 py-3 backdrop-blur-md" : "bg-transparent py-6",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10"
        >
          <a href="#top" className="flex items-baseline gap-3 text-on-dark">
            <span lang="te" className="font-te text-2xl">
              సాహితి
            </span>
            <span className="eyebrow text-on-dark-muted">Sahiti</span>
          </a>
          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-reveal pb-1 text-[0.8rem] tracking-wide text-on-dark-muted transition-colors hover:text-on-dark"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#join"
            className="eyebrow hidden border border-line-dark px-5 py-3 text-on-dark transition-colors hover:border-gold hover:text-gold lg:inline-block"
          >
            Join Sahiti
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="eyebrow p-2 text-on-dark lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-charcoal px-6 py-6 text-on-dark transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between">
          <span lang="te" className="font-te text-2xl">
            సాహితి
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="eyebrow p-2"
            tabIndex={open ? 0 : -1}
          >
            Close
          </button>
        </div>
        <ul className="mt-16 flex flex-col gap-2">
          {navLinks.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-5 border-b border-line-dark py-4 font-serif text-4xl"
              >
                <span className="eyebrow text-gold">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#join"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className="eyebrow mt-auto bg-maroon py-5 text-center text-on-dark"
        >
          Join Sahiti →
        </a>
      </div>
    </>
  );
}
