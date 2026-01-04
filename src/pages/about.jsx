import React from "react";
import Navbar from "../components/navbar";
import ProfilePic from "../assets/profile.png";

const ABOUT_DATA = {
  name: "JERSON",
  role: "Systems Thinker // Logic Architect",
  location: "UTC+8 / Remote",
  status: "ACTIVE_RESEARCH",
  version: "v.4.0.1",

  philosophy: [
    {
      title: "Abstracting Complexity",
      detail:
        "I thrive on taking convoluted problems and distilling them into simple, modular components. If a system can't be explained simply, it hasn't been designed correctly.",
    },
    {
      title: "Continuous Refactoring",
      detail:
        "My personal growth follows a 'refactor' loop. I am constantly updating my mental models and technical skills to stay aligned with industry shifts.",
    },
    {
      title: "First Principles",
      detail:
        "I don't just learn 'how' to use a tool; I seek to understand the underlying logic. This allows me to adapt to any tech stack with high velocity.",
    },
  ],
};

function About() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-40 pb-20">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16 md:mb-32 border-b-2 border-black pb-8 md:pb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                System_Identity // Biography
              </p>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
              ABOUT<span className="text-zinc-200">.logs</span>
            </h1>
          </div>
          <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest w-full lg:w-auto text-left lg:text-right">
            <p>Status: {ABOUT_DATA.status}</p>
            <p>Core_Ver: {ABOUT_DATA.version}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-black border border-black mb-32 overflow-hidden">
          <div className="lg:col-span-5 bg-white p-4 md:p-8">
            <div className="aspect-[4/5] overflow-hidden border border-zinc-200">
              <img
                src={ProfilePic}
                alt={ABOUT_DATA.name}
                className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-6 font-mono text-[10px] text-zinc-400 uppercase tracking-widest flex justify-between">
              <span>Subject_Asset_01</span>
              <span>{ABOUT_DATA.name}_ID</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-12">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.4em] bg-black text-white px-3 py-1 w-fit">
                System_Specs
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                {[
                  { label: "Role", value: ABOUT_DATA.role },
                  { label: "Location", value: ABOUT_DATA.location },
                  { label: "Language", value: "English / Tagalog" },
                  { label: "Availability", value: "Full-Time / Contract" },
                  { label: "Timezone", value: "PHT (GMT+8)" },
                  { label: "Logic_Core", value: "First Principles" },
                ].map((spec, i) => (
                  <div key={i} className="border-l border-zinc-200 pl-4">
                    <p className="text-[10px] font-mono uppercase text-zinc-400 mb-1">
                      {spec.label}
                    </p>
                    <p className="text-lg font-bold tracking-tight uppercase leading-none">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-zinc-100">
              <p className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight italic text-zinc-400">
                "Logic is the beginning of wisdom,{" "}
                <br className="hidden sm:block" /> not the end."
              </p>
            </div>
          </div>
        </div>

        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.4em] bg-black text-white px-3 py-1 whitespace-nowrap">
              Logic_Principles.v1
            </h2>
            <div className="flex-1 h-px bg-zinc-200"></div>
          </div>

          <div className="divide-y divide-zinc-200 border-t border-zinc-200">
            {ABOUT_DATA.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="group py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 hover:bg-zinc-50 transition-all px-2 md:px-4 -mx-2 md:-mx-4"
              >
                <div className="lg:col-span-2">
                  <span className="font-mono text-2xl md:text-4xl text-zinc-200 group-hover:text-black transition-colors font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase mb-4">
                    {item.title}
                  </h4>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl italic">
                    "{item.detail || item.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-2 border-black p-8 sm:p-12 md:p-24 text-center relative overflow-hidden group">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase italic relative z-10 leading-none">
            Systems over <br /> Products.
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto mb-12 relative z-10">
            I don't just build interfaces. I architect frameworks that allow for
            seamless scalability and long-term technical integrity.
          </p>

          <div className="relative z-10">
            <button className="inline-flex items-center gap-6 px-12 py-5 bg-black text-white font-mono text-xs font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all">
              Download Manifesto
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
            </button>
          </div>

          <div className="absolute right-0 bottom-0 text-[40vw] sm:text-[30vw] font-black text-zinc-50 leading-none pointer-events-none -z-0 group-hover:text-zinc-100 transition-colors opacity-50 sm:opacity-100">
            ABT
          </div>
        </div>

        <footer className="mt-16 md:mt-20 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[9px] text-zinc-300 uppercase tracking-widest text-center sm:text-left">
          <p>© 2026 {ABOUT_DATA.name}_IDENTITY</p>
          <p>Loc: {ABOUT_DATA.location}</p>
        </footer>
      </main>

      <div className="fixed right-6 top-1/2 -rotate-90 origin-right hidden xl:block pointer-events-none">
        <p className="font-mono text-[10px] text-zinc-200 uppercase tracking-[1.5em]">
          Technical_Profile_Summary
        </p>
      </div>
    </div>
  );
}

export default About;
