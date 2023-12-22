// Injecting iframe inside Iframe7
const host7 = document.querySelector("#iframe7");
const shadow1 = host7.attachShadow({ mode: "open" });
const iframe10 = document.createElement("iframe");
iframe10.src = "https://godaddy.com/";
iframe10.title = "IFRAME10";
const div10 = document.createElement("div");
div10.textContent = "This is the tenth iframe (inside seventh iframe)";
iframe10.append(div10);
shadow.appendChild(iframe10);

const shadow2 = host7.attachShadow({ mode: "closed" });
const iframe11 = document.createElement("iframe");
iframe11.src = "https://newyorker.com/";
iframe11.title = "IFRAME11";
const div11 = document.createElement("div");
div11.textContent = "This is the eleventh iframe (inside seventh iframe)";
iframe11.append(div11);
shadow.appendChild(iframe11);


// Injecting iframe inline with the body
const host = document.querySelector("body");
const shadow = host.attachShadow();
const iframe12 = document.createElement("iframe");
iframe12.src = "https://fern.com/";
iframe12.title = "IFRAME12";
const div10 = document.createElement("div");
div12.textContent = "This is the twelfth iframe (inside body)";
iframe12.append(div12);
shadow.appendChild(iframe12);


// Injecting iframe inside Iframe4
const host4 = document.querySelector("#iframe4");
const shadow3 = host4.attachShadow({ mode: "open" });
const iframe13 = document.createElement("iframe");
iframe13.src = "https://hbomax.com/";
iframe13.title = "IFRAME13";
const div13 = document.createElement("div");
div13.textContent = "This is the thirteenth iframe (inside fourth iframe)";
iframe13.append(div13);
shadow3.appendChild(iframe13);