function toggleDrawer(isActive = false) {
  const listBtn = document.getElementById("list-btn");
  const drawer = document.getElementById("drawer-box");
  listBtn.addEventListener("click", (e) => {
    // Open drawer
    drawer.classList.add("active");
  });

  if (isActive) {
    drawer.classList.remove("active");
  }
}

function main() {
  toggleDrawer(false);

  const closeDrawer = document.getElementsByClassName("close-drawer")[0];
  closeDrawer.addEventListener("click", () => {
    toggleDrawer(true);
  });
}

(() => {
  main();
})();
