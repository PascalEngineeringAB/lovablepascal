import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroSteel from "../assets/hero-steel.jpg";
import projectTerminal from "../assets/project-terminal.jpg";
import projectDetail from "../assets/project-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pascal Engineering — Advanced Steel Structures" },
      { name: "description", content: "Pascal Engineering designs high-tolerance steel systems for the next generation of civil architecture. Exacting standards, permanent solutions." },
      { property: "og:title", content: "Pascal Engineering — Advanced Steel Structures" },
      { property: "og:description", content: "Pascal Engineering designs high-tolerance steel systems for the next generation of civil architecture." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-charcoal font-body text-zinc-400 selection:bg-copper/30 selection:text-zinc-100">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSteel}
            alt="Steel skyscraper frame against twilight sky"
            className="w-full h-full object-cover opacity-60"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
        <div className="relative z-10 w-full pb-20 pt-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-[56ch]">
              <h1 className="font-display text-5xl md:text-7xl text-zinc-100 font-semibold leading-none text-balance mb-8">
                Structural integrity through <span className="text-copper">advanced</span> material science.
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed text-pretty">
                Pascal Engineering designs high-tolerance steel systems for the next generation of civil architecture. Exacting standards, permanent solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 md:sticky md:top-24">
              <span className="block text-copper font-medium mb-4 uppercase tracking-widest text-xs">
                01 / Expertise
              </span>
              <h2 className="font-display text-4xl text-zinc-100 font-medium leading-tight text-balance">
                The mechanics of strength.
              </h2>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-zinc-100 group"
              >
                <span className="p-1 ring-1 ring-zinc-700 bg-zinc-800/50 group-hover:ring-copper transition-all">
                  <ArrowRight className="size-4 text-copper" />
                </span>
                All services
              </Link>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800/30 border border-zinc-800/30">
              <ServiceCard
                title="Structural Optimization"
                description="Refining steel mass distribution to achieve maximum stability with minimal material weight."
              />
              <ServiceCard
                title="Seismic Engineering"
                description="Advanced damping systems designed for high-risk zones and extreme weather conditions."
              />
              <ServiceCard
                title="Parametric Design"
                description="Complex geometry translation into buildable, precise structural frameworks."
              />
              <ServiceCard
                title="Facade Engineering"
                description="Seamless integration between primary steel cores and high-performance exterior skins."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-end border-b border-zinc-800/50 pb-8">
              <div>
                <span className="block text-copper font-medium mb-2 uppercase tracking-widest text-xs">
                  Featured Work
                </span>
                <h2 className="font-display text-3xl text-zinc-100 font-medium">
                  The Obsidian Terminal
                </h2>
              </div>
              <Link
                to="/projects"
                className="flex items-center gap-2 group text-sm font-medium text-zinc-100 py-2 pr-3 pl-2"
              >
                <span className="p-1 ring-1 ring-zinc-700 bg-zinc-800/50 group-hover:ring-copper transition-all">
                  <ArrowRight className="size-4 text-copper" />
                </span>
                View Projects
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <img
                  src={projectTerminal}
                  alt="Minimalist black steel airport terminal interior"
                  className="w-full aspect-[16/10] object-cover rounded-xl"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-6">
                <img
                  src={projectDetail}
                  alt="Brushed steel joint connecting I-beams"
                  className="w-full aspect-square object-cover rounded-xl"
                  width={800}
                  height={800}
                  loading="lazy"
                />
                <div className="bg-zinc-900/40 p-8 border border-zinc-800/50 flex flex-col justify-center flex-1 rounded-xl">
                  <p className="text-zinc-100 text-lg font-medium mb-4 italic leading-snug">
                    "A masterclass in restraint. Every bolt serves a purpose, every beam defines a space."
                  </p>
                  <span className="text-xs uppercase tracking-widest text-zinc-500">
                    Architecture Digest, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900 ring-1 ring-white/5 p-12 md:p-24 flex flex-col items-center text-center rounded-xl">
            <h2 className="font-display text-4xl md:text-5xl text-zinc-100 font-medium mb-8 max-w-[20ch] leading-tight text-balance">
              Discuss your next ambitious structure.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-copper text-zinc-100 font-medium text-sm transition-all hover:bg-copper/90 ring-1 ring-copper/50 text-center"
              >
                Inquire Now
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 bg-transparent border border-zinc-700 text-zinc-300 font-medium text-sm transition-all hover:bg-zinc-800 text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-charcoal p-8 flex flex-col gap-4">
      <div className="text-zinc-500 text-xs font-medium uppercase tracking-tighter">
        Service
      </div>
      <h3 className="text-zinc-100 text-xl font-medium">{title}</h3>
      <p className="text-sm text-pretty leading-relaxed">{description}</p>
    </div>
  );
}
