import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ChevronLeft, r as Check, t as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DHYAikTr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var offers = [
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
			"Trackers and printable resources"
		],
		note: "No personalized coaching is included at this level.",
		cta: "Start with Essentials"
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
			"Private community with prompts and challenges"
		],
		cta: "Join the Collective"
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
			"A clear next-step roadmap"
		],
		cta: "Apply for Foundations"
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
			"Ongoing adjustments and a maintenance roadmap"
		],
		cta: "Begin the Valora Method",
		featured: true
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
			"Travel and schedule planning"
		],
		cta: "Apply for Private Coaching"
	}
];
function OfferCarousel({ onSelect }) {
	const trackRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	const scrollTo = (0, import_react.useCallback)((index) => {
		const track = trackRef.current;
		if (!track) return;
		const slide = track.children[index];
		if (slide) track.scrollTo({
			left: slide.offsetLeft - track.offsetLeft,
			behavior: "smooth"
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const track = trackRef.current;
		if (!track) return;
		const onScroll = () => {
			const children = Array.from(track.children);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: trackRef,
			className: "flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
			role: "region",
			"aria-label": "Coaching offers",
			children: offers.map((offer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `relative flex w-[85vw] shrink-0 snap-center flex-col border p-7 sm:w-[420px] sm:p-9 ${offer.featured ? "border-gold bg-primary text-primary-foreground" : "border-border bg-card text-card-foreground"}`,
				children: [
					offer.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow absolute -top-px left-0 bg-gold px-3 py-1 text-accent-foreground",
						children: "Most popular · best value"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `eyebrow mt-3 ${offer.featured ? "text-gold" : "text-muted-foreground"}`,
						children: offer.featured ? "Signature" : "Offering"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-3xl sm:text-4xl",
						children: offer.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-2 text-sm leading-relaxed ${offer.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`,
						children: offer.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-5xl",
							children: offer.price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-xs ${offer.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`,
							children: offer.priceNote
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `my-6 h-px w-full ${offer.featured ? "bg-gold/40" : "bg-border"}`,
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex-1 space-y-3 text-sm",
						children: offer.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "mt-0.5 size-4 shrink-0 text-gold",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: offer.featured ? "text-primary-foreground/90" : "",
								children: b
							})]
						}, b))
					}),
					offer.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-5 border-l-2 border-gold/60 pl-3 text-xs italic ${offer.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`,
						children: offer.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onSelect(offer),
						className: `mt-8 w-full px-6 py-4 text-xs tracking-[0.2em] uppercase transition-colors ${offer.featured ? "bg-gold text-accent-foreground hover:bg-gold-soft" : "bg-primary text-primary-foreground hover:bg-primary/90"}`,
						children: offer.cta
					})
				]
			}, offer.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-center justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: offers.map((offer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Go to ${offer.name}`,
					"aria-current": active === i,
					onClick: () => scrollTo(i),
					className: `h-1.5 rounded-full transition-all ${active === i ? "w-8 bg-gold" : "w-3 bg-border hover:bg-muted-foreground/40"}`
				}, offer.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Previous offer",
					onClick: () => scrollTo(Math.max(0, active - 1)),
					className: "flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-4",
						"aria-hidden": true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Next offer",
					onClick: () => scrollTo(Math.min(offers.length - 1, active + 1)),
					className: "flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						className: "size-4",
						"aria-hidden": true
					})
				})]
			})]
		})]
	});
}
var hero_woman_default = "/assets/hero-woman-BHw47KsT.jpg";
var infinity_emblem_default = "/assets/infinity-emblem-pa0tXSqs.png";
var savannah_story_default = "/assets/savannah-story-C8tZKTQf.jpg";
var sandra_jpg_asset_default = {
	version: 1,
	asset_id: "03849154-f7f8-4d57-a2d3-ddcd94a1500f",
	project_id: "dcce1a4b-9f66-4017-8127-e2c021c43eae",
	url: "/__l5e/assets-v1/03849154-f7f8-4d57-a2d3-ddcd94a1500f/sandra.jpg",
	r2_key: "a/v1/dcce1a4b-9f66-4017-8127-e2c021c43eae/03849154-f7f8-4d57-a2d3-ddcd94a1500f/sandra.jpg",
	original_filename: "sandra.jpg",
	size: 244182,
	content_type: "image/jpeg",
	created_at: "2026-08-31T20:02:15Z"
};
var transformation_1_jpg_asset_default = {
	version: 1,
	asset_id: "5d198365-50cd-4321-bb53-7bc204843769",
	project_id: "dcce1a4b-9f66-4017-8127-e2c021c43eae",
	url: "/__l5e/assets-v1/5d198365-50cd-4321-bb53-7bc204843769/transformation-1.jpg",
	r2_key: "a/v1/dcce1a4b-9f66-4017-8127-e2c021c43eae/5d198365-50cd-4321-bb53-7bc204843769/transformation-1.jpg",
	original_filename: "transformation-1.jpg",
	size: 150033,
	content_type: "image/jpeg",
	created_at: "2026-08-31T20:18:36Z"
};
var transformation_2_jpg_asset_default = {
	version: 1,
	asset_id: "d0533b5e-a5e0-4fd6-8e95-dd0477fd7e74",
	project_id: "dcce1a4b-9f66-4017-8127-e2c021c43eae",
	url: "/__l5e/assets-v1/d0533b5e-a5e0-4fd6-8e95-dd0477fd7e74/transformation-2.jpg",
	r2_key: "a/v1/dcce1a4b-9f66-4017-8127-e2c021c43eae/d0533b5e-a5e0-4fd6-8e95-dd0477fd7e74/transformation-2.jpg",
	original_filename: "transformation-2.jpg",
	size: 546617,
	content_type: "image/jpeg",
	created_at: "2026-08-31T20:18:40Z"
};
var comparison = [
	{
		level: "Want structure only",
		pick: "Valora Essentials",
		detail: "You are self-motivated and simply need a plan to follow each week."
	},
	{
		level: "Want structure and community",
		pick: "Valora Collective",
		detail: "You do better with monthly guidance, group energy, and accountability."
	},
	{
		level: "Want a guided restart",
		pick: "Valora Foundations",
		detail: "Six focused weeks with a coach to get moving and build the base habits."
	},
	{
		level: "Want full transformation",
		pick: "The Valora Method",
		detail: "Twelve weeks of personalized coaching, private sessions, and lasting habits."
	},
	{
		level: "Want a coach in your corner weekly",
		pick: "Valora Private",
		detail: "Ongoing one-to-one coaching built entirely around your life."
	}
];
var transformations = [{
	name: "Michelle",
	timeline: "January → today",
	src: transformation_1_jpg_asset_default.url,
	alt: "Side-by-side progress photos of Michelle showing posture and body composition changes over several months",
	quote: "I had never lifted a weight in my life. Sandra started me where I actually was, and every month I felt a little stronger and a little more like myself."
}, {
	name: "Andrea",
	timeline: "Twelve months of coaching",
	src: transformation_2_jpg_asset_default.url,
	alt: "Side-by-side progress photos of Andrea showing improved posture and muscle definition across a year of training",
	quote: "The difference was consistency, not intensity. Weekly check-ins kept me honest and the workouts fit around my job and my kids."
}];
function Emblem({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: infinity_emblem_default,
		alt: "",
		"aria-hidden": true,
		loading: "lazy",
		width: 512,
		height: 512,
		className
	});
}
function Index() {
	const formRef = (0, import_react.useRef)(null);
	const [selected, setSelected] = (0, import_react.useState)("The Valora Method");
	const [sent, setSent] = (0, import_react.useState)(false);
	const goToForm = (offer) => {
		if (offer) setSelected(offer.name);
		setSent(false);
		formRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, { className: "h-6 w-10 object-contain" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl tracking-wide",
								children: "Valora Method"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-xs tracking-[0.18em] uppercase md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about",
									className: "hover:text-gold",
									children: "About"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#offers",
									className: "hover:text-gold",
									children: "Coaching"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#compare",
									className: "hover:text-gold",
									children: "Compare"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#proof",
									className: "hover:text-gold",
									children: "Results"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => goToForm(),
							className: "bg-primary px-5 py-3 text-[0.65rem] tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90",
							children: "Start here"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "top",
				className: "relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Virtual coaching for women"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-4xl leading-[1.08] sm:text-5xl md:text-6xl",
							children: ["You do not need to be fit to begin.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block italic text-gold",
								children: "You just need a starting point."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-md text-base leading-relaxed text-muted-foreground",
							children: "Valora helps women move from feeling stuck and inactive to building strength, confidence, and habits that fit their real lives."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#offers",
								className: "bg-primary px-8 py-4 text-center text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90",
								children: "Explore coaching"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => goToForm(),
								className: "border border-primary/30 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold",
								children: "Find my starting point"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-3 border border-gold/40",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_woman_default,
							alt: "A woman standing calmly in a sunlit studio, ready to begin training",
							width: 1200,
							height: 1504,
							className: "relative h-[420px] w-full object-cover sm:h-[560px]"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, { className: "h-10 w-16 object-contain" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "text-2xl leading-snug italic sm:text-3xl",
							children: "“We meet you where you are and help you build from there.”"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-sm leading-relaxed text-primary-foreground/70",
							children: "No bootcamp energy. No shame. Just strength training, nutrition guidance, and habits designed for women who have struggled with consistency."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-sm md:max-w-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-3 border border-gold/40",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: sandra_jpg_asset_default.url,
							alt: "Sandra Ruiz-White, founder of Valora Method",
							loading: "lazy",
							width: 840,
							height: 952,
							className: "relative h-[420px] w-full object-cover object-center sm:h-[560px]"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Founder · Coach"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-4xl sm:text-5xl",
							children: "Meet Sandra Ruiz-White"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-2xl italic text-muted-foreground",
							children: "Built by science. Proven by results."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 space-y-5 text-base leading-relaxed text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Valora Method was created by Sandra Ruiz-White, a behavioral science practitioner and wellness coach who saw a gap in the industry: women were being handed the same generic plans as everyone else, with no consideration for their hormonal complexity, demanding schedules, or the psychology of starting over." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Valora was born at the intersection of Applied Behavior Analysis and premium wellness. Every protocol is built on evidence, every system is tailored to the individual, and every result is designed to last — whether you are returning to movement after years away or building consistency for the first time." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 flex flex-wrap gap-2",
							children: [
								"Applied Behavior Analysis",
								"Hormone-Aware Strategy",
								"Motivational Psychology",
								"Strength & Conditioning"
							].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border border-gold/50 px-4 py-2 text-[0.65rem] tracking-[0.18em] uppercase",
								children: tag
							}, tag))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap items-center gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => goToForm(),
									className: "bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90",
									children: "Work with Sandra"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://instagram.com/valora.health",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-xs tracking-[0.2em] uppercase text-gold underline-offset-8 transition-colors hover:underline",
									children: "@valora.health"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:valoramethod@gmail.com",
									className: "text-xs tracking-[0.2em] uppercase text-gold underline-offset-8 transition-colors hover:underline",
									children: "valoramethod@gmail.com"
								})
							]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "offers",
				className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Virtual coaching services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-4xl sm:text-5xl",
							children: "Five ways to begin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground",
							children: "Every offer is delivered virtually, so you can train at home or at the gym, on your schedule. Swipe through to find the level of support that fits you right now."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCarousel, { onSelect: goToForm })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "compare",
				className: "bg-secondary/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-5 py-20 md:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Choose your support level"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-4xl sm:text-5xl",
							children: "Not sure where to start?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 divide-y divide-border border-y border-border",
							children: comparison.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 py-6 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: row.level
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: row.detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl text-gold sm:text-right",
										children: row.pick
									})
								]
							}, row.pick))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => goToForm(),
							className: "mt-10 bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90",
							children: "Ask which is right for me"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "proof",
				className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative order-2 md:order-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -inset-3 border border-gold/40",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: savannah_story_default,
						alt: "Savannah walking outdoors in morning light after six weeks of coaching",
						loading: "lazy",
						width: 1200,
						height: 912,
						className: "relative h-[360px] w-full object-cover sm:h-[440px]"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-1 md:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Progress that is real"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-4xl sm:text-5xl",
							children: "Savannah’s first six weeks"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid grid-cols-2 gap-6 border-y border-border py-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl text-gold",
								children: "2,000 → 7,000"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase",
								children: "Daily steps"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl text-gold",
								children: "−2 inches"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase",
								children: "In six weeks"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 text-base leading-relaxed text-muted-foreground",
							children: "Savannah did not start with a gym membership or a perfect week. She started with a starting point, and built from there."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "transformations",
				className: "bg-secondary/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-gold",
									children: "Real women · Real progress"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-4xl sm:text-5xl",
									children: "Trained with Sandra"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-base leading-relaxed text-muted-foreground",
									children: "These are clients who started exactly where you are — busy, unsure, and tired of starting over. Consistent strength work, realistic nutrition, and steady coaching did the rest."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-10 md:grid-cols-2",
							children: transformations.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -inset-3 border border-gold/40",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: t.src,
										alt: t.alt,
										loading: "lazy",
										className: "relative w-full bg-background object-contain"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-2xl text-gold",
											children: t.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase",
											children: t.timeline
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
											className: "mt-4 text-base leading-relaxed italic text-muted-foreground",
											children: [
												"“",
												t.quote,
												"”"
											]
										})
									]
								})]
							}, t.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => goToForm(),
							className: "mt-14 bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90",
							children: "Start your own progress"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: formRef,
				id: "apply",
				className: "bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-5 py-20 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, { className: "mx-auto h-9 w-14 object-contain" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-5 text-gold",
								children: "Begin"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-4xl sm:text-5xl",
								children: "Tell us your starting point"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/70",
								children: "Share a few details and we will follow up within one business day with next steps for your chosen level of support."
							})
						]
					}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 border border-gold/50 p-10 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-3xl",
							children: "Thank you."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-primary-foreground/75",
							children: [
								"Your request for ",
								selected,
								" is in. Look for an email from Valora Method shortly."
							]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-12 grid gap-5 sm:grid-cols-2",
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-2 text-xs tracking-[0.16em] uppercase",
								children: ["First name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									name: "firstName",
									autoComplete: "given-name",
									className: "border border-primary-foreground/25 bg-transparent px-4 py-3 text-sm tracking-normal normal-case outline-none focus:border-gold"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-2 text-xs tracking-[0.16em] uppercase",
								children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									name: "email",
									autoComplete: "email",
									className: "border border-primary-foreground/25 bg-transparent px-4 py-3 text-sm tracking-normal normal-case outline-none focus:border-gold"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-2 text-xs tracking-[0.16em] uppercase sm:col-span-2",
								children: ["I am interested in", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "offer",
									value: selected,
									onChange: (e) => setSelected(e.target.value),
									className: "border border-primary-foreground/25 bg-primary px-4 py-3 text-sm tracking-normal normal-case outline-none focus:border-gold",
									children: [offers.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: o.name,
										children: o.name
									}, o.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Not sure yet",
										children: "Not sure yet — help me choose"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-2 text-xs tracking-[0.16em] uppercase sm:col-span-2",
								children: ["Where are you starting from?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "notes",
									rows: 4,
									placeholder: "Tell us about your activity level, past attempts, and what you would like to change.",
									className: "border border-primary-foreground/25 bg-transparent px-4 py-3 text-sm tracking-normal normal-case outline-none placeholder:text-primary-foreground/40 focus:border-gold"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "bg-gold px-8 py-4 text-xs tracking-[0.2em] text-accent-foreground uppercase transition-colors hover:bg-gold-soft sm:col-span-2",
								children: "Send my application"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, { className: "h-5 w-9 object-contain" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg",
							children: "Valora Method"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Valora Method. Strength, confidence, consistency."
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
