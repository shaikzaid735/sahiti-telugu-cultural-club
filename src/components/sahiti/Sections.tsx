import { useState } from "react";
import {
  activities,
  arts,
  culturalAreas,
  events,
  gallery,
  galleryCategories,
  images,
  literatureThemes,
  navLinks,
  stories,
  timeline,
  type SahitiEvent,
} from "@/data/sahiti";
import { ArrowLink, Reveal, SectionHeading } from "./primitives";
import { CulturalExplorer } from "./CulturalExplorer";
import { HistoryTimeline } from "./HistoryTimeline";
import { GalleryLightbox } from "./GalleryLightbox";
import { cn } from "@/lib/utils";

const wrap = "mx-auto max-w-[1400px] px-6 md:px-10";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-charcoal text-on-dark">
      <img
        src={images.hero}
        alt="A Telugu theatre performer standing in a warm spotlight on a dark stage"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="anim-fade absolute inset-0 h-full w-full object-cover object-[60%_center]"
      />
      <div className="bg-overlay-hero absolute inset-0" />
      <div className={cn(wrap, "relative flex flex-1 flex-col justify-end pb-28 pt-32 md:pb-32")}>
        <p className="eyebrow anim-rise text-gold" style={{ animationDelay: "0.4s" }}>Telugu Cultural Club</p>
        <h1 className="mt-4">
          <span lang="te" className="font-te anim-rise block text-[5.5rem] leading-[1.15] sm:text-[8rem] md:text-[11rem] lg:text-[13rem]" style={{ animationDelay: "0.7s" }}>
            సాహితి
          </span>
          <span className="anim-rise mt-2 block font-serif text-2xl tracking-[0.6em] text-on-dark-muted md:text-3xl" style={{ animationDelay: "1.1s" }}>
            SAHITI
          </span>
        </h1>
        <p className="anim-rise mt-8 max-w-xl font-serif text-3xl italic leading-tight md:text-4xl" style={{ animationDelay: "1.4s" }}>
          A living expression of Telugu.
        </p>
        <div className="anim-rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8" style={{ animationDelay: "1.7s" }}>
          <a href="#explore" className="eyebrow inline-flex items-center justify-center gap-3 bg-maroon px-8 py-5 text-on-dark transition-colors hover:bg-terracotta">
            Explore Sahiti <span aria-hidden>→</span>
          </a>
          <ArrowLink href="#culture" tone="dark">Discover Telugu</ArrowLink>
        </div>
      </div>
      <a href="#explore" aria-label="Scroll to introduction" className="anim-rise absolute bottom-8 left-1/2 -translate-x-1/2 text-on-dark-muted" style={{ animationDelay: "2.2s" }}>
        <span className="anim-drift block h-12 w-px bg-on-dark-muted" />
      </a>
    </section>
  );
}

export function Intro() {
  return (
    <section id="explore" className="bg-background py-28 md:py-44">
      <div className={cn(wrap, "grid gap-12 md:grid-cols-12")}>
        <Reveal className="md:col-span-5">
          <p className="eyebrow text-terracotta">01 — Introduction</p>
          <p lang="te" className="font-te mt-8 text-4xl text-maroon md:text-5xl">మన సంస్కృతి</p>
        </Reveal>
        <Reveal className="md:col-span-7" delay={150}>
          <h2 className="font-serif text-5xl font-medium leading-[1.02] md:text-7xl">More than a club.</h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Sahiti is a gathering place for anyone drawn to Telugu — its language, its literature, its long memory and its
            living arts. We read poems aloud, stage plays, celebrate the festivals we grew up with and discover the ones we
            didn't. Whether Telugu is your mother tongue or a new curiosity, there is a seat for you here.
          </p>
          <div className="mt-10"><ArrowLink href="#culture">Discover Sahiti</ArrowLink></div>
        </Reveal>
      </div>
    </section>
  );
}

export function TeluguWorld() {
  return (
    <section id="culture" className="bg-background pb-32 md:pb-44">
      <div className={wrap}>
        <SectionHeading index="02" te="తెలుగు" en="The World of Telugu" />
        <Reveal className="mt-20">
          <CulturalExplorer areas={culturalAreas} />
        </Reveal>
      </div>
    </section>
  );
}

