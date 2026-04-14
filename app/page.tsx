"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const services = [
  {
    title: "Home Staging Services",
    description:
      "Thoughtful styling and spatial refinement designed to elevate the look, feel, and flow of your home.",
    bullets: [
      "Furniture arrangement and placement optimization",
      "Color consultation and coordination",
      "Decorative accent selection and styling",
      "Space refinement for a clean, cohesive look",
    ],
  },
  {
    title: "Interior Design Consultation",
    description:
      "Personalized design guidance to help you create a home that feels polished, welcoming, and beautifully intentional.",
    bullets: [
      "Space planning and layout optimization",
      "Custom color scheme development",
      "Furniture and décor recommendations",
      "Room-by-room design direction",
    ],
  },
];

const pricingPlans = [
  {
    name: "Consultation",
    price: "$250+",
    text: "A focused design consultation with expert guidance on layout, style direction, color, and space refinement.",
  },
  {
    name: "Design Package",
    price: "$800+",
    text: "A curated design plan for a room or focused area, including recommendations for furnishings, palette, and decorative direction.",
    featured: true,
  },
  {
    name: "Full Service Project",
    price: "$2,000+",
    text: "A complete elevated design experience including concept development, styling support, and full-space transformation.",
  },
];

const philosophyItems = [
  {
    title: "Layered Elegance",
    content:
      "We blend classical inspiration with modern simplicity to create interiors that feel timeless, collected, and quietly luxurious.",
  },
  {
    title: "Warm Neutral Foundations",
    content:
      "Our palette centers around warm ivory, taupe, beige, antique gold, and rich brown tones that create softness, depth, and comfort.",
  },
  {
    title: "Intentional Living",
    content:
      "Every furnishing, finish, and decorative accent is chosen with purpose. The goal is a home that feels functional, inviting, and beautifully composed.",
  },
  {
    title: "Character with Modern Refinement",
    content:
      "Inspired by Queen Anne elegance and English Tudor richness, our spaces honor classical character while remaining fresh, elevated, and livable.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    text: "We begin by understanding your goals, preferences, and the atmosphere you want your space to create.",
  },
  {
    step: "02",
    title: "Design Direction",
    text: "We develop a tailored design approach with recommendations for layout, color, furniture, and decorative styling.",
  },
  {
    step: "03",
    title: "Refinement",
    text: "Every detail is thoughtfully arranged to create a finished look that feels elevated, intentional, and beautifully cohesive.",
  },
];

const paymentOptions = [
  {
    title: "Reserve Consultation",
    price: "$250",
    text: "Secure your design consultation and begin with personalized professional guidance.",
    button: "Reserve Consultation",
  },
  {
    title: "Design Retainer",
    price: "$800",
    text: "Submit an initial retainer for design planning, recommendations, and project direction.",
    button: "Pay Retainer",
  },
  {
    title: "Full Service Deposit",
    price: "$2,000+",
    text: "Begin a full-service interior design or staging project with a polished onboarding experience.",
    button: "Start Project",
  },
];

const inquiryServices = [
  "Consultation",
  "Home Staging",
  "Interior Design",
  "Full Service Project",
];

