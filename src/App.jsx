import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Trophy, Clock, ShieldCheck, ClipboardList, Mail, ArrowRight } from "lucide-react";

// NOTE: This is a single-page landing site scaffold for your event.
// Replace all TBD placeholders with the real info when ready.
// TailwindCSS is used for styling. Links currently point to placeholders.

export default function TournamentLanding() {
  const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm font-medium shadow-sm bg-white/70 backdrop-blur border-black/5">
      {children}
    </span>
  );

  const Section = ({ id, title, subtitle, children }) => (
    <section id={id} className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="text-sm md:text-base text-black/60 mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Coed 7v7 Indoor — One Division</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-75">About</a>
            <a href="#rules" className="hover:opacity-75">Rules</a>
            <a href="#schedule" className="hover:opacity-75">Schedule</a>
            <a href="#register" className="hover:opacity-75">Register</a>
            <a href="#faq" className="hover:opacity-75">FAQ</a>
            <a href="#contact" className="hover:opacity-75">Contact</a>
          </nav>
          <a href="#register" className="inline-flex items-center gap-2 text-sm font-semibold">
            Register <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Mid-Atlantic Coed 7v7 Indoor
            </h1>
            <p className="mt-3 text-base md:text-lg text-black/70">
              One competitive division. Two-day tournament. Coed format with <span className="font-semibold">2 women on the field at all times</span>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge><Calendar className="mr-2 size-4" /> Date: <span className="ml-1 font-medium">DEC, 2025</span></Badge>
              <Badge><MapPin className="mr-2 size-4" /> Location: <span className="ml-1 font-medium">Virginia Beach Field House, 2020 Landstown Centre Wy, Virginia Beach, VA 23456</span></Badge>
              <Badge><Clock className="mr-2 size-4" /> Match Length: <span className="ml-1 font-medium">25–30 min</span></Badge>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#register" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm bg-slate-900 text-white hover:opacity-90">
                Register Team
              </a>
              <a href="#register" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm bg-white border border-black/10 hover:bg-slate-50">
                Free Agent Interest
              </a>
            </div>
          </div>
          <div>
            <div className="rounded-3xl overflow-hidden shadow-sm border border-black/5">
              <img
                src="public/vbfh-turf1.jpg"  // file lives in public/hero.jpg
                alt="Indoor soccer at Virginia Beach Field House"
                className="w-full h-[260px] md:h-[420px] object-cover"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* About */}
      <Section id="about" title="About the Event" subtitle="Two-day, single-division, competitive coed 7v7 indoor tournament">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 font-semibold"><Users className="size-4"/> One Division</div>
            <p className="text-sm text-black/70 mt-2">All teams compete in the same bracket—no rec/elite splits. Rosters recommended at 10–12 players.</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 font-semibold"><Clock className="size-4"/> 3 Games Saturday</div>
            <p className="text-sm text-black/70 mt-2">Each team plays 3 group-stage matches on Saturday. Sunday is knockout (Top 8) plus optional consolations.</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 font-semibold"><Trophy className="size-4"/> Prizes</div>
            <p className="text-sm text-black/70 mt-2">Trophy + prize package (TBD). Female MVP and Top Scorer recognitions.</p>
          </div>
        </div>
      </Section>

      {/* Rules at a Glance */}
      <Section id="rules" title="Rules at a Glance" subtitle="Full rulebook will be provided to captains upon registration">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <ul className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm space-y-3 text-sm">
            <li className="flex items-start gap-2"><ShieldCheck className="size-4 mt-0.5"/> 7v7 indoor; <span className="font-medium">2 women on the field at all times</span>. Female GK counts toward the minimum.</li>
            <li className="flex items-start gap-2"><ShieldCheck className="size-4 mt-0.5"/> Match length: <span className="font-medium">25–30 minutes</span> running clock; 5-minute turnover; no halftime.</li>
            <li className="flex items-start gap-2"><ShieldCheck className="size-4 mt-0.5"/> Group stage points: 3/1/0. Tiebreakers: GD (cap +6), Goals For, Head-to-Head, Fair Play, Coin Toss.</li>
            <li className="flex items-start gap-2"><ShieldCheck className="size-4 mt-0.5"/> Slide tackles prohibited. Unlimited on-the-fly subs. Facility restarts (kick-in/throw) apply.</li>
          </ul>
          <ul className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm space-y-3 text-sm">
            <li className="flex items-start gap-2"><ShieldCheck className="size-4 mt-0.5"/> Roster: recommended 10–12; min 8; max 14. Shin guards mandatory; matching jerseys with unique numbers.</li>
            <li className="flex items-start gap-2"><ShieldCheck className="size-4 mt-0.5"/> Discipline: Yellow = 2 min off (team plays short). Red = ejection; possible suspension.</li>
            <li className="flex items-start gap-2"><ShieldCheck className="size-4 mt-0.5"/> Overtime (Sunday only): 5-min golden goal → 3-penalty shootout (must include 1 female shooter).</li>
            <li className="flex items-start gap-2"><ShieldCheck className="size-4 mt-0.5"/> Eligibility: 18+. (Optional: 16–17 with parental consent & guardrails.)</li>
          </ul>
        </div>
      </Section>

      {/* Schedule */}
      <Section id="schedule" title="Schedule" subtitle="Exact kickoff times will be published after registration closes">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-sm">
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-semibold">Saturday — Group Stage</div>
            <ul className="mt-2 space-y-2 text-black/70 list-disc list-inside">
              <li>3 matches per team</li>
              <li>25–30 min running clock + 5 min turnover</li>
              <li>Standings determine Sunday seeds</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-semibold">Sunday — Knockout</div>
            <ul className="mt-2 space-y-2 text-black/70 list-disc list-inside">
              <li>Top 8: Quarterfinals → Semifinals → Final</li>
              <li>Optional consolations for others</li>
              <li>Final: 30 min (or 2×15) (TBD)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-semibold">Fields & Capacity</div>
            <ul className="mt-2 space-y-2 text-black/70 list-disc list-inside">
              <li>Using 2–3 indoor fields</li>
              <li>Target team cap: TBD (based on fields/hours)</li>
              <li>No back-to-backs (min one block rest)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Registration */}
      <Section id="register" title="Register" subtitle="First paid, first confirmed. Your spot is reserved after payment is received.">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-semibold mb-2">Team Registration</div>
            <ol className="list-decimal list-inside text-sm text-black/70 space-y-2">
              <li>Complete the team form (Team name, captain info, jersey colors).</li>
              <li>Pay the team fee online (link below).</li>
              <li>Submit full roster & signed waivers by the roster lock date.</li>
            </ol>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-slate-900 text-white hover:opacity-90">Open Team Form</a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-white border border-black/10 hover:bg-slate-50">Pay Team Fee</a>
            </div>
            <p className="text-xs text-black/50 mt-3">You can paste your Google Form + payment links here when ready.</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-semibold mb-2">Free Agents</div>
            <p className="text-sm text-black/70">Don’t have a team? Join the pool and we’ll place you on a house team if spots open.</p>
            <a href="#" className="mt-3 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-white border border-black/10 hover:bg-slate-50">Free Agent Form</a>
            <p className="text-xs text-black/50 mt-3">Optional: Enable only if you want to create house teams.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 text-sm">
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-semibold">What’s the roster size?</div>
            <p className="text-black/70 mt-1">Recommended 10–12; minimum 8; maximum 14. Ensure enough eligible women to meet the on-field requirement.</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-semibold">What’s the refund policy?</div>
            <p className="text-black/70 mt-1">TBD.</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-semibold">Can 16–17-year-olds play?</div>
            <p className="text-black/70 mt-1">TBD</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="font-semibold">How many games?</div>
            <p className="text-black/70 mt-1">Three on Saturday (group stage). Sunday is knockout for Top 8, with optional consolations.</p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 font-semibold"><Mail className="size-4"/> Tournament Contact</div>
          <p className="text-sm text-black/70 mt-2">Email: <a href="mailto:organizer@yourfacility.com" className="underline">organizer@yourfacility.com</a></p>
          <p className="text-xs text-black/50 mt-2">Replace with your real contact. You can also embed a Google Form here later.</p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-8 text-center text-xs text-black/60">
        © {new Date().getFullYear()} Virginia Beach Field House — Coed 7v7 Indoor Tournament
      </footer>
    </div>
  );
}