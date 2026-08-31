import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

export type Offer = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  benefits: string[];
  note?: string;
  cta: string;
  featured?: boolean;
};

export const offers: Offer[] = [
  {
    id: "essentials",
    name: "Valora Essentials",
    price: "$50",
    priceNote: "per month",
    tagline: "A structured starting point you can follow on your own.",
    benefits: [
      "Self-guided program with a monthly calendar",
      "3 strength workouts each week",
      "Home and gym options for every session",
      "Full exercise demo library",
      "One wellness lesson each month",
      "Trackers and printable resources",
    ],
    note: "No personalized coaching is included at this level.",
    cta: "Start with Essentials",
  },
  {
    id: "collective",
    name: "Valora Collective",
    price: "$100",
    priceNote: "per month",
    tagline: "Structure plus community and monthly guidance.",
    benefits: [
      "Everything in Essentials",
      "Coaching app access",
      "Progressive workouts updated monthly",
      "Habit tracking",
      "Monthly group call",
      "Monthly form clinic or guided workout",
      "Private community with prompts and challenges",
    ],
    cta: "Join the Collective",
  },
  {
    id: "foundations",
    name: "Valora Foundations",
    price: "$597",
    priceNote: "6 weeks",
    tagline: "A guided six-week runway into consistent movement.",
    benefits: [
      "Personal intake and starting-point assessment",
      "Nutrition and protein targets",
      "Personalized 6-week movement plan",
      "Kickoff, midpoint, and completion sessions",
      "Weekly check-ins",
      "App-based tracking and messaging",
      "A clear next-step roadmap",
    ],
    cta: "Apply for Foundations",
  },
  {
    id: "method",
    name: "The Valora Method",
    price: "$1,497",
    priceNote: "12 weeks · or 3 payments of $525",
    tagline: "The full transformation, coached end to end.",
    benefits: [
      "Personalized assessment",
      "Individual training and nutrition strategy",
      "8 private coaching sessions",
      "Weekly check-ins with app and form feedback",
      "Habit building woven through each phase",
      "GLP-1 support if applicable",
      "Ongoing adjustments and a maintenance roadmap",
    ],
    cta: "Begin the Valora Method",
    featured: true,
  },
  {
    id: "private",
    name: "Valora Private",
    price: "$697+",
    priceNote: "per month · 3-month minimum",
    tagline: "Weekly one-to-one coaching, fully bespoke.",
    benefits: [
      "Weekly 50-minute Zoom session",
      "Personalized programming, nutrition, and habits",
      "Ongoing reviews and adjustments",
      "Priority messaging and form feedback",
      "Progress reports",
      "Travel and schedule planning",
    ],
    cta: "Apply for Private Coaching",
  },
];

export function OfferCarousel({ onSelect }: { onSelect: (offer: Offer) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (slide) track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      children.forEach((child, i) => {
        const c = child.offsetLeft - track.offsetLeft + child.clientWidth / 2;
        const d = Math.abs(c - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Coaching offers"
      >
        {offers.map((offer) => (
          <article
            key={offer.id}
            className={`relative flex w-[85vw] shrink-0 snap-center flex-col border p-7 sm:w-[420px] sm:p-9 ${
              offer.featured
                ? "border-gold bg-primary text-primary-foreground"
                : "border-border bg-card text-card-foreground"
            }`}
          >
            {offer.featured && (
              <span className="eyebrow absolute -top-px left-0 bg-gold px-3 py-1 text-accent-foreground">
                Most popular · best value
              </span>
            )}
            <p
              className={`eyebrow mt-3 ${offer.featured ? "text-gold" : "text-muted-foreground"}`}
            >
              {offer.featured ? "Signature" : "Offering"}
            </p>
            <h3 className="mt-3 text-3xl sm:text-4xl">{offer.name}</h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                offer.featured ? "text-primary-foreground/75" : "text-muted-foreground"
              }`}
            >
              {offer.tagline}
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-5xl">{offer.price}</span>
              <span
                className={`text-xs ${
                  offer.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {offer.priceNote}
              </span>
            </div>
            <div
              className={`my-6 h-px w-full ${offer.featured ? "bg-gold/40" : "bg-border"}`}
              aria-hidden
            />
            <ul className="flex-1 space-y-3 text-sm">
              {offer.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                  <span className={offer.featured ? "text-primary-foreground/90" : ""}>{b}</span>
                </li>
              ))}
            </ul>
            {offer.note && (
              <p
                className={`mt-5 border-l-2 border-gold/60 pl-3 text-xs italic ${
                  offer.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {offer.note}
              </p>
            )}
            <button
              type="button"
              onClick={() => onSelect(offer)}
              className={`mt-8 w-full px-6 py-4 text-xs tracking-[0.2em] uppercase transition-colors ${
                offer.featured
                  ? "bg-gold text-accent-foreground hover:bg-gold-soft"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {offer.cta}
            </button>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-6">
        <div className="flex gap-2">
          {offers.map((offer, i) => (
            <button
              key={offer.id}
              type="button"
              aria-label={`Go to ${offer.name}`}
              aria-current={active === i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? "w-8 bg-gold" : "w-3 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous offer"
            onClick={() => scrollTo(Math.max(0, active - 1))}
            className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next offer"
            onClick={() => scrollTo(Math.min(offers.length - 1, active + 1))}
            className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
