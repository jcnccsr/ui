const header = document.createElement("header");
const main   = document.createElement("main");
const footer = document.createElement("footer");
document.body.append(header, main, footer);

// <header>

// <main
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
h1.textContent = "Sign Up";
h2.textContent = "Don't Panic";
main.append(h1, h2);

// <footer>
const p    = document.createElement("p");
const cp   = document.createElement("span");
const ans  = document.createElement("span");
const link = document.createElement("a");
link.href = "https://www.jccesar.com";
link.textContent = "@jcnccsr";
cp.textContent = "\u00A9";
ans.textContent = new Date().getFullYear();
p.append(cp, " ", ans, " ", link, ". All rights reversed.");
footer.append(p);

console.log("@jcnccsr");
console.log("Codes for days.");