import { useEffect, useState, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Menu,
  X,
  Zap,
  Wrench,
  HardHat,
  Building2,
  Leaf,
  Bug,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  Users,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

import besMark from "@/assets/bes-mark.asset.json";
import heroImage from "@/assets/hero-generator.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Bright Engineering Services | Generator, Electrical & Facility Care",
      },
      {
        name: "description",
        content:
          "Bright Engineering Services (BES) — generator maintenance, electrical & mechanical works, construction, janitorial services, gardening, fumigation and house deep cleaning. Call 0301-277-5642.",
      },
      {
        property: "og:title",
        content: "Bright Engineering Services | Generator, Electrical & Facility Care",
      },
      {
        property: "og:description",
        content:
          "Generator maintenance, electrical & mechanical works, construction, janitorial, gardening, fumigation and deep cleaning — one trusted partner. Call 0301-277-5642.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PHONE_DISPLAY = "0301-277-5642";
const PHONE_HREF = "tel:+923012775642";
const WHATSAPP_HREF = "https://wa.me/923012775642";
const EMAIL = "brightengineeringservices642@gmail.com";
const EMAIL_HREF = `mailto:${EMAIL}`;

const services = [
  {
    icon: Zap,
    title: "Generator Maintenance",
    description:
      "Complete servicing, load testing and emergency repairs for industrial and residential generators — so the power never goes out on you.",
  },
  {
    icon: Wrench,
    title: "Electrical & Mechanical Works",
    description:
      "Wiring, installations, HVAC and mechanical systems handled by certified technicians with engineering-grade precision.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "Civil works, renovations and structural improvements for homes, offices and commercial sites — built to last.",
  },
  {
    icon: Building2,
    title: "Janitorial Services",
    description:
      "Uniformed, trained cleaning staff for offices, malls and industrial facilities on daily or custom schedules.",
  },
  {
    icon: Leaf,
    title: "Gardening Works",
    description:
      "Landscape maintenance, plantation and seasonal care that keeps your grounds green, tidy and welcoming.",
  },
  {
    icon: Bug,
    title: "Fumigation",
    description:
      "Safe, effective pest control treatments for termites, rodents and seasonal pests — with family-safe options.",
  },
  {
    icon: Sparkles,
    title: "House Deep Cleaning",
    description:
      "Top-to-bottom deep cleans — post-construction, move-in or seasonal — covering every room, surface and corner.",
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "Available 24/7",
    text: "Breakdowns don't wait for office hours. Our teams are on call around the clock for urgent generator and electrical work.",
  },
  {
    icon: ShieldCheck,
    title: "Trained & Verified Staff",
    text: "Every technician and cleaner is skill-tested, background-verified and trained on safety before entering your property.",
  },
  {
    icon: Users,
    title: "One Partner, All Trades",
    text: "Engineering and facility care under one roof — no juggling multiple contractors for one property.",
  },
  {
    icon: BadgeCheck,
    title: "Fair, Transparent Pricing",
    text: "Clear quotes before work begins, with no hidden charges — for homes and businesses alike.",
  },
];

function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <img
      src={besMark.url}
      alt="BES — Bright Engineering Services logo"
      className={`${className} rounded-xl object-cover`}
      loading="lazy"
    />
  );
}

function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <Logo className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate font-display text-base font-bold tracking-tight sm:text-lg">
                Bright Engineering
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Services
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-bottom-left hover:after:scale-x-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {/* Mobile nav menu */}
        <div
          className={`overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-6 py-4 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-primary-foreground"
            >
              <Phone className="size-4" /> Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
          <div data-reveal>
            <span className="mb-6 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
              Engineering · Construction · Facility Care
            </span>
            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Power, build &amp; care for your space —{" "}
              <span className="text-primary">all in one call.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From industrial generator maintenance and electrical works to deep
              cleaning and gardening, Bright Engineering Services keeps homes and
              businesses across Pakistan running smoothly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-display text-base font-bold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                <Phone className="size-5" /> {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-4 font-display text-base font-bold transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="size-5" /> WhatsApp Us
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-primary" /> 24/7 Response
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" /> Verified Staff
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="size-4 text-primary" /> Homes &amp; Businesses
              </span>
            </div>
          </div>
          <div className="relative" data-reveal style={{ "--reveal-delay": "150ms" } as CSSProperties}>
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy/20 ring-1 ring-black/5 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={heroImage}
                alt="BES technician servicing an industrial generator"
                width={1600}
                height={1024}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-navy px-6 py-4 text-navy-foreground shadow-xl sm:left-10">
              <p className="font-display text-2xl font-bold text-primary">7 Service Lines</p>
              <p className="text-xs uppercase tracking-widest opacity-70">One trusted partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20" data-reveal>
          <div className="mb-10 max-w-2xl sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">What We Do</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Complete services for your property
            </h2>
            <p className="mt-4 text-muted-foreground">
              Heavy engineering and meticulous facility care, delivered by the
              same reliable team.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as CSSProperties}
                className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-7"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </div>
                <h3 className="font-display text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
            {/* CTA card fills the grid */}
            <a
              href={PHONE_HREF}
              className="group flex flex-col justify-between rounded-2xl bg-navy p-6 text-navy-foreground transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/30 sm:p-7"
            >
              <div>
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="size-6" />
                </div>
                <h3 className="font-display text-lg font-bold">Need something else?</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-70">
                  Tell us what your property needs — we'll put together the right
                  team and a clear quote.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-primary">
                Talk to us <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why-us" className="scroll-mt-24 bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20" data-reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Why BES</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering discipline meets spotless results
            </h2>
          </div>
          <div className="mt-10 grid gap-x-14 gap-y-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed opacity-70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20" data-reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Get In Touch</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready when you are
            </h2>
            <p className="mt-4 text-muted-foreground">
              Call or message us for a free quote — for a single deep clean or a
              full maintenance contract.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <a
              href={PHONE_HREF}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Phone className="size-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Call Us</p>
                <p className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                  {PHONE_DISPLAY}
                </p>
              </div>
            </a>
            <a
              href={EMAIL_HREF}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-navy-foreground">
                <Mail className="size-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Us</p>
                <p className="break-words text-sm font-bold group-hover:text-primary transition-colors sm:text-base">
                  {EMAIL}
                </p>
              </div>
            </a>
          </div>
          <div className="mt-8 text-center">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-display font-bold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              <MessageCircle className="size-5" /> Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <div className="leading-tight">
              <p className="font-display font-bold">Bright Engineering Services</p>
              <p className="text-xs text-muted-foreground">Engineering · Construction · Facility Care</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground md:items-end">
            <a href={PHONE_HREF} className="font-semibold hover:text-primary transition-colors">
              {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF} className="hover:text-primary transition-colors">
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bright Engineering Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
