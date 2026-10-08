import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sahiti/Navbar";
import {
  Activities,
  CinematicArts,
  CTASection,
  EventsPreview,
  Footer,
  GalleryGrid,
  Hero,
  Intro,
  Literature,
  Stories,
  TeluguWorld,
  Timeline,
} from "@/components/sahiti/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahiti (సాహితి) — A Living Expression of Telugu" },
      {
        name: "description",
        content:
          "Sahiti is a Telugu cultural club celebrating language, literature, history, drama, music and dance.",
      },
      { property: "og:title", content: "Sahiti (సాహితి) — A Living Expression of Telugu" },
      {
        property: "og:description",
        content: "Discover Telugu language, literature, history and performing arts with Sahiti.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <TeluguWorld />
        <CinematicArts />
        <Timeline />
        <Literature />
        <Activities />
        <EventsPreview />
        <Stories />
        <GalleryGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
