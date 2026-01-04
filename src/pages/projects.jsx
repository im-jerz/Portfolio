import React, { useState, useMemo } from "react";
import Navbar from "../components/navbar";

const ALL_PROJECTS = [
  {
    id: "01",
    title: "Neural-Sync Interface",
    category: "Systems",
    tech: ["React", "Rust"],
    logic: "Decentralized state synchronization across low-latency nodes.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600",
    docLink: "#",
  },
  {
    id: "02",
    title: "Data-Flow Optimizer",
    category: "Architecture",
    tech: ["TypeScript", "Go"],
    logic: "High-velocity data parsing engine with automated redundancy.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=600",
    docLink: "#",
  },
  {
    id: "03",
    title: "Minimalist OS Shell",
    category: "UI/UX",
    tech: ["C++", "Next.js"],
    logic:
      "System-level UI abstraction layer focusing on cognitive load reduction.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600",
    docLink: "#",
  },
  {
    id: "04",
    title: "Quantum Cipher",
    category: "Security",
    tech: ["Python", "AWS"],
    logic: "Encryption logic built on first-principles entropy analysis.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600",
    docLink: "#",
  },
  {
    id: "05",
    title: "Atmosphere Engine",
    category: "Systems",
    tech: ["Node.js", "Redis"],
    logic: "Real-time environmental data processing for distributed sensors.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    docLink: "#",
  },
];

const CATEGORIES = ["All", "Systems", "Architecture", "UI/UX", "Security"];

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const projectsToShow = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-40 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 border-b-2 border-black pb-8 md:pb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                Data_Source // Project_Index
              </p>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
              PROJ.<span className="text-zinc-200">logs</span>
            </h1>
          </div>

          <div className="relative group w-full max-w-sm">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-xs text-zinc-300 group-focus-within:text-black transition-colors">
              &gt;_
            </span>
            <input
              type="text"
              placeholder="QUERY SYSTEM..."
              className="w-full pl-8 pr-4 py-2 border-b border-zinc-200 font-mono text-[10px] md:text-xs focus:outline-none focus:border-black transition-all bg-transparent uppercase"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(6);
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 md:mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-4 py-1.5 font-mono text-[9px] md:text-[10px] uppercase tracking-widest border transition-all ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-zinc-400 border-zinc-200 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="divide-y divide-zinc-200 border-t border-zinc-200">
          {projectsToShow.length > 0 ? (
            projectsToShow.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col lg:grid lg:grid-cols-12 lg:items-center py-10 md:py-16 hover:bg-zinc-50 transition-all px-2 md:px-4 -mx-2 md:-mx-4 gap-6 lg:gap-8"
              >
                <div className="lg:col-span-1 shrink-0">
                  <p className="font-mono text-[10px] text-zinc-300 group-hover:text-black transition-colors mb-1">
                    [{project.id}]
                  </p>
                </div>

                <div className="lg:col-span-2 shrink-0">
                  <div className="aspect-video lg:aspect-square w-full lg:w-32 rounded-lg overflow-hidden border border-zinc-100 bg-zinc-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm max-w-xl leading-relaxed italic">
                    "{project.logic}"
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6">
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono border border-zinc-200 px-2 py-0.5 rounded text-zinc-400 bg-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.docLink}
                    className="inline-flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-black/5"
                  >
                    View Docs
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center font-mono text-xs text-zinc-400 uppercase tracking-widest">
              No matching records found in system.
            </div>
          )}
        </div>

        <div className="mt-20 flex flex-col items-center gap-6">
          {hasMore ? (
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-12 py-4 border-2 border-black font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
            >
              Append Records [+]
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-px bg-zinc-200"></div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-300 italic">
                End of Directory
              </p>
            </div>
          )}
        </div>
      </main>

      <div className="fixed right-6 top-1/2 -rotate-90 origin-right hidden 2xl:block pointer-events-none">
        <p className="font-mono text-[10px] text-zinc-200 uppercase tracking-[1.5em]">
          Technical_Folio_Systems_v.4.0
        </p>
      </div>
    </div>
  );
}

export default Projects;
