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
  0: "bg-green-50",
  1: "bg-green-200",
  2: "bg-green-400",
  3: "bg-green-600",
  4: "bg-green-800"
};

const weeksContainer = document.getElementById("weeks") as HTMLDivElement;
const contributionsCount = document.getElementById(
  "contributionsCount"
) as HTMLSpanElement;

(async () => {
  const res = fetch(
    "https://github-contributions-api.jogruber.de/v4/eidriahn?y=last"
  );

  const text = await (await res).text();
  const { contributions, total }: NestedResponse = JSON.parse(text);

  let days = 0;
  let week = 0;
  let weeksHTML = `<div id="week-${0}">`;
  let daysHTML = "";

  for (let i = 0; i < contributions.length; i++) {
    const { level, count, date } = contributions[i];
    daysHTML += `<div class="w-4 h-4 rounded mb-2 ${colors[level]} group relative"><span class="group-hover:block text-nowrap hidden absolute -translate-x-1/2 -translate-y-3/4 text-gray-900 px-3 py-1 bg-slate-200 z-10   rounded">${count} contributions on ${date}</span></div>`;
    days += 1;

    if (days === 7) {
      week += 1;
      days = 0;
      weeksHTML += daysHTML + `</div><div id="week-${week}">`;
      daysHTML = "";
    }
  }

  if (days > 0) {
    weeksHTML += daysHTML + `</div>`;
  }

  weeksContainer.innerHTML = weeksHTML;
  contributionsCount.innerHTML = `${total.lastYear} contributions in the last year`;
})();
