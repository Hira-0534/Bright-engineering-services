import { createFileRoute } from "@tanstack/react-router";
import {
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
import cleaningImage from "@/assets/cleaning-team.jpg";

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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="size-3.5" /> {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF} className="hidden items-center gap-2 opacity-70 hover:text-primary hover:opacity-100 transition-colors md:flex">
              <Mail className="size-3.5" /> {EMAIL}
            </a>
          </div>
          <span className="text-xs uppercase tracking-widest opacity-70">
            Residential · Commercial · Industrial
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold tracking-tight">Bright Engineering</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Services
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 sm:inline-flex"
          >
            <Phone className="size-4" /> Call Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="mb-6 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
              Engineering · Construction · Facility Care
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
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
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy/20 ring-1 ring-black/5">
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
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">What We Do</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Complete services for your property
            </h2>
            <p className="mt-4 text-muted-foreground">
              Heavy engineering and meticulous facility care, delivered by the
              same reliable team.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
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
              className="group flex flex-col justify-between rounded-2xl bg-navy p-7 text-navy-foreground transition-all hover:-translate-y-1 hover:shadow-xl"
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
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Why BES</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering discipline meets spotless results
            </h2>
            <div className="mt-10 space-y-8">
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
          <div className="relative">
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
              <img
                src={cleaningImage}
                alt="BES cleaning team deep cleaning a modern home"
                width={912}
                height={1200}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-primary px-8 py-6 text-primary-foreground shadow-xl sm:-left-8">
              <p className="font-display text-3xl font-bold">24/7</p>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
                Emergency response
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20">
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
