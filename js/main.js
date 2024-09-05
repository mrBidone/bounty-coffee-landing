function setUpMenu() {
  const windowWidth = window.innerWidth;

  removeEventListeners();

  if (windowWidth > 768) {
    const googleLink = document.getElementById("google-maps-link");
    const yandexLink = document.getElementById("yandex-maps-link");

    googleLink.addEventListener("mouseenter", function () {
      showSubmenu("google-maps-submenu", "google-arrow");
    });
    googleLink.addEventListener("mouseleave", function () {
      hideSubmenu("google-maps-submenu", "google-arrow");
    });

    yandexLink.addEventListener("mouseenter", function () {
      showSubmenu("yandex-maps-submenu", "yandex-arrow");
    });
    yandexLink.addEventListener("mouseleave", function () {
      hideSubmenu("yandex-maps-submenu", "yandex-arrow");
    });
  } else {
    const googleLink = document.getElementById("google-maps-link");
    const yandexLink = document.getElementById("yandex-maps-link");

    googleLink.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSubmenu("google-maps-submenu", "google-arrow");
    });

    yandexLink.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSubmenu("yandex-maps-submenu", "yandex-arrow");
    });
  }
}

function removeEventListeners() {
  const googleLink = document.getElementById("google-maps-link");
  const yandexLink = document.getElementById("yandex-maps-link");

  googleLink.replaceWith(googleLink.cloneNode(true));
  yandexLink.replaceWith(yandexLink.cloneNode(true));
}

function showSubmenu(submenuId, arrowId) {
  const submenu = document.getElementById(submenuId);
  const arrow = document.getElementById(arrowId);

  submenu.style.maxHeight = submenu.scrollHeight + "px";
  arrow.classList.remove("arrow-right");
  arrow.classList.add("arrow-down");
}

function hideSubmenu(submenuId, arrowId) {
  const submenu = document.getElementById(submenuId);
  const arrow = document.getElementById(arrowId);

  submenu.style.maxHeight = null;
  arrow.classList.remove("arrow-down");
  arrow.classList.add("arrow-right");
}

function toggleSubmenu(submenuId, arrowId) {
  const submenu = document.getElementById(submenuId);
  const arrow = document.getElementById(arrowId);

  if (submenu.style.maxHeight) {
    submenu.style.maxHeight = null;
    arrow.classList.remove("arrow-down");
    arrow.classList.add("arrow-right");
  } else {
    submenu.style.maxHeight = submenu.scrollHeight + "px";
    arrow.classList.remove("arrow-right");
    arrow.classList.add("arrow-down");
  }
}

window.addEventListener("load", setUpMenu);

window.addEventListener("resize", setUpMenu);
