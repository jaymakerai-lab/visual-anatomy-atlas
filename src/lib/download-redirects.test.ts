import { describe, expect, test } from "bun:test";

import { releaseDownloadForPath } from "./download-redirects";

describe("releaseDownloadForPath", () => {
  test("maps the atlas PDF to its release asset", () => {
    expect(releaseDownloadForPath("/library/files/Visuele Atlas Menselijke Anatomie.pdf")).toBe(
      "https://github.com/jaymakerai-lab/visual-anatomy-atlas/releases/download/v1.0.0/Visuele.Atlas.Menselijke.Anatomie.pdf",
    );
  });

  test("maps the full library archive from the nested static page", () => {
    expect(releaseDownloadForPath("/library/materials.zip")).toBe(
      "https://github.com/jaymakerai-lab/visual-anatomy-atlas/releases/download/v1.0.0/materials.zip",
    );
  });

  test("does not redirect unrelated paths", () => {
    expect(releaseDownloadForPath("/library/unknown.pdf")).toBeUndefined();
  });
});
