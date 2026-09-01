import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { OfferCarousel, offers, type Offer } from "@/components/OfferCarousel";
import heroWoman from "@/assets/hero-woman.jpg";
import infinity from "@/assets/infinity-emblem.png";
import savannah from "@/assets/savannah-story.jpg";
import sandra from "@/assets/sandra.jpg";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valora Method — Virtual Strength Coaching for Women" },
      {
        name: "description",
        content:
          "You do not need to be fit to begin. Valora Method offers virtual coaching from $50/month to private 1:1, helping women build strength, confidence, and lasting habits.",
      },
      { property: "og:title", content: "Valora Method — Virtual Strength Coaching for Women" },
      {
        property: "og:description",
        content:
          "We meet you where you are and help you build from there. Explore Essentials, Collective, Foundations, The Valora Method, and Private coaching.",
      },
    ],
  }),
  component: Index,
});

const comparison = [
  {
    level: "Want structure only",
    pick: "Valora Essentials",
    detail: "You are self-motivated and simply need a plan to follow each week.",
  },
  {
    level: "Want structure and community",
    pick: "Valora Collective",
    detail: "You do better with monthly guidance, group energy, and accountability.",
  },
  {
    level: "Want a guided restart",
    pick: "Valora Foundations",
    detail: "Six focused weeks with a coach to get moving and build the base habits.",
  },
  {
    level: "Want full transformation",
    pick: "The Valora Method",
    detail: "Twelve weeks of personalized coaching, private sessions, and lasting habits.",
  },
  {
    level: "Want a coach in your corner weekly",
    pick: "Valora Private",
    detail: "Ongoing one-to-one coaching built entirely around your life.",
  },
];
const transformations = [
  {
    name: "Michelle",
    timeline: "January → today",
    src: transformation1,
    alt: "Side-by-side progress photos of Michelle showing posture and body composition changes over several months",
    quote:
      "I had never lifted a weight in my life. Sandra started me where I actually was, and every month I felt a little stronger and a little more like myself.",
  },
  {
    name: "Andrea",
    timeline: "Twelve months of coaching",
    src: transformation2,
    alt: "Side-by-side progress photos of Andrea showing improved posture and muscle definition across a year of training",
    quote:
      "The difference was consistency, not intensity. Weekly check-ins kept me honest and the workouts fit around my job and my kids.",
  },
];


function Emblem({ className = "" }: { className?: string }) {
  return (
    <img
      src={infinity}
      alt=""
      aria-hidden
      loading="lazy"
      width={512}
      height={512}
      className={className}
    />
  );
}

