import { createFileRoute } from "@tanstack/react-router";
import projectTerminal from "../assets/project-terminal.jpg";
import projectDetail from "../assets/project-detail.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Pascal Engineering" },
      { name: "description", content: "Explore our portfolio of advanced steel structures, from airport terminals to seismic-resistant high-rises." },
      { property: "og:title", content: "Projects — Pascal Engineering" },
      { property: "og:description", content: "Explore our portfolio of advanced steel structures, from airport terminals to seismic-resistant high-rises." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const projects = [
    {
      id: "01",
      title: "The Obsidian Terminal",
      location: "Stockholm Arlanda, SE",
      year: "2024",
      description:
        "A 45,000 sq m cantilevered steel terminal structure requiring millimeter-precision engineering. The roof spans 120 meters without internal columns, creating an uninterrupted passenger experience.",
      image: projectTerminal,
      imageAlt: "Minimalist black steel airport terminal interior",
    },
    {
      id: "02",
      title: "Helix Bridge Connector",
      location: "Gothenburg, SE",
      year: "2023",
      description:
        "A curved steel pedestrian bridge linking two harbor districts. The helical geometry demanded custom-fabricated connection plates and advanced fatigue analysis for the curved beam elements.",
      image: projectDetail,
      imageAlt: "Brushed steel joint connecting I-beams",
    },
    {
      id: "03",
      title: "Nordic Data Center",
      location: "Luleå, SE",
      year: "2022",
      description:
        "Seismic-resistant steel frame for a hyperscale data center. The structure uses moment-resisting connections and viscous dampers to protect critical server infrastructure from tectonic events.",
      image: null,
    },
    {
      id: "04",
      title: "Malmö Concert Hall",
      location: "Malmö, SE",
      year: "2021",
      description:
        "Long-span roof trusses for a 2,000-seat concert venue. The exposed steel ceiling creates both acoustic diffusion and a dramatic visual statement for performers and audiences.",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal font-body text-zinc-400 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <span className="block text-copper font-medium mb-4 uppercase tracking-widest text-xs">
          Portfolio
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-zinc-100 font-medium leading-tight text-balance mb-16">
          Selected works.
        </h1>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {project.image ? (
                <div className="md:col-span-7">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full aspect-[16/10] object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="md:col-span-7 aspect-[16/10] bg-zinc-900 rounded-xl flex items-center justify-center">
                  <span className="text-xs uppercase tracking-widest text-zinc-600">
                    Project Image
                  </span>
                </div>
              )}
              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-zinc-500">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600" />
                  <span>{project.year}</span>
                </div>
                <h2 className="font-display text-3xl text-zinc-100 font-medium">
                  {project.title}
                </h2>
                <p className="text-base leading-relaxed text-pretty">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
