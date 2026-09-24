import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visuele Atlas Menselijke Anatomie" },
      {
        name: "description",
        content: "Een digitale bibliotheek met geïllustreerde anatomiegidsen en studiemateriaal.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#0b0e14]">
      <iframe
        className="block min-h-screen w-full border-0"
        src="/library/index.html"
        title="Visuele Atlas Menselijke Anatomie"
      />
    </main>
  );
}
