document
  .getElementById("google-maps-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleSubmenu("google-maps-submenu", "google-arrow");
  });

document
  .getElementById("yandex-maps-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleSubmenu("yandex-maps-submenu", "yandex-arrow");
  });

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