function Index() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState("The Valora Method");
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const goToForm = (offer?: Offer) => {
    if (offer) setSelected(offer.name);
    setSent(false);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2">
            <Emblem className="h-6 w-10 object-contain" />
            <span className="font-display text-xl tracking-wide">Valora Method</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs tracking-[0.18em] uppercase md:flex">
            <a href="#about" className="hover:text-gold">
              About
            </a>
            <a href="#offers" className="hover:text-gold">
              Coaching
            </a>
            <a href="#compare" className="hover:text-gold">
              Compare
            </a>
            <a href="#proof" className="hover:text-gold">
              Results
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex flex-col justify-center gap-[5px] p-1 md:hidden"
            >
              <span className={`block h-px w-6 bg-foreground transition-all duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition-all duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
            <button
              type="button"
              onClick={() => goToForm()}
              className="bg-primary px-5 py-3 text-[0.65rem] tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              Start here
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border/50 bg-background/95 md:hidden">
            <div className="flex flex-col px-5 text-xs tracking-[0.18em] uppercase">
              <a href="#about" onClick={() => setMenuOpen(false)} className="border-b border-border/40 py-4 hover:text-gold">About</a>
              <a href="#offers" onClick={() => setMenuOpen(false)} className="border-b border-border/40 py-4 hover:text-gold">Coaching</a>
              <a href="#compare" onClick={() => setMenuOpen(false)} className="border-b border-border/40 py-4 hover:text-gold">Compare</a>
              <a href="#proof" onClick={() => setMenuOpen(false)} className="py-4 hover:text-gold">Results</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow text-gold">Virtual coaching for women</p>
            <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
              You do not need to be fit to begin.
              <span className="mt-2 block italic text-gold">
                You just need a starting point.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Valora helps women move from feeling stuck and inactive to building strength,
              confidence, and habits that fit their real lives.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#offers"
                className="bg-primary px-8 py-4 text-center text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
              >
                Explore coaching
              </a>
              <button
                type="button"
                onClick={() => goToForm()}
                className="border border-primary/30 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Find my starting point
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/40" aria-hidden />
            <img
              src={heroWoman}
              alt="A woman standing calmly in a sunlit studio, ready to begin training"
              width={1200}
              height={1504}
              className="relative h-[420px] w-full object-cover sm:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* Promise band */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 py-16 text-center">
          <Emblem className="h-10 w-16 object-contain" />
          <blockquote className="text-2xl leading-snug italic sm:text-3xl">
            “We meet you where you are and help you build from there.”
          </blockquote>
          <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/70">
            No bootcamp energy. No shame. Just strength training, nutrition guidance, and habits
            designed for women who have struggled with consistency.
          </p>
        </div>
      </section>

      {/* About Sandra */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="absolute -inset-3 border border-gold/40" aria-hidden />
            <img
              src={sandra}
              alt="Sandra Ruiz-White, founder of Valora Method"
              loading="lazy"
              width={840}
              height={952}
              className="relative h-[420px] w-full object-cover object-center sm:h-[560px]"
            />
          </div>
          <div>
            <p className="eyebrow text-gold">Founder · Coach</p>
            <h2 className="mt-5 text-4xl sm:text-5xl">Meet Sandra Ruiz-White</h2>
            <p className="mt-3 font-display text-2xl italic text-muted-foreground">
              Built by science. Proven by results.
            </p>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Valora Method was created by Sandra Ruiz-White, a behavioral science
                practitioner and wellness coach who saw a gap in the industry: women were being
                handed the same generic plans as everyone else, with no consideration for their
                hormonal complexity, demanding schedules, or the psychology of starting over.
              </p>
              <p>
                Valora was born at the intersection of Applied Behavior Analysis and premium
                wellness. Every protocol is built on evidence, every system is tailored to the
                individual, and every result is designed to last — whether you are returning to
                movement after years away or building consistency for the first time.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {[
                "Applied Behavior Analysis",
                "Hormone-Aware Strategy",
                "Motivational Psychology",
                "Strength & Conditioning",
              ].map((tag) => (
                <li
                  key={tag}
                  className="border border-gold/50 px-4 py-2 text-[0.65rem] tracking-[0.18em] uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => goToForm()}
                className="bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
              >
                Work with Sandra
              </button>
              <a
                href="https://instagram.com/valora.health"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-gold underline-offset-8 transition-colors hover:underline"
              >
                @valora.health
              </a>
              <a
                href="mailto:valoramethod@gmail.com"
                className="text-xs tracking-[0.2em] uppercase text-gold underline-offset-8 transition-colors hover:underline"
              >
                valoramethod@gmail.com
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* Offers carousel */}
      <section id="offers" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Virtual coaching services</p>
          <h2 className="mt-5 text-4xl sm:text-5xl">Five ways to begin</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every offer is delivered virtually, so you can train at home or at the gym, on your
            schedule. Swipe through to find the level of support that fits you right now.
          </p>
        </div>
        <div className="mt-12">
          <OfferCarousel onSelect={goToForm} />
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="bg-secondary/60">
        <div className="mx-auto max-w-5xl px-5 py-20 md:py-24">
          <p className="eyebrow text-gold">Choose your support level</p>
          <h2 className="mt-5 text-4xl sm:text-5xl">Not sure where to start?</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {comparison.map((row) => (
              <div
                key={row.pick}
                className="grid gap-2 py-6 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-8"
              >
                <p className="text-sm font-medium">{row.level}</p>
                <p className="text-sm text-muted-foreground">{row.detail}</p>
                <p className="font-display text-xl text-gold sm:text-right">{row.pick}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => goToForm()}
            className="mt-10 bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
          >
            Ask which is right for me
          </button>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-3 border border-gold/40" aria-hidden />
          <img
            src={savannah}
            alt="Savannah walking outdoors in morning light after six weeks of coaching"
            loading="lazy"
            width={1200}
            height={912}
            className="relative h-[360px] w-full object-cover sm:h-[440px]"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="eyebrow text-gold">Progress that is real</p>
          <h2 className="mt-5 text-4xl sm:text-5xl">Savannah&rsquo;s first six weeks</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-7">
            <div>
              <p className="font-display text-4xl text-gold">2,000 → 7,000</p>
              <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Daily steps
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-gold">−2 inches</p>
              <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                In six weeks
              </p>
            </div>
          </div>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">
            Savannah did not start with a gym membership or a perfect week. She started with a
            starting point, and built from there.
          </p>
        </div>
      </section>

      {/* Transformations */}
      <section id="transformations" className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Real women · Real progress</p>
            <h2 className="mt-5 text-4xl sm:text-5xl">Trained with Sandra</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              These are clients who started exactly where you are — busy, unsure, and tired of
              starting over. Consistent strength work, realistic nutrition, and steady coaching
              did the rest.
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {transformations.map((t) => (
              <figure key={t.name} className="flex flex-col">
                <div className="relative">
                  <div className="absolute -inset-3 border border-gold/40" aria-hidden />
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    className="relative w-full bg-background object-contain"
                  />
                </div>
                <figcaption className="mt-8">
                  <p className="font-display text-2xl text-gold">{t.name}</p>
                  <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {t.timeline}
                  </p>
                  <blockquote className="mt-4 text-base leading-relaxed italic text-muted-foreground">
                    “{t.quote}”
                  </blockquote>
                </figcaption>
              </figure>
            ))}
          </div>
          <button
            type="button"
            onClick={() => goToForm()}
            className="mt-14 bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
          >
            Start your own progress
          </button>
        </div>
      </section>


      {/* Lead / application form */}
      <section ref={formRef} id="apply" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <div className="text-center">
            <Emblem className="mx-auto h-9 w-14 object-contain" />
            <p className="eyebrow mt-5 text-gold">Begin</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Tell us your starting point</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/70">
              Share a few details and we will follow up within one business day with next steps for
              your chosen level of support.
            </p>
          </div>

          {sent ? (
            <div className="mt-12 border border-gold/50 p-10 text-center">
              <h3 className="text-3xl">Thank you.</h3>
              <p className="mt-3 text-sm text-primary-foreground/75">
                Your request for {selected} is in. Look for an email from Valora Method shortly.
              </p>
            </div>
          ) : (
            <form
              className="mt-12 grid gap-5 sm:grid-cols-2"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                formData.append("access_key", "fc579bba-68e2-41da-b1ae-ba30798ac686");
                formData.append("subject", "New Valora Method Application");
                try {
                  await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                  });
                } catch (_) {}
                setSent(true);
              }}
            >
              <label className="flex flex-col gap-2 text-xs tracking-[0.16em] uppercase">
                First name
                <input
                  required
                  name="firstName"
                  autoComplete="given-name"
                  className="border border-primary-foreground/25 bg-transparent px-4 py-3 text-sm tracking-normal normal-case outline-none focus:border-gold"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs tracking-[0.16em] uppercase">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="border border-primary-foreground/25 bg-transparent px-4 py-3 text-sm tracking-normal normal-case outline-none focus:border-gold"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs tracking-[0.16em] uppercase sm:col-span-2">
                I am interested in
                <select
                  name="offer"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="border border-primary-foreground/25 bg-primary px-4 py-3 text-sm tracking-normal normal-case outline-none focus:border-gold"
                >
                  {offers.map((o) => (
                    <option key={o.id} value={o.name}>
                      {o.name}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet — help me choose</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-xs tracking-[0.16em] uppercase sm:col-span-2">
                Where are you starting from?
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Tell us about your activity level, past attempts, and what you would like to change."
                  className="border border-primary-foreground/25 bg-transparent px-4 py-3 text-sm tracking-normal normal-case outline-none placeholder:text-primary-foreground/40 focus:border-gold"
                />
              </label>
              <button
                type="submit"
                className="bg-gold px-8 py-4 text-xs tracking-[0.2em] text-accent-foreground uppercase transition-colors hover:bg-gold-soft sm:col-span-2"
              >
                Send my application
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2">
            <Emblem className="h-5 w-9 object-contain" />
            <span className="font-display text-lg">Valora Method</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Valora Method. Strength, confidence, consistency.
          </p>
        </div>
      </footer>
    </div>
  );
}
