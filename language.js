(function () {
  const supported = ["en", "vi"];
  const saved = window.localStorage.getItem("shiftlog-language");
  const browser = navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
  const initial = supported.includes(saved) ? saved : browser;

  function setLanguage(language) {
    const selected = supported.includes(language) ? language : "en";

    document.documentElement.lang = selected;
    document.querySelectorAll("[data-en][data-vi]").forEach((element) => {
      element.textContent = element.dataset[selected];
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === selected;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    window.localStorage.setItem("shiftlog-language", selected);
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  setLanguage(initial);
})();
