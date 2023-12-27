document.addEventListener("DOMContentLoaded", function() {
    // Create the outer iframe
    const outerIframe = document.createElement("iframe");
    outerIframe.src = "outer-frame.html";
    outerIframe.width = "600";
    outerIframe.height = "400";
    outerIframe.title = "Another Outer Frame";

    // Append the outer iframe to the body
    document.body.appendChild(outerIframe);

    // Create the inner iframe
    const innerIframe = document.createElement("iframe");
    innerIframe.src = "inner-frame.html";
    innerIframe.width = "400";
    innerIframe.height = "200";
    innerIframe.title = "Shadow Inner Frame";

    // Append the inner iframe to the outer iframe
    // outerIframe.contentDocument.body.appendChild(innerIframe);
    const shadow = outerIframe.attachShadow();
    shadow.appendChild(innerIframe);
});
