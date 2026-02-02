import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, MapPin, Phone, Mail, Sparkles, Truck, ShieldCheck, ArrowRight, Star, Recycle } from "lucide-react";

// Single-page marketing site for: Ready Reset Haul
// Notes:
// - This is a front-end demo (no backend). Wire the form to your email/CRM later.
// - Replace placeholders (phone/email/service area/pricing) as needed.

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Pill = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-sm text-zinc-700 shadow-sm backdrop-blur">
    {Icon ? <Icon className="h-4 w-4" /> : null}
    <span>{children}</span>
  </div>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-2xl text-center">
    {kicker ? (
      <div className="mb-3 flex items-center justify-center gap-2">
        <span className="h-px w-10 bg-zinc-200" />
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{kicker}</span>
        <span className="h-px w-10 bg-zinc-200" />
      </div>
    ) : null}
    <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
    {subtitle ? (
      <p className="mt-3 text-pretty text-base text-zinc-600 sm:text-lg">{subtitle}</p>
    ) : null}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-zinc-200 bg-white shadow-sm ${className}`}>{children}</div>
);

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-zinc-900/20";
  const styles = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800",
    ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100",
    outline: "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const AnchorButton = ({ href, children, variant = "primary", className = "" }) => (
  <a href={href} className="inline-flex">
    <span className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-zinc-900/20 ${
      variant === "primary"
        ? "bg-zinc-900 text-white hover:bg-zinc-800"
        : variant === "outline"
        ? "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100"
        : "bg-transparent text-zinc-900 hover:bg-zinc-100"
    } ${className}`}>
      {children}
    </span>
  </a>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition"
  >
    {children}
  </a>
);

