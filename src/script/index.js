function toggleDrawer(isActive = false) {
  const drawer = document.getElementById("drawer-box");
  document.addEventListener("click", (e) => {
    if (e.target.id == "list-btn" || e.target?.parentNode.id == "list-btn") {
      drawer.classList.add("active");
    } else {
      drawer.classList.remove("active");
    }
  });

  /* Running code
  const listBtn = document.getElementById("list-btn");
  const drawer = document.getElementById("drawer-box");
  listBtn.addEventListener("click", (e) => {
    // Open drawer
    drawer.classList.add("active");
  });

  if (isActive) {
    drawer.classList.remove("active");
  }
    */
}

function main() {
  toggleDrawer(false);
}

(() => {
  main();
})();
