document.addEventListener("DOMContentLoaded", () => {
  const includeHTMLs = () => {
    const all = document.getElementsByTagName("*");

    for (let i = 0, len = all.length; i < len; i++) {
      const element = all[i];
      const html = element.getAttribute("include-html");

      if (html) {
        element.removeAttribute("include-html");

        fetch(html)
          .then(res => res.text())
          .then(content => {
            element.innerHTML = content;
            includeHTMLs();
          })
          .catch(error => {
            console.log(error);
            element.innerHTML = "Element not found";
          });
      }
    }
  }

  includeHTMLs();
});