import React from "react";
import Navbar from "../components/navbar";
import ProfilePic from "../assets/profile.png";

const PERSONAL_CORE = {
  name: "JERSON F. DORONILA",
  tagline: "Logical Thinking. Creative Execution.",
  intro:
    "I am a solution-oriented thinker who treats every challenge as a logic puzzle. My approach is defined by deep curiosity and a commitment to building systems that are as efficient as they are elegant.",

  softSkills: [
    {
      label: "Adaptability",
      description:
        "Quickly pivoting to new technologies and workflows as project demands evolve.",
    },
    {
      label: "Critical Thinking",
      description:
        "Analyzing complex problems to find the most direct and sustainable path forward.",
    },
    {
      label: "Collaboration",
      description:
        "Bridging the gap between technical requirements and human communication.",
    },
    {
      label: "Attention to Detail",
      description:
        "Focusing on the small technical nuances that ensure long-term system stability.",
    },
  ],

  principles: ["Clarity", "Efficiency", "Continuous Learning", "Precision"],
  contact: "doronilajerson@gmail.com",
  status: "SYSTEM_READY",
  version: "v.4.0.1",
};

function Landing() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 md:mb-40">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                Identity // {PERSONAL_CORE.name}
              </p>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 md:mb-12">
              {PERSONAL_CORE.tagline.split(".")[0]}
              <span className="text-zinc-200">.</span> <br />
              <span className="text-zinc-200 uppercase">
                {PERSONAL_CORE.tagline.split(".")[1]}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed italic border-l-4 border-black pl-6 md:pl-8">
              "{PERSONAL_CORE.intro}"
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="aspect-[4/5] bg-white border-2 border-black p-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src={ProfilePic}
                  alt={PERSONAL_CORE.name}
                  className="w-full h-full object-cover grayscale-0"
                />
              </div>
              <div className="mt-10 md:mt-16 font-mono text-[10px] text-zinc-400 uppercase tracking-widest flex justify-between">
                <span>Ref: Subject_Asset_01</span>
                <span>{PERSONAL_CORE.status}</span>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-24 md:mb-40">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.4em] bg-black text-white px-3 py-1 whitespace-nowrap">
              01_Competencies
            </h2>
            <div className="flex-1 h-px bg-zinc-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black overflow-hidden">
            {PERSONAL_CORE.softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-8 md:p-10 hover:bg-zinc-50 transition-colors duration-300 group"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-xs text-zinc-300 group-hover:text-black transition-colors">
                    0{index + 1}
                  </span>
                  <div className="w-4 h-4 border border-black rounded-full group-hover:bg-black transition-all"></div>
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">
                  {skill.label}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed italic">
                  "{skill.description}"
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full overflow-hidden py-10 border-y-2 border-black mb-24 md:mb-40">
          <div className="flex whitespace-nowrap gap-20 animate-infinite-scroll">
            {[...PERSONAL_CORE.principles, ...PERSONAL_CORE.principles].map(
              (item, i) => (
                <span
                  key={i}
                  className="text-6xl md:text-8xl font-black uppercase tracking-tighter flex items-center gap-10"
                >
                  {item}{" "}
                  <span className="text-zinc-200 tracking-[0.2em] font-light">
                    //
                  </span>
                </span>
              )
            )}
          </div>
        </div>

        <div className="border-2 border-black p-8 sm:p-16 md:p-24 text-center relative overflow-hidden group">
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-8 uppercase italic relative z-10">
            Interested in a <br className="hidden sm:block" /> logical
            perspective?
          </h3>

          <div className="flex flex-col items-center gap-12 relative z-10">
            <a
              href={`mailto:${PERSONAL_CORE.contact}`}
              className="px-12 py-5 bg-black text-white font-mono text-xs font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all"
            >
              Start_Conversation
            </a>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                ["LinkedIn", "https://www.linkedin.com/in/jersondoronila/"],
                ["GitHub", "https://github.com/im-jerz"],
                ["Facebook", "https://www.facebook.com/Mr.JersonDoronila"],
              ].map((link) => (
                <a
                  key={link[0]}
                  href={link[1]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-black border-b border-transparent hover:border-black transition-all"
                >
                  {link[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="absolute right-0 bottom-0 text-[40vw] sm:text-[30vw] font-black text-zinc-50 leading-none pointer-events-none -z-0 group-hover:text-zinc-100 transition-colors opacity-40">
            LOG
          </div>
        </div>

        <footer className="mt-20 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[9px] text-zinc-300 uppercase tracking-widest text-center sm:text-left">
          <p>© 2026 {PERSONAL_CORE.name}</p>
          <p>Loc: Manila // {PERSONAL_CORE.version}</p>
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

export default Landing;
