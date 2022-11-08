const THEME_BUTTONS = {
    light: document.querySelectorAll('[theme="light"]'),
    dark: document.querySelectorAll('[theme="dark"'),
};

const NAV_BUTTON = document.querySelector(".navbar-button");
const NAVBAR = document.querySelector(".navbar");

NAV_BUTTON.addEventListener("click", () => {
    NAV_BUTTON.toggleAttribute("open");
});

THEME_BUTTONS.light.forEach((ele) => {
    ele.addEventListener("click", () => {
        document.querySelector("body").classList.replace("dark", "light");
    });
});
THEME_BUTTONS.dark.forEach((ele) => {
    ele.addEventListener("click", () => {
        document.querySelector("body").classList.replace("light", "dark");
    });
});