export default function ReadyResetHaulSite() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Organize + Declutter", details: "" });
  const [sent, setSent] = useState(false);

  const contact = useMemo(
    () => ({
      phoneDisplay: "(562) 555-0123",
      phoneTel: "+15625550123",
      email: "hello@readyresethaul.com",
      area: "Signal Hill • Long Beach • South Bay",
    }),
    []
  );

  const services = [
    {
      icon: Sparkles,
      title: "Home & Life Reset",
      desc: "Closets, kitchens, garages, spare rooms—clear the clutter, create a system that stays.",
      bullets: ["Declutter + donate sorting", "Zones + labels", "Maintenance plan"],
    },
    {
      icon: Truck,
      title: "Haul Away & Clean-Outs",
      desc: "Junk removal, move-out clean-outs, and light demo debris—fast, neat, and transparent.",
      bullets: ["Curb-to-truck removal", "Single-item pickups", "Room/whole-home clean-outs"],
    },
    {
      icon: Recycle,
      title: "Donation & Eco Disposal",
      desc: "We prioritize donation, recycling, and responsible disposal whenever possible.",
      bullets: ["Donation drop-off", "E-waste guidance", "Recycle-first approach"],
    },
  ];

  const steps = [
    {
      title: "Quick Quote",
      desc: "Text photos or schedule an on-site estimate. We confirm scope, access, and timing.",
      icon: Clock,
    },
    {
      title: "Reset Day",
      desc: "We sort, clear, organize, and haul. You approve keep/donate/toss as we go.",
      icon: ShieldCheck,
    },
    {
      title: "Done & Maintained",
      desc: "Final walkthrough + simple upkeep plan so your space stays READY.",
      icon: Check,
    },
  ];

  const faqs = [
    {
      q: "Do I need to be home during the reset?",
      a: "Ideally yes for the first 15–20 minutes to confirm priorities. After that, we can work independently and check in for decisions.",
    },
    {
      q: "What do you take for hauling?",
      a: "Most household junk and clutter. For hazardous materials (paint, chemicals, etc.), we’ll guide you to the right disposal options.",
    },
    {
      q: "How do you price jobs?",
      a: "Simple: time + volume + disposal. We’ll quote upfront based on photos or an on-site look—no surprises.",
    },
    {
      q: "Do you offer recurring maintenance?",
      a: "Yes—monthly or seasonal touch-ups for closets, kitchens, offices, or storage areas.",
    },
  ];

  const testimonials = [
    {
      name: "Taylor R.",
      quote: "My garage went from chaos to a clean, labeled system in one afternoon. They even handled donation drop-off.",
      rating: 5,
    },
    {
      name: "Jordan M.",
      quote: "Move-out clean-out was fast and professional. Clear pricing and zero stress.",
      rating: 5,
    },
    {
      name: "Sam P.",
      quote: "Closet reset was a game changer—everything has a place now. The maintenance plan is clutch.",
      rating: 5,
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo behavior: mark as sent.
    // To make it real:
    // - Connect to Formspree, Zapier, Airtable, HubSpot, etc.
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Top gradient */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-gradient-to-b from-white to-transparent" />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm">
                <span className="text-sm font-bold">RR</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Ready Reset Haul</div>
                <div className="text-xs text-zinc-500">Organize • Declutter • Haul Away</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#how">How it works</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#reviews">Reviews</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="flex items-center gap-2">
              <AnchorButton href="#contact" variant="outline" className="hidden sm:inline-flex">
                Get a quote
              </AnchorButton>
              <a
                href={`tel:${contact.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="relative overflow-hidden py-14 sm:py-20">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  <Pill icon={MapPin}>{contact.area}</Pill>
                  <Pill icon={Clock}>Same-week availability</Pill>
                  <Pill icon={ShieldCheck}>Insured • Professional</Pill>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
                >
                  Reset your space.
                  <span className="text-zinc-500"> Reset your life.</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="mt-4 text-pretty text-base text-zinc-600 sm:text-lg">
                  Ready Reset Haul helps busy people clear clutter, create simple systems, and remove what no longer serves you.
                  Organizing, decluttering, cleaning support, and hauling—done in one smooth visit.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <AnchorButton href="#contact" variant="primary">
                    Get a fast quote <ArrowRight className="h-4 w-4" />
                  </AnchorButton>
                  <AnchorButton href="#services" variant="outline">
                    See services
                  </AnchorButton>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6 grid gap-3 sm:grid-cols-3">
                  <Card className="p-4">
                    <div className="text-sm font-semibold">Declutter</div>
                    <div className="mt-1 text-sm text-zinc-600">Keep • Donate • Toss</div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-sm font-semibold">Organize</div>
                    <div className="mt-1 text-sm text-zinc-600">Zones + labels</div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-sm font-semibold">Haul</div>
                    <div className="mt-1 text-sm text-zinc-600">Eco-first disposal</div>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Hero visual */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-br from-white via-white to-zinc-100 p-6 sm:p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-semibold">Popular Packages</div>
                        <div className="mt-1 text-sm text-zinc-600">Quick picks for the most common resets</div>
                      </div>
                      <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 shadow-sm">
                        Most requested
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4">
                      <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold">Closet Reset</div>
                          <div className="text-xs text-zinc-500">2–4 hrs</div>
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Sort + purge</li>
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Fold + hang system</li>
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Donation ready</li>
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold">Garage Reset + Haul</div>
                          <div className="text-xs text-zinc-500">Half-day</div>
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Clear pathways</li>
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Zones + shelving plan</li>
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Junk removed</li>
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold">Move-Out Clean-Out</div>
                          <div className="text-xs text-zinc-500">Same-day</div>
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Room-by-room sweep</li>
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Load + dispose</li>
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Final walkthrough</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="text-sm font-semibold">Want this to feel effortless?</div>
                          <div className="text-sm text-zinc-600">Send photos for a fast quote.</div>
                        </div>
                        <a
                          href="#contact"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
                        >
                          Get a quote <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white blur-2xl" />
                <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-white blur-2xl" />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section id="services" className="py-14 sm:py-20">
          <Container>
            <SectionTitle
              kicker="Services"
              title="Organizing + hauling, in one smooth flow"
              subtitle="We reset the space and remove what you don’t want—so you don’t get stuck with piles of ‘later.’"
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <motion.div key={s.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
                  <Card className="h-full p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div className="text-lg font-semibold">{s.title}</div>
                    </div>
                    <p className="mt-3 text-sm text-zinc-600">{s.desc}</p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <AnchorButton href="#contact" variant="primary">
                Tell us what you need <ArrowRight className="h-4 w-4" />
              </AnchorButton>
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section id="how" className="py-14 sm:py-20 bg-white border-y border-zinc-200">
          <Container>
            <SectionTitle
              kicker="How it works"
              title="A simple method that actually sticks"
              subtitle="We make it easy to decide, clear, and keep things tidy—without perfectionism."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((st) => (
                <motion.div key={st.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
                  <Card className="h-full p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white">
                        <st.icon className="h-5 w-5" />
                      </div>
                      <div className="text-lg font-semibold">{st.title}</div>
                    </div>
                    <p className="mt-3 text-sm text-zinc-600">{st.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Card className="p-6">
                <div className="text-lg font-semibold">What you can expect</div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Clear communication + respectful service</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />You approve decisions (keep/donate/toss)</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Fast, tidy hauling—no leftover piles</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />A simple system you’ll actually use</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="text-lg font-semibold">Best for</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {["Garages", "Closets", "Kitchens", "Storage units", "Offices", "Move-outs"].map((item) => (
                    <div key={item} className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </Container>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-14 sm:py-20">
          <Container>
            <SectionTitle
              kicker="Pricing"
              title="Transparent ranges—quoted upfront"
              subtitle="Every space is different. We quote based on time + volume + disposal so you know what you’re paying for."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <Card className="p-6">
                <div className="text-sm font-semibold text-zinc-500">STARTER</div>
                <div className="mt-2 text-xl font-semibold">Single Area Reset</div>
                <div className="mt-2 text-3xl font-semibold">$199–$399</div>
                <div className="mt-1 text-sm text-zinc-600">Closet, pantry, small garage corner</div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {["2–4 hours", "Declutter + organize", "Donation staging"].map((b) => (
                    <li key={b} className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />{b}</li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 ring-1 ring-zinc-900/10">
                <div className="text-sm font-semibold text-zinc-500">MOST POPULAR</div>
                <div className="mt-2 text-xl font-semibold">Garage Reset + Haul</div>
                <div className="mt-2 text-3xl font-semibold">$450–$1,200</div>
                <div className="mt-1 text-sm text-zinc-600">Half to full day resets</div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {["Zones + layout plan", "Haul-away included", "Recycle/donate where possible"].map((b) => (
                    <li key={b} className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />{b}</li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <div className="text-sm font-semibold text-zinc-500">CLEAN-OUT</div>
                <div className="mt-2 text-xl font-semibold">Move-Out / Estate</div>
                <div className="mt-2 text-3xl font-semibold">$750–$3,500+</div>
                <div className="mt-1 text-sm text-zinc-600">Multiple rooms / heavy volume</div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {["Team-based", "Fast turnaround", "Final walkthrough"].map((b) => (
                    <li key={b} className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />{b}</li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <AnchorButton href="#contact" variant="primary">
                Get my exact quote <ArrowRight className="h-4 w-4" />
              </AnchorButton>
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-zinc-500">
              Pricing ranges shown are examples. Final pricing depends on access (stairs/elevator), volume/weight, and disposal requirements.
            </p>
          </Container>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-14 sm:py-20 bg-white border-y border-zinc-200">
          <Container>
            <SectionTitle
              kicker="Reviews"
              title="People love the ‘done in one day’ feeling"
              subtitle="Swap these for real Google/Yelp reviews when you’re ready."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <motion.div key={t.name} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
                  <Card className="h-full p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="flex">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-zinc-900" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-zinc-600">“{t.quote}”</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-14 sm:py-20">
          <Container>
            <SectionTitle
              kicker="FAQ"
              title="Quick answers"
              subtitle="If you don’t see your question, send us a text and we’ll reply fast."
            />

            <div className="mx-auto mt-10 max-w-3xl space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900">
                    <div className="flex items-center justify-between gap-4">
                      <span>{f.q}</span>
                      <span className="text-zinc-400 group-open:rotate-180 transition">▾</span>
                    </div>
                  </summary>
                  <p className="mt-3 text-sm text-zinc-600">{f.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14 sm:py-20 bg-white border-t border-zinc-200">
          <Container>
            <SectionTitle
              kicker="Contact"
              title="Get a fast quote"
              subtitle="Tell us what you’re resetting. If you can, include photos for the fastest estimate."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Card className="p-6">
                <div className="text-lg font-semibold">Reach us</div>
                <div className="mt-4 space-y-3 text-sm text-zinc-700">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a className="font-semibold hover:underline" href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
                    <span className="text-zinc-500">• Call/Text</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a className="font-semibold hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{contact.area}</span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-sm font-semibold">Pro tip for the fastest quote</div>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Send 3–6 photos of the space</li>
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Tell us your timeline (this week / next week)</li>
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Any heavy items or stairs?</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Pill>Licensed where required</Pill>
                  <Pill>Respectful + nonjudgmental</Pill>
                  <Pill>Donation-first</Pill>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-semibold">Request a quote</div>
                  {sent ? (
                    <div className="rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-xs font-semibold text-green-800">
                      Sent! We’ll reply soon.
                    </div>
                  ) : null}
                </div>

                <form onSubmit={onSubmit} className="mt-4 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">Name</label>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-700">Phone</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                        placeholder="(###) ###-####"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                    >
                      <option>Organize + Declutter</option>
                      <option>Haul Away</option>
                      <option>Garage Reset + Haul</option>
                      <option>Move-Out / Clean-Out</option>
                      <option>Recurring Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Details</label>
                    <textarea
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="mt-1 min-h-[120px] w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                      placeholder="Tell us what you want reset (rooms, rough amount, heavy items, stairs, preferred dates)."
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit">
                      Request quote <ArrowRight className="h-4 w-4" />
                    </Button>
                    <div className="text-xs text-zinc-500">
                      By submitting, you agree to be contacted via phone/email.
                    </div>
                  </div>
                </form>
              </Card>
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer className="py-10">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm">
                  <span className="text-sm font-bold">RR</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Ready Reset Haul</div>
                  <div className="text-xs text-zinc-500">Organize • Declutter • Haul Away</div>
                </div>
              </div>

              <div className="text-xs text-zinc-500">© {new Date().getFullYear()} Ready Reset Haul. All rights reserved.</div>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