export function CinematicArts() {
  return (
    <section className="bg-charcoal py-28 text-on-dark md:py-40">
      <div className={wrap}>
        <div className="grid items-end gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-gold">03 — The Arts</p>
            <p lang="te" className="font-te mt-6 text-[7rem] leading-none md:text-[11rem]">కళ</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-serif text-4xl font-medium leading-tight md:text-6xl">Art that tells our story.</h2>
          </Reveal>
        </div>
      </div>
      <div className="mt-20 grid gap-1 md:grid-cols-3">
        {arts.map((a, i) => (
          <Reveal key={a.en} delay={i * 150}>
            <figure className="group relative h-[70vh] min-h-[420px] overflow-hidden">
              <img src={a.image} alt={a.en} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]" />
              <div className="bg-overlay-card absolute inset-0" />
              <figcaption className="absolute inset-x-0 bottom-0 p-8">
                <p lang="te" className="font-te text-4xl">{a.te}</p>
                <p className="eyebrow mt-3 text-on-dark-muted">{a.en}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section className="overflow-hidden bg-ivory-deep py-28 md:py-40">
      <div className={wrap}>
        <SectionHeading index="04" te="చరిత్ర" en="Telugu Through Time" />
        <p className="mt-6 max-w-lg text-sm text-muted-foreground">An introductory sketch of eras — sample content for demonstration only. Select an era to explore.</p>
        <Reveal className="mt-20">
          <HistoryTimeline items={timeline} />
        </Reveal>
      </div>
    </section>
  );
}

export function Literature() {
  return (
    <section className="bg-background py-28 md:py-44">
      <div className={cn(wrap, "grid gap-16 lg:grid-cols-12")}>
        <div className="lg:col-span-7">
          <Reveal>
            <div className="aspect-[5/4] overflow-hidden">
              <img src={images.literature} alt="Telugu palm-leaf manuscripts on a wooden desk" loading="lazy" width={1280} height={1024} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:pt-10">
          <SectionHeading index="05" te="సాహిత్యం" en="Words that outlive time" />
          <blockquote className="mt-12 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-snug text-foreground/80">
            “A language lives as long as someone is still reading it aloud.”
          </blockquote>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {literatureThemes.map((t) => (
              <li key={t.en} className="group grid grid-cols-[7rem_1fr] items-baseline gap-4 py-6">
                <span lang="te" className="font-te text-2xl text-maroon">{t.te}</span>
                <div>
                  <p className="font-serif text-xl font-medium">{t.en}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Activities() {
  return (
    <section id="activities" className="border-t border-border bg-background py-28 md:py-40">
      <div className={wrap}>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading index="06" te="మన కార్యక్రమాలు" en="Sahiti in Action" />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Telugu culture is the subject; Sahiti is the community. These are sample formats the club could run.
          </p>
        </div>
        <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.en} delay={(i % 3) * 100} className="bg-background">
              <article className="group relative flex h-full gap-6 p-8">
                <div className="h-24 w-20 shrink-0 overflow-hidden">
                  <img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                </div>
                <div>
                  <p lang="te" className="font-te text-xl text-maroon">{a.te}</p>
                  <h3 className="mt-1 font-serif text-2xl font-medium">{a.en}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ e }: { e: SahitiEvent }) {
  return (
    <li>
      <a href="#events" className="group grid grid-cols-[4.5rem_1fr] items-center gap-6 border-b border-border py-8 md:grid-cols-[7rem_1fr_10rem_8rem] md:gap-10">
        <div className="text-center">
          <p className="font-serif text-5xl leading-none">{e.date}</p>
          <p className="eyebrow mt-2 text-muted-foreground">{e.month}</p>
        </div>
        <div className="transition-transform duration-500 group-hover:translate-x-2">
          <p className="flex items-baseline gap-4">
            <span className="font-serif text-3xl font-medium md:text-4xl">{e.title}</span>
            <span lang="te" className="font-te text-xl text-maroon">{e.te}</span>
          </p>
          <p className="mt-1 text-muted-foreground">{e.subtitle}</p>
        </div>
        <p className="eyebrow hidden text-muted-foreground md:block">{e.venue}</p>
        <p className="eyebrow hidden text-right text-terracotta md:block">{e.category} →</p>
      </a>
    </li>
  );
}

export function EventsPreview() {
  return (
    <section id="events" className="bg-ivory-deep py-28 md:py-40">
      <div className={wrap}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading index="07" te="కార్యక్రమాలు" en="Upcoming Evenings" />
          <span className="eyebrow text-muted-foreground">Sample events · Demo data</span>
        </div>
        <ul className="mt-16 border-t border-foreground">
          {events.map((e) => <EventCard key={e.title} e={e} />)}
        </ul>
        <div className="mt-10"><ArrowLink href="#events">View all events</ArrowLink></div>
      </div>
    </section>
  );
}

export function Stories() {
  return (
    <section id="stories" className="bg-background py-28 md:py-40">
      <div className={wrap}>
        <SectionHeading index="08" te="కథలు" en="Stories worth sharing" />
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <a href="#stories" className="group block">
                <div className={cn("overflow-hidden", i === 0 ? "aspect-[3/4]" : "aspect-[4/3]")}>
                  <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                </div>
                <p className="eyebrow mt-6 text-terracotta">{s.category} · <span className="text-muted-foreground">{s.read}</span></p>
                <h3 className="mt-3 font-serif text-3xl font-medium leading-tight">
                  <span className="link-reveal">{s.title}</span>
                </h3>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryGrid() {
  const [cat, setCat] = useState<(typeof galleryCategories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = gallery.filter((g) => cat === "All" || g.category === cat);
  return (
    <section id="gallery" className="bg-charcoal py-28 text-on-dark md:py-40">
      <div className={wrap}>
        <SectionHeading index="09" te="మన జ్ఞాపకాలు" en="Moments of Sahiti" tone="dark" />
        <div role="tablist" aria-label="Gallery categories" className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {galleryCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={cn("eyebrow border-b pb-2 transition-colors", cat === c ? "border-gold text-on-dark" : "border-transparent text-on-dark-muted hover:text-on-dark")}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-2 md:auto-rows-[260px] md:grid-cols-4">
          {items.map((g, i) => (
            <button
              type="button"
              key={g.alt}
              onClick={() => setOpen(i)}
              aria-label={`View image: ${g.alt}`}
              className={cn("group relative overflow-hidden text-left", cat === "All" && g.span)}
            >
              <img src={g.image} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
              <span className="eyebrow absolute bottom-3 left-3 text-on-dark opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">{g.category} ↗</span>
            </button>
          ))}
        </div>
        {open !== null && <GalleryLightbox items={items} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
        <div className="mt-12"><ArrowLink href="#gallery" tone="dark">Explore gallery</ArrowLink></div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="join" className="relative overflow-hidden bg-maroon py-36 text-center text-on-dark md:py-52">
      <img src={images.dance} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity" />
      <div className={cn(wrap, "relative")}>
        <Reveal>
          <p lang="te" className="font-te text-3xl text-gold md:text-4xl">మనతో కలిసి నడవండి</p>
          <h2 className="mt-8 font-serif text-6xl font-medium leading-none md:text-8xl">Be part of Sahiti</h2>
          <p className="eyebrow mt-10 text-on-dark-muted">Discover. Participate. Create. Celebrate.</p>
          <a href="#join" className="eyebrow mt-14 inline-flex items-center gap-3 bg-ivory px-10 py-5 text-maroon transition-colors hover:bg-gold hover:text-charcoal">
            Join Sahiti <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="about" className="bg-charcoal py-16 text-on-dark">
      <div className={cn(wrap, "grid gap-12 md:grid-cols-[1fr_auto]")}>
        <div>
          <p lang="te" className="font-te text-4xl">సాహితి</p>
          <p className="eyebrow mt-2 text-on-dark-muted">Sahiti · Telugu Cultural Club</p>
          <p className="mt-6 max-w-sm text-xs text-on-dark-muted">This is a demonstration website. Events, stories and activities shown are sample content.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="link-reveal text-sm text-on-dark-muted hover:text-on-dark">{l.label}</a>
          ))}
        </nav>
      </div>
      <div className={cn(wrap, "mt-14 flex flex-col justify-between gap-4 border-t border-line-dark pt-6 text-xs text-on-dark-muted sm:flex-row")}>
        <p>© 2026 Sahiti</p>
        <div className="flex gap-6">
          {["Instagram", "YouTube", "Email"].map((s) => (
            <a key={s} href="#about" className="link-reveal hover:text-on-dark">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
