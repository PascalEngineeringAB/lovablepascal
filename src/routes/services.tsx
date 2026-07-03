import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pascal Engineering" },
      { name: "description", content: "Our engineering services include structural optimization, seismic engineering, parametric design, facade engineering, and advanced steel fabrication." },
      { property: "og:title", content: "Services — Pascal Engineering" },
      { property: "og:description", content: "Our engineering services include structural optimization, seismic engineering, parametric design, facade engineering, and advanced steel fabrication." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const services = [
    {
      num: "01",
      title: "Structural Optimization",
      description:
        "We refine steel mass distribution using advanced finite element analysis to achieve maximum stability with minimal material weight. Our optimization processes reduce structural steel tonnage by up to 18% while exceeding all safety requirements.",
    },
    {
      num: "02",
      title: "Seismic Engineering",
      description:
        "Advanced damping systems and base isolation designed for high-risk seismic zones and extreme weather conditions. We model multi-directional load cases to ensure resilience under the most demanding seismic events.",
    },
    {
      num: "03",
      title: "Parametric Design",
      description:
        "Complex geometric forms translated into buildable, precise structural frameworks. Using computational design tools, we develop free-form structures that push the boundaries of what steel can achieve.",
    },
    {
      num: "04",
      title: "Facade Engineering",
      description:
        "Seamless integration between primary steel cores and high-performance exterior skins. We engineer curtain wall connections, thermal breaks, and wind load transfers for modern building envelopes.",
    },
    {
      num: "05",
      title: "BIM & Digital Twins",
      description:
        "Full digital twin modeling for seamless coordination between design, fabrication, and on-site assembly. Our BIM workflows eliminate clashes before they reach the construction site.",
    },
    {
      num: "06",
      title: "Peer Review & Inspection",
      description:
        "Independent structural peer review and site inspection services for high-stakes projects. We provide third-party verification that designs meet Swedish building codes and Eurocode standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal font-body text-zinc-400 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <span className="block text-copper font-medium mb-4 uppercase tracking-widest text-xs">
          What We Do
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-zinc-100 font-medium leading-tight text-balance mb-16">
          Engineering services.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800/30 border border-zinc-800/30">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-charcoal p-10 flex flex-col gap-4"
            >
              <div className="text-zinc-600 text-sm font-medium uppercase tracking-tighter">
                {service.num}
              </div>
              <h3 className="text-zinc-100 text-2xl font-medium">
                {service.title}
              </h3>
              <p className="text-base text-pretty leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
