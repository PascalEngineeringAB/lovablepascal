import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pascal Engineering" },
      { name: "description", content: "Get in touch with Pascal Engineering for structural design consultancy, peer review, and advanced steel engineering services." },
      { property: "og:title", content: "Contact — Pascal Engineering" },
      { property: "og:description", content: "Get in touch with Pascal Engineering for structural design consultancy, peer review, and advanced steel engineering services." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-charcoal font-body text-zinc-400 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <span className="block text-copper font-medium mb-4 uppercase tracking-widest text-xs">
          Get in Touch
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-zinc-100 font-medium leading-tight text-balance mb-16">
          Contact us.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex items-start gap-4">
              <div className="p-2 ring-1 ring-zinc-700 bg-zinc-800/50 mt-1">
                <Mail className="size-5 text-copper" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-500 block mb-1">
                  Email
                </span>
                <a
                  href="mailto:info@pascalengineering.se"
                  className="text-zinc-100 text-lg hover:text-copper transition-colors"
                >
                  info@pascalengineering.se
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 ring-1 ring-zinc-700 bg-zinc-800/50 mt-1">
                <Phone className="size-5 text-copper" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-500 block mb-1">
                  Phone
                </span>
                <a
                  href="tel:+4681234567"
                  className="text-zinc-100 text-lg hover:text-copper transition-colors"
                >
                  +46 8 123 45 67
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 ring-1 ring-zinc-700 bg-zinc-800/50 mt-1">
                <MapPin className="size-5 text-copper" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-500 block mb-1">
                  Headquarters
                </span>
                <p className="text-zinc-100 text-lg">
                  Stureplan 4C, 3rd Floor
                  <br />
                  114 35 Stockholm, Sweden
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 p-8 md:p-10 border border-zinc-800/50 rounded-xl">
            <h2 className="font-display text-2xl text-zinc-100 font-medium mb-2">
              Send an inquiry
            </h2>
            <p className="text-sm text-zinc-500 mb-8">
              Tell us about your project and we will respond within two business
              days.
            </p>
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-charcoal border border-zinc-800/50 px-4 py-3 text-zinc-100 text-sm focus:outline-none focus:border-copper transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-charcoal border border-zinc-800/50 px-4 py-3 text-zinc-100 text-sm focus:outline-none focus:border-copper transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="bg-charcoal border border-zinc-800/50 px-4 py-3 text-zinc-100 text-sm focus:outline-none focus:border-copper transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-copper text-zinc-100 font-medium text-sm transition-all hover:bg-copper/90 ring-1 ring-copper/50"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
