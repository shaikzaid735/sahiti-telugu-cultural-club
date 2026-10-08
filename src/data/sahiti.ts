// DEMONSTRATION CONTENT — all events, stories and activities below are fictional
// samples for this prototype. Replace with official Sahiti content later.
import hero from "@/assets/hero.jpg";
import drama from "@/assets/drama.jpg";
import music from "@/assets/music.jpg";
import dance from "@/assets/dance.jpg";
import literature from "@/assets/literature.jpg";
import festival from "@/assets/festival.jpg";
import language from "@/assets/language.jpg";
import history from "@/assets/history.jpg";

export const images = { hero, drama, music, dance, literature, festival, language, history };

export const navLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Culture", href: "#culture" },
  { label: "Activities", href: "#activities" },
  { label: "Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
];

export type CulturalArea = { en: string; te: string; text: string; image: string };
export const culturalAreas: CulturalArea[] = [
  {
    en: "Language",
    te: "భాష",
    text: "Fifty-six letters, a rounded script and a voice called the Italian of the East.",
    image: language,
  },
  {
    en: "Literature",
    te: "సాహిత్యం",
    text: "From palm-leaf epics to modern verse — a thousand years of written Telugu.",
    image: literature,
  },
  {
    en: "History",
    te: "చరిత్ర",
    text: "Dynasties, stone gateways and the stories carved into them.",
    image: history,
  },
  {
    en: "Drama",
    te: "నాటకం",
    text: "Padya natakam, street theatre and the stage that never went quiet.",
    image: drama,
  },
  {
    en: "Music & Dance",
    te: "సంగీతం",
    text: "Carnatic kritis, Kuchipudi and the rhythms of the village square.",
    image: dance,
  },
  {
    en: "Culture",
    te: "సంస్కృతి",
    text: "Muggulu at dawn, kites at Sankranti, food that tastes like home.",
    image: festival,
  },
];

export const arts = [
  { en: "Drama & Theatre", te: "నాటకం", image: drama },
  { en: "Music", te: "సంగీతం", image: music },
  { en: "Dance", te: "నాట్యం", image: dance },
];

export type TimelineItem = { era: string; te: string; text: string; image?: string };
export const timeline: TimelineItem[] = [
  {
    era: "Ancient",
    te: "ప్రాచీనం",
    text: "Early inscriptions offer glimpses of a language taking shape.",
  },
  {
    era: "Satavahana",
    te: "శాతవాహన",
    text: "An era often associated with trade and the growth of a regional identity.",
  },
  {
    era: "Kakatiya",
    te: "కాకతీయ",
    text: "Remembered for its stone architecture and temple art.",
    image: history,
  },
  {
    era: "Vijayanagara",
    te: "విజయనగర",
    text: "A period known for courtly poetry and literary patronage.",
    image: literature,
  },
  {
    era: "Colonial",
    te: "వలస యుగం",
    text: "Printing presses and new forms of prose reached wider readers.",
  },
  {
    era: "Modern",
    te: "ఆధునికం",
    text: "Cinema, media and communities carrying Telugu around the world.",
    image: festival,
  },
];

export const literatureThemes = [
  { te: "పద్యం", en: "Poetry", text: "Metre, rhythm and the padyam recited by heart." },
  { te: "కథ", en: "Stories", text: "Short fiction that holds an entire village in a page." },
  { te: "కవులు", en: "Authors", text: "The poets and writers who shaped how we speak." },
  { te: "సంప్రదాయం", en: "Traditions", text: "Avadhanam, harikatha and living literary forms." },
];

export const activities = [
  { te: "నాటకం", en: "Drama", text: "Rehearse and stage short Telugu plays.", image: drama },
  { te: "ప్రదర్శన", en: "Performances", text: "Music and dance evenings on campus.", image: dance },
  {
    te: "పోటీలు",
    en: "Competitions",
    text: "Quizzes, recitation and writing contests.",
    image: language,
  },
  {
    te: "కార్యశాల",
    en: "Workshops",
    text: "Hands-on sessions in script, art and craft.",
    image: literature,
  },
  {
    te: "పండుగలు",
    en: "Festivals",
    text: "Ugadi, Sankranti and Bathukamma together.",
    image: festival,
  },
  {
    te: "ప్రసంగాలు",
    en: "Talks",
    text: "Conversations with writers and historians.",
    image: history,
  },
];

export type SahitiEvent = {
  title: string;
  te: string;
  subtitle: string;
  date: string;
  month: string;
  venue: string;
  category: string;
};
export const events: SahitiEvent[] = [
  {
    title: "Rangam",
    te: "రంగం",
    subtitle: "A Telugu Theatre Evening",
    date: "14",
    month: "Nov",
    venue: "Main Auditorium",
    category: "Drama",
  },
  {
    title: "Kavita",
    te: "కవిత",
    subtitle: "An Evening of Telugu Poetry",
    date: "28",
    month: "Nov",
    venue: "Library Courtyard",
    category: "Literature",
  },
  {
    title: "Sankranti",
    te: "సంక్రాంతి",
    subtitle: "A Celebration of Tradition",
    date: "13",
    month: "Jan",
    venue: "Open Lawns",
    category: "Festival",
  },
  {
    title: "Heritage Quiz",
    te: "ప్రశ్న",
    subtitle: "Telugu Heritage Quiz",
    date: "07",
    month: "Feb",
    venue: "Seminar Hall",
    category: "Competition",
  },
];

export const stories = [
  {
    title: "The Evolution of Telugu Literature",
    category: "Literature",
    read: "8 min read",
    image: literature,
  },
  {
    title: "The Many Forms of Telugu Theatre",
    category: "Drama",
    read: "6 min read",
    image: drama,
  },
  {
    title: "Living Traditions of Telugu Festivals",
    category: "Culture",
    read: "5 min read",
    image: festival,
  },
];

export const galleryCategories = [
  "All",
  "Events",
  "Drama",
  "Dance",
  "Music",
  "Festivals",
  "Competitions",
] as const;
export const gallery = [
  {
    image: hero,
    alt: "Performer under a spotlight on stage",
    category: "Drama",
    span: "md:col-span-2 md:row-span-2",
  },
  { image: dance, alt: "Classical dancer mid-movement", category: "Dance", span: "md:row-span-2" },
  {
    image: festival,
    alt: "Sankranti morning with muggulu and kites",
    category: "Festivals",
    span: "",
  },
  { image: music, alt: "Hands playing the veena", category: "Music", span: "" },
  {
    image: language,
    alt: "Telugu handwriting in ink",
    category: "Competitions",
    span: "md:col-span-2",
  },
  { image: drama, alt: "Actors in a mythological stage play", category: "Events", span: "" },
];