export default function HomePage() {
  return (
    <main
      className={`${cormorant.variable} ${inter.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
    >
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(245,241,232,0.92)] backdrop-blur-xl">
        <div className="container-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <a href="#" className="flex items-center justify-center gap-4 lg:justify-start">
            <div className="logo-badge flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(143,116,66,0.25)] bg-[linear-gradient(180deg,#f6edde_0%,#eadcc7_100%)] shadow-[0_10px_30px_rgba(62,47,38,0.08)]">
              <span className="font-[family:var(--font-cormorant)] text-2xl font-semibold tracking-[0.08em] text-[var(--accent-dark)]">
                GR
              </span>
            </div>

            <div className="text-center lg:text-left">
              <p className="font-[family:var(--font-cormorant)] text-2xl font-semibold uppercase tracking-[0.12em] text-[var(--foreground)] sm:text-3xl">
                Gateway Rock
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--muted-foreground)] sm:text-xs">
                Design Consultants
              </p>
            </div>
          </a>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#philosophy" className="nav-link">
              Philosophy
            </a>
            <a href="#payment" className="nav-link">
              Payment
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>

          <div className="flex justify-center lg:justify-end">
            <a href="#contact" className="primary-btn">
              Book a Consultation
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="hero-overlay absolute inset-0" />
        <div className="container-shell relative z-10 py-16 sm:py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[var(--accent-dark)] sm:text-sm">
                Interior Design • Home Staging • Residential Consultation
              </p>

              <h1 className="mx-auto max-w-4xl font-[family:var(--font-cormorant)] text-4xl font-semibold leading-[0.96] sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
                Transform your home into a space that feels timeless, elegant,
                and beautifully intentional.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg lg:mx-0">
                Gateway Rock Design Consultants creates elevated residential
                interiors through warm neutral palettes, classical inspiration,
                and modern decorative refinement.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a href="#services" className="primary-btn w-full sm:w-auto">
                  Explore Services
                </a>
                <a href="#pricing" className="secondary-btn w-full sm:w-auto">
                  View Pricing
                </a>
              </div>

              <div className="mt-12 mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3 lg:mx-0">
                {["Refined", "Warm", "Intentional"].map((word) => (
                  <div key={word} className="luxury-card px-6 py-6 text-center">
                    <p className="font-[family:var(--font-cormorant)] text-2xl font-semibold sm:text-3xl">
                      {word}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="luxury-card p-4 sm:p-5">
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[rgba(62,47,38,0.08)] bg-[linear-gradient(180deg,#efe3d1_0%,#dbc8af_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                  <div className="flex h-full items-end rounded-[1.5rem] border border-[rgba(62,47,38,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(62,47,38,0.08))] p-6">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--accent-dark)]">
                        Signature Aesthetic
                      </p>
                      <h2 className="whitespace-pre-line font-[family:var(--font-cormorant)] text-2xl font-semibold sm:text-3xl">
                        Queen Anne softness.{"\n"}
                        Tudor depth.{"\n"}
                        Modern grace.
                      </h2>
                      <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted-foreground)]">
                        A layered design style inspired by regal beige tones,
                        antique details, structured elegance, and contemporary
                        livability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="container-shell">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="text-center lg:text-left">
              <p className="section-kicker">About</p>
              <h2 className="section-title">
                Classic inspiration, thoughtfully translated for modern living.
              </h2>
            </div>

            <div className="space-y-6 text-center text-base leading-8 text-[var(--muted-foreground)] lg:text-left">
              <p>
                Gateway Rock Design Consultants specializes in transforming
                residential spaces through expert staging and interior design
                consultation. Our work combines a strong eye for aesthetics with
                a thoughtful understanding of how people connect with their
                surroundings.
              </p>

              <p>
                Whether you are refining a single room or elevating your entire
                home, we focus on design choices that enhance comfort, beauty,
                and flow. Every project is approached with care, detail, and a
                polished sense of style.
              </p>

              <div className="luxury-card p-6 text-left">
                <p className="font-[family:var(--font-cormorant)] text-2xl font-semibold text-[var(--foreground)]">
                  Professional Background
                </p>
                <p className="mt-3 leading-8 text-[var(--muted-foreground)]">
                  With extensive experience in residential design and a deep
                  understanding of what makes a space feel welcoming, elegant,
                  and intentional, our consultants bring both creative vision
                  and practical guidance to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell section-alt">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Services</p>
            <h2 className="section-title">
              Elegant guidance for homes that deserve thoughtful design.
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
              We provide warm, professional design support for homeowners
              seeking a more cohesive, beautiful, and elevated living
              environment.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="luxury-card p-8 text-left">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--accent-dark)]">
                  Signature Service
                </p>
                <h3 className="font-[family:var(--font-cormorant)] text-3xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-4">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      <span className="text-[15px] leading-7 text-[var(--foreground)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-shell">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Pricing</p>
            <h2 className="section-title">
              Luxury design services with clear starting points.
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
              Every project is tailored to the scope, timeline, and needs of the
              client. These starting prices offer a polished place to begin.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`luxury-card p-8 text-center ${
                  plan.featured ? "featured-card" : ""
                }`}
              >
                <p className="font-[family:var(--font-cormorant)] text-3xl font-semibold">
                  {plan.name}
                </p>
                <p className="mt-3 text-4xl font-semibold text-[var(--accent-dark)]">
                  {plan.price}
                </p>
                <p className="mt-5 text-base leading-8 text-[var(--muted-foreground)]">
                  {plan.text}
                </p>
                <a href="#contact" className="secondary-btn mt-8 w-full">
                  Book a Consultation
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="section-shell section-alt">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Design Philosophy</p>
            <h2 className="section-title">
              Thoughtful design rooted in timeless elegance.
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {philosophyItems.map((item) => (
              <details key={item.title} className="luxury-card accordion-card p-6">
                <summary className="accordion-summary">
                  <span className="font-[family:var(--font-cormorant)] text-2xl font-semibold">
                    {item.title}
                  </span>
                  <span className="accordion-icon">+</span>
                </summary>
                <p className="mt-4 pr-8 text-base leading-8 text-[var(--muted-foreground)]">
                  {item.content}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-shell">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Our Process</p>
            <h2 className="section-title">
              A simple, polished experience from first conversation to final
              detail.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="luxury-card p-8 text-left">
                <p className="mb-4 font-[family:var(--font-cormorant)] text-5xl font-semibold leading-none text-[var(--accent-dark)]">
                  {step.step}
                </p>
                <h3 className="font-[family:var(--font-cormorant)] text-3xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="payment" className="section-shell section-alt">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Secure Payment</p>
            <h2 className="section-title">
              A polished and secure way to reserve your service.
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)]">
              Clients can reserve a consultation or begin a design project
              through a secure checkout experience. Stripe integration can be
              connected after launch.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
            {paymentOptions.map((option) => (
              <div key={option.title} className="luxury-card p-8 text-center">
                <p className="font-[family:var(--font-cormorant)] text-3xl font-semibold">
                  {option.title}
                </p>
                <p className="mt-3 text-4xl font-semibold text-[var(--accent-dark)]">
                  {option.price}
                </p>
                <p className="mt-5 text-base leading-8 text-[var(--muted-foreground)]">
                  {option.text}
                </p>
                <button type="button" className="primary-btn mt-8 w-full">
                  {option.button}
                </button>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-[var(--muted-foreground)]">
            Payment processing requires Stripe or another payment provider to go
            live. This section is designed and ready to connect.
          </p>
        </div>
      </section>

      <section id="contact" className="section-shell">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <div className="luxury-card p-8 sm:p-10 lg:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <p className="section-kicker">Contact</p>
                <h2 className="section-title">
                  Ready to create a home that feels elevated, inviting, and
                  beautifully styled?
                </h2>
                <p className="mt-5 text-base leading-8 text-[var(--muted-foreground)]">
                  Tell us about your space and your goals. We’ll follow up with
                  the next best step for your consultation or project.
                </p>
              </div>

              <form className="mx-auto mt-10 grid max-w-3xl gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="field-wrap">
                    <label htmlFor="name" className="field-label">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="field-input"
                    />
                  </div>

                  <div className="field-wrap">
                    <label htmlFor="email" className="field-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="field-wrap">
                    <label htmlFor="phone" className="field-label">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(000) 000-0000"
                      className="field-input"
                    />
                  </div>

                  <div className="field-wrap">
                    <label htmlFor="service" className="field-label">
                      Service of Interest
                    </label>
                    <select id="service" className="field-input">
                      <option value="">Select a service</option>
                      {inquiryServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field-wrap">
                  <label htmlFor="message" className="field-label">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Share your goals, space details, and the type of support you’re looking for..."
                    className="field-input field-textarea"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="primary-btn w-full">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] bg-[var(--background-soft)]">
        <div className="container-shell flex flex-col items-center justify-between gap-5 py-8 text-center text-sm text-[var(--muted-foreground)] lg:flex-row lg:text-left">
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <div className="logo-badge flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(143,116,66,0.25)] bg-[linear-gradient(180deg,#f6edde_0%,#eadcc7_100%)]">
              <span className="font-[family:var(--font-cormorant)] text-xl font-semibold tracking-[0.08em] text-[var(--accent-dark)]">
                GR
              </span>
            </div>

            <div>
              <p className="font-[family:var(--font-cormorant)] text-2xl font-semibold uppercase tracking-[0.08em] text-[var(--foreground)]">
                Gateway Rock
              </p>
              <p className="text-xs uppercase tracking-[0.28em]">
                Design Consultants
              </p>
            </div>
          </div>

          <p className="max-w-xl">
            Interior design consultation and home staging services for elegant,
            welcoming residential spaces.
          </p>
        </div>
      </footer>
    </main>
  );
}