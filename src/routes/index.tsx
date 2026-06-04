import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Zap,
  Workflow,
  LayoutGrid,
  Search,
  Megaphone,
  Sparkles,
  Globe2,
  Magnet,
  Check,
  X,
  Lock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import dashboardImg from "@/assets/dashboard.jpg";
import caseSkincare from "@/assets/case-skincare.jpg";
import caseSaas from "@/assets/case-saas.jpg";
import caseEv from "@/assets/case-ev.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeevora — Where Brands Become Market Leaders" },
      {
        name: "description",
        content:
          "Jeevora is a growth agency engineering hyper-growth for ambitious companies through performance marketing, automation, and high-fidelity branding.",
      },
      { property: "og:title", content: "Jeevora — Where Brands Become Market Leaders" },
      {
        property: "og:description",
        content: "Performance marketing, automation, and branding for ambitious companies.",
      },
      { property: "og:image", content: dashboardImg },
      { name: "twitter:image", content: dashboardImg },
    ],
  }),
  component: Index,
});

type Service = {
  icon: typeof Zap;
  title: string;
  body: string;
  price: number;
};

const services: Service[] = [
  { icon: Zap, title: "Performance Marketing", body: "Data-driven acquisition that scales profitably across Meta, Google, and TikTok.", price: 149000 },
  { icon: Workflow, title: "Growth Automation", body: "Custom CRM workflows and lead nurturing that convert traffic while you sleep.", price: 99000 },
  { icon: LayoutGrid, title: "Strategic Branding", body: "Identity systems designed to resonate with premium audiences and build long-term equity.", price: 249000 },
  { icon: Search, title: "SEO Domination", body: "Technical SEO and content architectures that capture high-intent organic search volume.", price: 129000 },
  { icon: Megaphone, title: "Paid Social", body: "High-velocity creative cycles engineered for reach, resonance, and conversion.", price: 119000 },
  { icon: Sparkles, title: "Website Design", body: "Conversion-obsessed websites that turn first impressions into long-term revenue.", price: 189000 },
  { icon: Globe2, title: "SEO & Content", body: "Editorial content engines that capture demand at every stage of the funnel.", price: 109000 },
  { icon: Magnet, title: "Lead Generation", body: "Predictable pipelines built on intent data and outbound systems that compound.", price: 139000 },
];

const caseStudies = [
  { tag: "DTC Skincare", title: "Luminary Skin", body: "Scaling an e-commerce giant from ₹8 Cr to ₹95 Cr ARR in 14 months.", img: caseSkincare },
  { tag: "Productivity SaaS", title: "Sync Systems", body: "800% growth in organic leads through content engineering.", img: caseSaas },
  { tag: "Automotive Tech", title: "Velocis EV", body: "Global launch campaign generating ₹370 Cr in pre-orders.", img: caseEv },
];

const testimonials = [
  { quote: "Jeevora didn't run our marketing — they rebuilt the engine. ROAS tripled in one quarter.", name: "Maya Chen", role: "CMO, Luminary Skin" },
  { quote: "The clearest reporting, the sharpest creative, the calmest team I've ever worked with.", name: "Daniel Park", role: "Founder, Sync Systems" },
  { quote: "They treat growth like an engineering problem. That's exactly what we needed.", name: "Sara Vogel", role: "VP Growth, Velocis" },
];

const comparison = [
  ["Strategy built on first-party data", true, false],
  ["Dedicated growth pod, not freelancers", true, false],
  ["Live dashboard, not monthly PDFs", true, false],
  ["Creative + media + automation in one team", true, false],
  ["Performance guarantee in contract", true, false],
];

const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");

const formatINRShort = (n: number) => {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (n >= 1_00_000) return `₹${(n / 1_00_000).toFixed(2)} L`;
  return formatINR(n);
};

