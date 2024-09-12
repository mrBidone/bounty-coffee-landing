function setUpMenu() {
  const windowWidth = window.innerWidth;

  removeEventListeners();

  if (windowWidth > 768) {
    const googleLink = document.getElementById("google-maps-link");
    const yandexLink = document.getElementById("yandex-maps-link");

    googleLink.addEventListener("mouseenter", function () {
      showSubmenu("google-maps-submenu");
    });
    googleLink.addEventListener("mouseleave", function () {
      hideSubmenu("google-maps-submenu");
    });

    yandexLink.addEventListener("mouseenter", function () {
      showSubmenu("yandex-maps-submenu");
    });
    yandexLink.addEventListener("mouseleave", function () {
      hideSubmenu("yandex-maps-submenu");
    });
  } else {
    const googleLink = document.getElementById("google-maps-link");
    const yandexLink = document.getElementById("yandex-maps-link");

    googleLink.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSubmenu("google-maps-submenu");
    });

    yandexLink.addEventListener("click", function (event) {
      event.preventDefault();
      toggleSubmenu("yandex-maps-submenu");
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

  submenu.style.maxHeight = submenu.scrollHeight + "px";
}

function hideSubmenu(submenuId, arrowId) {
  const submenu = document.getElementById(submenuId);

  submenu.style.maxHeight = null;
}

function toggleSubmenu(submenuId, arrowId) {
  const submenu = document.getElementById(submenuId);

  if (submenu.style.maxHeight) {
    submenu.style.maxHeight = null;
  } else {
    submenu.style.maxHeight = submenu.scrollHeight + "px";
  }
}

window.addEventListener("load", setUpMenu);

window.addEventListener("resize", setUpMenu);
