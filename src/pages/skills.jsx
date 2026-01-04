import React from "react";
import Navbar from "../components/navbar";

const GRAD_MANIFEST = {
  profile: "JERSON // FRESH GRADUATE",
  specialization: "Foundational Systems & Modern Web Logic",
  academicFocus: "Computer Science & Engineering Principles",

  foundations: [
    {
      title: "Algorithmic Logic",
      description:
        "Solid grasp of data structures and computational complexity. I write code with performance and optimization in mind.",
      status: "CORE",
    },
    {
      title: "Agile Adaptability",
      description:
        "A fast-learning mindset focused on mastering new frameworks and documentation within tight development cycles.",
      status: "AGILE",
    },
    {
      title: "Full-Stack Context",
      description:
        "Understanding the entire lifecycle of a request, from client-side interaction to server-side logic and database persistence.",
      status: "SYSTEM",
    },
  ],

  stack: [
    {
      category: "Primary Tools",
      items: ["TypeScript", "React.js", "Tailwind CSS", "Node.js"],
      context: "Daily usage in personal projects and academic labs.",
    },
    {
      category: "Foundations",
      items: ["Java", "C++", "Python", "SQL", "Git"],
      context: "Academic backbone and logic development.",
    },
    {
      category: "Learning Vectors",
      items: ["Docker", "AWS Essentials", "PostgreSQL", "Next.js"],
      context:
        "Currently exploring these to expand system scalability knowledge.",
    },
  ],
};

function Skills() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-40 pb-20">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16 md:mb-32 border-b-2 border-black pb-8 md:pb-12 gap-6">
          <div className="max-w-full lg:max-w-3xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-zinc-400">
                Resource_Type // Capability_Manifest
              </p>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-6">
              SKILL<span className="text-zinc-200 uppercase">set.</span>
            </h1>
          </div>
          <div className="font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest w-full lg:w-auto text-left lg:text-right space-y-1">
            <p className="hidden sm:block">Owner: {GRAD_MANIFEST.profile}</p>
            <p>Status: Ready_For_Integration</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black mb-24 md:mb-40 overflow-hidden">
          {GRAD_MANIFEST.foundations.map((item, i) => (
            <div
              key={i}
              className="group p-8 md:p-12 bg-white hover:bg-zinc-50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-10 md:mb-16">
                <span className="text-[9px] md:text-[10px] font-mono font-bold px-2 py-1 border border-black">
                  0{i + 1} // {item.status}
                </span>
                <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-black rounded-full group-hover:bg-black transition-colors"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 uppercase">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed italic">
                "{item.description}"
              </p>
            </div>
          ))}
        </div>

        <section className="mb-24 md:mb-40">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] bg-black text-white px-3 py-1 whitespace-nowrap">
              Tech_Registry.v1
            </h2>
            <div className="flex-1 h-px bg-zinc-200"></div>
          </div>

          <div className="divide-y divide-zinc-200 border-t border-zinc-200">
            {GRAD_MANIFEST.stack.map((group, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:grid lg:grid-cols-12 lg:items-center py-8 md:py-12 group hover:bg-zinc-50 transition-all px-2 md:px-4 -mx-2 md:-mx-4"
              >
                <div className="lg:col-span-3 mb-6 lg:mb-0">
                  <p className="font-mono text-[9px] text-zinc-300 mb-1">
                    ID_00{idx + 1}
                  </p>
                  <h4 className="text-lg md:text-xl font-bold uppercase tracking-tighter group-hover:translate-x-2 transition-transform">
                    {group.category}
                  </h4>
                </div>

                <div className="lg:col-span-6 flex flex-wrap gap-2 mb-6 lg:mb-0">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 md:px-4 py-1.5 border border-zinc-200 rounded-md text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest hover:border-black transition-all bg-white whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="lg:col-span-3 lg:text-right">
                  <p className="text-[10px] md:text-[11px] italic text-zinc-400 leading-snug">
                    {group.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-2 border-black p-8 sm:p-12 md:p-24 text-center relative overflow-hidden group">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 uppercase italic relative z-10 leading-none">
            Hungry for <br className="hidden sm:block" /> Complexity.
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-12 relative z-10 px-4">
            As a fresh graduate, I prioritize speed of execution and logic
            clarity. Ready to contribute to professional-grade systems.
          </p>

          <div className="relative z-10">
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-5 bg-black text-white font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-zinc-800 transition-all"
            >
              Start Integration
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
            </a>
          </div>

          <div className="absolute right-0 bottom-0 text-[40vw] sm:text-[30vw] font-black text-zinc-50 leading-none pointer-events-none -z-0 group-hover:text-zinc-100 transition-colors opacity-50 sm:opacity-100">
            SKL
          </div>
        </div>

        <footer className="mt-16 md:mt-20 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[9px] text-zinc-300 uppercase tracking-widest text-center sm:text-left">
          <p>© 2026 JERSON_ID</p>
          <p>Loc: Manila // Global</p>
        </footer>
      </main>

      <div className="fixed right-4 md:right-6 top-1/2 -rotate-90 origin-right hidden xl:block pointer-events-none">
        <p className="font-mono text-[10px] text-zinc-200 uppercase tracking-[1.5em]">
          Technical_Capability_Analysis
        </p>
      </div>
    </div>
  );
}

export default Skills;
