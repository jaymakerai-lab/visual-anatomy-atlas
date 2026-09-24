const RELEASE_BASE_URL =
  "https://github.com/jaymakerai-lab/visual-anatomy-atlas/releases/download/v1.0.0";

const releaseAssets: Record<string, string> = {
  "Visuele Atlas Menselijke Anatomie.pdf": "Visuele.Atlas.Menselijke.Anatomie.pdf",
  "Wekelijks Studieplan.pdf": "Wekelijks.Studieplan.pdf",
  "80 Extra Oefeningen.pdf": "80.Extra.Oefeningen.pdf",
  "50 Anatomie Flashcards.pdf": "50.Anatomie.Flashcards.pdf",
  "Geïllustreerde Menselijke Fysiologie.pdf": "Geillustreerde.Menselijke.Fysiologie.pdf",
  "materials.zip": "materials.zip",
};

function filenameFromPath(pathname: string): string | undefined {
  return decodeURIComponent(pathname).split("/").pop();
}

export function releaseDownloadForPath(pathname: string): string | undefined {
  const filename = filenameFromPath(pathname);
  if (filename == null) return undefined;

  const assetName = releaseAssets[filename];
  return assetName == null ? undefined : `${RELEASE_BASE_URL}/${assetName}`;
}

export function inlineMediaHeadersForPath(pathname: string): Record<string, string> | undefined {
  const filename = filenameFromPath(pathname);
  if (filename == null) return undefined;

  const assetName = releaseAssets[filename];
  if (assetName == null || !assetName.endsWith(".pdf")) return undefined;

  return {
    "content-disposition": `inline; filename="${assetName}"`,
    "content-type": "application/pdf",
  };
}
