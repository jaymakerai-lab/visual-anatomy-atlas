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

export function releaseDownloadForPath(pathname: string): string | undefined {
  const filename = pathname.split("/").pop();
  if (filename == null) return undefined;

  const assetName = releaseAssets[filename];
  return assetName == null ? undefined : `${RELEASE_BASE_URL}/${assetName}`;
}
