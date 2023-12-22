// Injecting iframe inside Iframe4
const host9 = document.querySelector("#iframe9");
const shadow4 = host9.attachShadow();
const iframe14 = document.createElement("iframe");
iframe14.src = "https://hbomax.com/";
iframe14.title = "IFRAME14";
const div14 = document.createElement("div");
div14.textContent = "This is the fourteenth iframe (inside ninth iframe)";
iframe14.append(div14);

const iframe15 = document.createElement("iframe");
iframe15.src = "https://hbomax.com/";
iframe15.title = "IFRAME15";
const div15 = document.createElement("div");
div15.textContent = "This is the fifteenth iframe (inside fourteenth iframe)";
iframe15.append(div15);
iframe14.append(iframe15)

shadow4.appendChild(iframe14);