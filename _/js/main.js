const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

document.body.append(header, main, footer);

const list = document.createElement("ol");
main.append(list);

fetch("./_/js/challenges.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load challenges (${response.status}).`);
    }
    return response.json();
  })
  .then((challenges) => {
    for (const challenge of challenges) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `./${encodeURIComponent(challenge.number)}/`;
      link.textContent = `Challenge ${challenge.number}: ${challenge.title}`;
      item.append(link);
      list.append(item);
    }
  })
  .catch((error) => {
    console.error("Unable to load challenges:", error);
  });

console.log("@jcnccsr");
console.log("Codes for days.");