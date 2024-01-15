import AttrI18n from "attr-i18n";
import { i18n } from "./i18n";
import { LogIn } from "lucide";

type Level = 0 | 1 | 2 | 3 | 4;

interface NestedResponse {
  total: {
    lastYear: number;
  };
  contributions: {
    date: string;
    count: number;
    level: Level;
  }[];
}

const colors = {
  0: "#f0fdf4",
  1: "#bbf7d0",
  2: "#4ade80",
  3: "#16a34a",
  4: "#14532d"
};

export const contributionsTranslations = {
  English: "contributions in the last year",
  Italian: "contributi nell'ultimo anno",
  Russian: "взносов за последний год",
  Romanian: "contribuții în ultimul an"
};
export let totalContributions = 0;
const canvas = document.getElementById("weeks") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

(async () => {
  if (!ctx) {
    return;
  }

  const res = fetch(
    "https://github-contributions-api.jogruber.de/v4/eidriahn?y=last"
  );

  const text = await (await res).text();
  const { contributions }: NestedResponse = JSON.parse(text);
  canvas.width = 20 * Math.floor(contributions.length / 7) + 20;

  let y = 0;
  let x = 0;

  for (let i = 1; i < contributions.length + 1; i++) {
    const { level } = contributions[i - 1];
    ctx.fillStyle = colors[level];
    ctx.fillRect(x, y, 15, 15);

    y += 20;

    if (i % 7 === 0) {
      x += 20;
      y = 0;
    }
  }
})();
