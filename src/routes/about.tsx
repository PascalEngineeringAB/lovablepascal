import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Pascal Engineering" },
      { name: "description", content: "Pascal Engineering is a Swedish structural consultancy specializing in advanced steel design for landmark architecture." },
      { property: "og:title", content: "About Us — Pascal Engineering" },
      { property: "og:description", content: "Pascal Engineering is a Swedish structural consultancy specializing in advanced steel design for landmark architecture." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal font-body text-zinc-400 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <span className="block text-copper font-medium mb-4 uppercase tracking-widest text-xs">
          Our Story
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-zinc-100 font-medium leading-tight text-balance mb-16">
          About Pascal Engineering.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-pretty">
              Founded in Stockholm, Pascal Engineering has grown from a small
              structural design studio into one of Sweden's most respected
              consultancies for advanced steel structures. We believe that every
              building begins with an honest understanding of forces — and ends
              with architecture that inspires.
            </p>
            <p className="text-lg leading-relaxed text-pretty">
              Our team of structural engineers, computational designers, and
              facade specialists work collaboratively from concept through
              construction. We do not simply calculate loads; we shape the
              structural logic that makes bold architecture possible.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-pretty">
              Over the past decade, we have delivered the structural backbone
              for airports, concert halls, data centers, and high-rise towers
              across Scandinavia. Each project reinforces our conviction that
              precision engineering is the invisible art form behind every
              memorable building.
            </p>
            <p className="text-lg leading-relaxed text-pretty">
              We are certified to ISO 9001 and work in compliance with Swedish
              building codes, Eurocode standards, and the most demanding
              international structural guidelines.
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-16">
          <span className="block text-copper font-medium mb-8 uppercase tracking-widest text-xs">
            Core Values
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <ValueCard
              title="Precision"
              description="Every calculation verified. Every connection detailed. Zero tolerance for approximation."
            />
            <ValueCard
              title="Innovation"
              description="We embrace computational tools and new materials to solve problems that were considered impossible a decade ago."
            />
            <ValueCard
              title="Collaboration"
              description="Structural engineering is a team sport. We integrate with architects, contractors, and fabricators from day one."
            />
            <ValueCard
              title="Durability"
              description="We design for the lifespan of the building, not just the deadline of the project."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-zinc-100 text-xl font-medium">{title}</h3>
      <p className="text-sm leading-relaxed text-pretty">{description}</p>
    </div>
  );
}
