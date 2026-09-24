import { expect, test } from "bun:test";

test("library includes the Interactive 3D Anatomy Explorer card and external destination", async () => {
  const page = await Bun.file("public/library/index.html").text();

  expect(page).toContain("Interactieve 3D Anatomie Verkenner");
  expect(page).toContain("https://d-body-viewer.lovable.app");
});