function Index() {
  const [revenue, setRevenue] = useState(1000000); // ₹10L / month
  const [growth, setGrowth] = useState(200);
  const projected = Math.round(((revenue * 12) * growth) / 100);
  const [booking, setBooking] = useState<Service | null>(null);

  return (
    <main className="bg-background text-muted-foreground selection:bg-brand/30 selection:text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-serif italic text-foreground text-lg font-semibold tracking-tight">
            Jeevora
          </a>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#cases" className="hover:text-foreground transition-colors">Case Studies</a>
            <a href="#process" className="hover:text-foreground transition-colors">Our Process</a>
            <a href="#calculator" className="hover:text-foreground transition-colors">Calculator</a>
          </div>
          <a
            href="#services"
            className="text-sm font-medium bg-brand text-brand-foreground py-2 pl-2 pr-3 flex items-center gap-1.5 rounded-full ring-1 ring-brand hover:brightness-110 transition active:scale-95"
          >
            <Zap className="size-4" /> Book Service
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative pt-36 pb-24 overflow-hidden glow-mesh">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-[52ch] mb-10 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full ring-1 ring-brand/30 bg-brand/5 text-xs uppercase tracking-[0.2em] text-brand font-medium mb-8">
              <span className="size-1.5 rounded-full bg-brand animate-pulse-soft" />
              Next-gen growth agency
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground font-serif italic leading-[0.95] tracking-tight text-balance mb-6">
              Where Brands Become Market Leaders
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              We engineer hyper-growth for ambitious companies through performance marketing,
              automated systems, and high-fidelity branding.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-20 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <a
              href="#services"
              className="px-8 py-4 bg-brand text-brand-foreground font-semibold rounded-full ring-1 ring-brand hover:brightness-110 transition active:scale-95"
            >
              Book a Service
            </a>
            <a
              href="#cases"
              className="px-8 py-4 bg-card text-foreground font-semibold rounded-full ring-1 ring-border hover:bg-secondary transition active:scale-95"
            >
              View Success Stories
            </a>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Revenue Growth", value: "+240% YoY", bar: "75%" },
              { label: "Avg. ROAS", value: "8.4x", bar: "55%" },
              { label: "Conversion Rate", value: "12.4%", bar: "65%" },
            ].map((m, i) => (
              <div
                key={m.label}
                className="glass-card p-6 rounded-2xl ring-1 ring-border/60 animate-float"
                style={{ animationDelay: `${i * -2}s` }}
              >
                <span className="text-xs font-medium uppercase tracking-widest text-brand">{m.label}</span>
                <div className="text-3xl text-foreground font-serif italic mt-1">{m.value}</div>
                <div className="mt-4 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-brand" style={{ width: m.bar }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="py-12 border-y border-border/60 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-50">
          {["FORGE", "NEXUS", "PRISM", "QUANTUM", "VORTEX", "HELIO"].map((b) => (
            <span key={b} className="text-xl font-serif italic font-medium text-foreground/80">{b}</span>
          ))}
        </div>
      </section>

      {/* Growth Engine / Process */}
      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr,2fr] gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand">The Growth Engine</span>
            <h2 className="text-4xl md:text-5xl text-foreground font-serif italic mt-4 leading-tight text-balance">
              A four-stage system that turns traffic into revenue.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { n: "01", t: "Diagnose", b: "Audit channels, funnels, and creative to find the highest-leverage moves." },
              { n: "02", t: "Architect", b: "Design the growth system: media plan, automation, brand, measurement." },
              { n: "03", t: "Activate", b: "Ship campaigns, automations, and creative at velocity from week one." },
              { n: "04", t: "Compound", b: "Iterate weekly on what's working — turn early wins into a flywheel." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl ring-1 ring-border/60 bg-card/40 p-6 hover:ring-brand/40 transition">
                <div className="text-brand font-serif italic text-2xl">{s.n}</div>
                <h3 className="text-foreground font-medium text-lg mt-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-foreground font-serif italic mb-4 text-balance">
              Precision growth systems
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              We don't just run ads. We build integrated, market-dominating engines that handle every
              touchpoint of your customer journey. Book any service to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden shadow-2xl">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="group bg-background p-8 hover:bg-card/60 transition-colors min-h-[300px] flex flex-col">
                  <div className="size-10 rounded-lg bg-card ring-1 ring-border flex items-center justify-center mb-6 group-hover:ring-brand/50 transition-colors">
                    <Icon className="size-5 text-brand" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl text-foreground font-medium mb-3">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.body}</p>
                  <div className="mt-auto pt-6 flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">From</div>
                      <div className="text-foreground font-serif italic text-xl">{formatINR(svc.price)}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">/ month</div>
                    </div>
                    <button
                      onClick={() => setBooking(svc)}
                      className="text-xs font-medium bg-brand text-brand-foreground px-3 py-2 rounded-full ring-1 ring-brand hover:brightness-110 transition active:scale-95 inline-flex items-center gap-1"
                    >
                      Book <ArrowUpRight className="size-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results / Dashboard */}
      <section className="py-24 bg-card/30 relative glow-mesh-soft">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          <div className="text-center max-w-[56ch] mx-auto">
            <h2 className="text-4xl md:text-5xl text-foreground font-serif italic mb-4 text-balance">
              Real-time intelligence
            </h2>
            <p className="text-muted-foreground">
              Transparent reporting and live metrics for every campaign. No fluff, just results.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden ring-1 ring-border shadow-2xl bg-card">
            <img src={dashboardImg} alt="Jeevora growth dashboard preview" className="w-full aspect-video object-cover" />
            <div className="absolute bottom-6 right-6 hidden sm:flex gap-4">
              <div className="glass-card px-6 py-4 rounded-xl ring-1 ring-border/60">
                <p className="text-xs text-muted-foreground font-medium">CPA Efficiency</p>
                <p className="text-xl text-brand font-semibold">-32.4%</p>
              </div>
              <div className="glass-card px-6 py-4 rounded-xl ring-1 ring-border/60">
                <p className="text-xs text-muted-foreground font-medium">Market Share</p>
                <p className="text-xl text-brand font-semibold">+14.8%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl text-foreground font-serif italic text-balance">Success Stories</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden md:block">Scroll →</span>
        </div>
        <div className="flex gap-6 overflow-x-auto px-6 pb-8 snap-x no-scrollbar">
          {caseStudies.map((c) => (
            <article key={c.title} className="min-w-[360px] md:min-w-[420px] snap-center group cursor-pointer">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-border mb-6 relative">
                <img src={c.img} alt={c.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-foreground/90 bg-background/60 backdrop-blur px-2 py-1 rounded-full">{c.tag}</span>
              </div>
              <h4 className="text-xl text-foreground font-medium flex items-center justify-between">
                {c.title} <ArrowUpRight className="size-4 text-brand opacity-0 group-hover:opacity-100 transition" />
              </h4>
              <p className="text-sm text-muted-foreground mt-1">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why brands choose us — comparison */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground font-serif italic text-balance">
              Why brands choose Jeevora
            </h2>
            <p className="text-muted-foreground mt-4">A different operating model. Built for compounding returns.</p>
          </div>
          <div className="rounded-3xl ring-1 ring-border overflow-hidden">
            <div className="grid grid-cols-[1.5fr,1fr,1fr] bg-card/60">
              <div className="p-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">Capability</div>
              <div className="p-5 text-xs uppercase tracking-[0.2em] text-brand text-center">Jeevora</div>
              <div className="p-5 text-xs uppercase tracking-[0.2em] text-muted-foreground text-center">Typical agency</div>
            </div>
            {comparison.map(([label, a, b], i) => (
              <div key={String(label)} className={`grid grid-cols-[1.5fr,1fr,1fr] items-center ${i % 2 ? "bg-background" : "bg-card/20"}`}>
                <div className="p-5 text-foreground">{label}</div>
                <div className="p-5 flex justify-center">
                  {a ? <Check className="size-5 text-brand" /> : <span className="text-muted-foreground">—</span>}
                </div>
                <div className="p-5 flex justify-center">
                  {b ? <Check className="size-5 text-brand" /> : <span className="text-muted-foreground">—</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-foreground font-serif italic text-balance mb-16">
            Trusted by category leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl ring-1 ring-border bg-card/40 p-8 hover:ring-brand/40 transition">
                <blockquote className="text-foreground text-lg font-serif italic leading-snug">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="text-foreground font-medium">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Calculator */}
      <section id="calculator" className="py-24 bg-card/30 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-foreground font-serif italic mb-6 text-balance">
              Calculate your potential
            </h2>
            <p className="text-muted-foreground text-pretty max-w-[44ch] mb-10">
              Estimate the impact of a market-leading growth strategy on your bottom line.
              Move the sliders to see your projection.
            </p>
            <div className="flex flex-col gap-8">
              <div className="space-y-2">
                <div className="flex justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span>Current Monthly Revenue</span>
                  <span className="text-foreground font-medium">{formatINRShort(revenue)}</span>
                </div>
                <input
                  type="range" min={500000} max={100000000} step={500000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full accent-brand"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span>Target Growth</span>
                  <span className="text-foreground font-medium">{growth}%</span>
                </div>
                <input
                  type="range" min={50} max={500} step={10}
                  value={growth}
                  onChange={(e) => setGrowth(Number(e.target.value))}
                  className="w-full accent-brand"
                />
              </div>
            </div>
          </div>
          <div className="glass-card p-12 rounded-3xl ring-1 ring-border flex flex-col justify-center text-center">
            <span className="text-muted-foreground mb-2">Projected Annual Revenue Growth</span>
            <span className="text-6xl md:text-7xl text-foreground font-serif italic">
              {formatINRShort(projected)}
            </span>
            <p className="mt-8 text-sm text-muted-foreground mb-10">
              Based on historical data for similar brand profiles working with our growth pods.
            </p>
            <a href="#services" className="w-full py-4 bg-foreground text-background font-semibold rounded-full hover:brightness-110 transition">
              Get Custom Roadmap
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-32 relative glow-mesh">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl text-foreground font-serif italic leading-[0.95] mb-10 text-balance">
            Ready to dominate?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            A 30-minute call. No pitch deck. Just a candid look at where your growth is leaking
            and what the next ₹10 Cr looks like.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:hello@jeevora.agency"
              className="px-10 py-5 bg-brand text-brand-foreground font-semibold rounded-full ring-1 ring-brand hover:brightness-110 transition active:scale-95 text-lg"
            >
              Schedule Consultation
            </a>
            <a
              href="#cases"
              className="px-10 py-5 bg-card text-foreground font-semibold rounded-full ring-1 ring-border hover:bg-secondary transition active:scale-95 text-lg"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-foreground font-semibold italic font-serif text-lg">Jeevora</span>
          <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Jeevora Growth Agency.</p>
        </div>
      </footer>

      {booking && <CheckoutModal service={booking} onClose={() => setBooking(null)} />}
    </main>
  );
}

function CheckoutModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [step, setStep] = useState<"form" | "processing" | "success">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const gst = Math.round(service.price * 0.18);
  const total = service.price + gst;
  const orderId = "JVR-" + Math.random().toString(36).slice(2, 8).toUpperCase();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    setTimeout(() => setStep("success"), 1600);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up" style={{ animationDuration: "200ms" }}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-3xl ring-1 ring-border bg-card shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 size-9 rounded-full bg-background/60 ring-1 ring-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition z-10"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        <div className="p-8 border-b border-border bg-background/40">
          <div className="text-[10px] uppercase tracking-[0.2em] text-brand mb-2">Booking · {service.title}</div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl font-serif italic text-foreground">Secure checkout</h3>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Total</div>
              <div className="text-foreground font-serif italic text-2xl">{formatINR(total)}</div>
            </div>
          </div>
          <div className="mt-4 text-xs text-muted-foreground flex justify-between">
            <span>Service fee</span><span>{formatINR(service.price)}</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground flex justify-between">
            <span>GST (18%)</span><span>{formatINR(gst)}</span>
          </div>
        </div>

        {step === "form" && (
          <form onSubmit={submit} className="p-8 space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <Input label="Full name" value={name} onChange={setName} required placeholder="Aarav Sharma" />
              <Input label="Work email" value={email} onChange={setEmail} required type="email" placeholder="you@brand.in" />
            </div>
            <Input label="Company" value={company} onChange={setCompany} required placeholder="Brand Pvt. Ltd." />
            <div className="pt-2 border-t border-border/60">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Payment details</div>
              <Input label="Card number" value={card} onChange={setCard} required placeholder="4242 4242 4242 4242" maxLength={19} />
              <div className="grid grid-cols-2 gap-3 mt-3">
                <Input label="Expiry" value={expiry} onChange={setExpiry} required placeholder="MM/YY" maxLength={5} />
                <Input label="CVV" value={cvv} onChange={setCvv} required placeholder="123" maxLength={4} />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-brand text-brand-foreground font-semibold rounded-full ring-1 ring-brand hover:brightness-110 transition active:scale-95 inline-flex items-center justify-center gap-2"
            >
              <Lock className="size-4" /> Pay {formatINR(total)}
            </button>
            <p className="text-[11px] text-muted-foreground text-center">
              Mock checkout · no real charge will be made. INR pricing inclusive of GST.
            </p>
          </form>
        )}

        {step === "processing" && (
          <div className="p-16 flex flex-col items-center justify-center gap-4">
            <Loader2 className="size-10 text-brand animate-spin" />
            <p className="text-foreground font-medium">Authorising payment…</p>
            <p className="text-xs text-muted-foreground">Contacting your bank securely</p>
          </div>
        )}

        {step === "success" && (
          <div className="p-10 text-center">
            <div className="mx-auto size-14 rounded-full bg-brand/10 ring-1 ring-brand/40 flex items-center justify-center mb-5">
              <CheckCircle2 className="size-7 text-brand" />
            </div>
            <h4 className="text-2xl font-serif italic text-foreground mb-2">Booking confirmed</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Your growth pod for <span className="text-foreground">{service.title}</span> will reach out within 24 hours.
            </p>
            <div className="rounded-xl ring-1 ring-border bg-background/60 p-4 text-left text-xs mb-6">
              <Row k="Order ID" v={orderId} />
              <Row k="Amount paid" v={formatINR(total)} />
              <Row k="Email" v={email || "—"} />
            </div>
            <button
              onClick={onClose}
              className="w-full py-4 bg-foreground text-background font-semibold rounded-full hover:brightness-110 transition"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Input({
  label, value, onChange, required, type = "text", placeholder, maxLength,
}: {
  label: string; value: string; onChange: (v: string) => void;
  required?: boolean; type?: string; placeholder?: string; maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-background ring-1 ring-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-brand transition"
      />
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between py-1.5 border-b border-border/40 last:border-0">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-foreground font-medium">{v}</span>
    </div>
  );
}
