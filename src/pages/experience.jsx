import React from "react";
import Navbar from "../components/navbar";

const EXPERIENCE_DATA = {
  education: {
    institution: "State University of Technology",
    degree: "BS Computer Science",
    period: "2021 — 2025",
    specializations: [
      { area: "Data Structures", focus: "Efficiency & Logic" },
      { area: "System Design", focus: "Architecture & Scale" },
      { area: "Software Engineering", focus: "SDLC & Methodology" },
      { area: "Database Systems", focus: "Optimization & SQL" },
    ],
  },
  gigs: [
    {
      id: "LOG_01",
      year: "2025",
      client: "Local Enterprise",
      role: "Freelance Dev",
      impact:
        "Developed a custom automation script to sync local records with cloud storage, reducing manual entry time.",
      stack: "Node.js / API",
    },
    {
      id: "LOG_02",
      year: "2024",
      client: "E-Commerce Project",
      role: "Contract UI Dev",
      impact:
        "Architected a responsive frontend for a niche marketplace, prioritizing accessibility and modularity.",
      stack: "React / Tailwind",
    },
    {
      id: "LOG_03",
      year: "2024",
      client: "Community Org",
      role: "System Consultant",
      impact:
        "Refactored a legacy website into a modern, SEO-optimized platform for better community outreach.",
      stack: "Next.js / SEO",
    },
  ],
};

function Experience() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        <div className="flex flex-col lg:flex-row items-baseline gap-8 mb-32">
          <h1 className="text-[15vw] lg:text-[12vw] font-black tracking-tighter leading-none border-b-8 border-black">
            EXP.
          </h1>
          <div className="max-w-md">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-4">
              System_Status // Ready
            </p>
            <p className="text-xl font-medium leading-tight">
              Tracing the transition from academic theory to real-world
              technical execution.
            </p>
          </div>
        </div>

        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-1">
              <h2 className="lg:-rotate-90 origin-top-left font-mono text-[10px] uppercase tracking-[0.5em] whitespace-nowrap text-zinc-300">
                Foundation_v.01
              </h2>
            </div>

            <div className="lg:col-span-11 border-l-2 border-black pl-8 lg:pl-16">
              <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
                <div>
                  <h3 className="text-5xl md:text-6xl font-bold tracking-tighter">
                    {EXPERIENCE_DATA.education.degree}
                  </h3>
                  <p className="text-xl font-mono text-zinc-400 mt-2">
                    {EXPERIENCE_DATA.education.institution}
                  </p>
                </div>
                <span className="font-mono text-sm border-2 border-black px-4 py-1 font-bold">
                  {EXPERIENCE_DATA.education.period}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {EXPERIENCE_DATA.education.specializations.map((spec, i) => (
                  <div
                    key={i}
                    className="border border-zinc-200 p-6 hover:bg-black hover:text-white transition-all group"
                  >
                    <p className="font-mono text-[9px] text-zinc-400 group-hover:text-zinc-500 mb-4">
                      AREA_0{i + 1}
                    </p>
                    <h4 className="text-lg font-bold uppercase leading-none mb-2">
                      {spec.area}
                    </h4>
                    <p className="text-[10px] font-mono opacity-60 uppercase">
                      {spec.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-black flex-1"></div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.4em] px-4">
              Deployment_Log
            </h2>
            <div className="h-px bg-black flex-1"></div>
          </div>

          <div className="space-y-0">
            {EXPERIENCE_DATA.gigs.map((gig, idx) => (
              <div
                key={idx}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-b border-zinc-100 hover:bg-zinc-50/50 transition-all px-6 -mx-6"
              >
                <div className="lg:col-span-2">
                  <p className="font-mono text-xs font-bold">[{gig.id}]</p>
                  <p className="font-mono text-[10px] text-zinc-400 mt-1">
                    {gig.year}
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <h4 className="text-2xl font-bold tracking-tighter uppercase group-hover:translate-x-2 transition-transform">
                    {gig.client}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">
                    {gig.role}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-zinc-500 leading-relaxed text-sm italic">
                    "{gig.impact}"
                  </p>
                </div>

                <div className="lg:col-span-2 flex lg:justify-end">
                  <span className="text-[9px] font-mono border border-black h-fit px-2 py-1 uppercase font-bold">
                    {gig.stack}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-40 bg-black text-white p-12 md:p-20 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-12 overflow-hidden relative">
          <div className="z-10">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Next Operation?
            </h3>
            <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
              Available for full-time integration.
            </p>
          </div>

          <a
            href="mailto:hello@jerson.tech"
            className="z-10 bg-white text-black px-10 py-5 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Initialize Contact
          </a>

          <div className="absolute right-0 bottom-0 text-[15vw] font-black text-white/[0.03] leading-none pointer-events-none select-none">
            HIRE
          </div>
        </div>
      </main>
    </div>
  );
}

export default Experience;
