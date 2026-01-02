import Navbar from "../components/navbar";
import ProfilePic from "../assets/profile.png";

const PERSONAL_CORE = {
  name: "Jerson",
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

  contact: "hello@jerson.tech",
};

function Landing() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-black selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 mb-6">
              Core Identity // {PERSONAL_CORE.name}
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              {PERSONAL_CORE.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed">
              {PERSONAL_CORE.intro}
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-100 shadow-2xl shadow-zinc-200/50">
              <img
                src={ProfilePic}
                alt={PERSONAL_CORE.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white">
                <p className="text-[10px] font-mono uppercase tracking-widest opacity-70">
                  Philosophy
                </p>
                <p className="text-sm font-medium">
                  Built for longevity and logic.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <h3 className="text-3xl font-bold tracking-tight">Competencies</h3>
            <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
              How I approach work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100 rounded-3xl overflow-hidden shadow-sm">
            {PERSONAL_CORE.softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-10 hover:bg-zinc-50 transition-colors duration-300"
              >
                <span className="inline-block w-8 h-[1px] bg-black mb-6"></span>
                <h4 className="text-lg font-bold mb-3 uppercase tracking-tight">
                  {skill.label}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 overflow-hidden py-12 border-y border-zinc-100">
          <div className="flex whitespace-nowrap gap-20 animate-infinite-scroll">
            {[...PERSONAL_CORE.principles, ...PERSONAL_CORE.principles].map(
              (item, i) => (
                <span
                  key={i}
                  className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-zinc-100/80"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center text-center">
          <h3 className="text-4xl font-bold tracking-tight mb-8">
            Interested in a logical perspective?
          </h3>
          <a
            href={`mailto:${PERSONAL_CORE.contact}`}
            className="px-12 py-5 bg-black text-white rounded-full font-mono text-sm uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Start a Conversation
          </a>

          <div className="mt-20 flex gap-12">
            {["LinkedIn", "GitHub", "Twitter"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </main>

      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-zinc-50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-zinc-50 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

export default Landing;
