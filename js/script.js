function showSidebar() {
  const sidebar = document.querySelector(".mobile-menu ul");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    document.querySelector(".mobileMenuIcon img").src = "./assets/images/icons/menu.svg";
    document.querySelector(".mobile-menu").classList.toggle("display");
  } else {
    sidebar.classList.add("open");
    document.querySelector(".mobileMenuIcon img").src = "./assets/images/icons/close.svg";
    document.querySelector(".mobile-menu").classList.toggle("display");
    document.querySelector(".mobile-menu ul").style.left = "-100%";

    setTimeout(() => {
      document.querySelector(".mobile-menu ul").style.left = "0";
    }, "0");
  }
}
function showSidebar2() {
  const sidebar = document.querySelector(".mobile-menu ul");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    document.querySelector(".mobileMenuIcon img").src = "../assets/images/icons/menu.svg";
    document.querySelector(".mobile-menu").classList.toggle("display");
  } else {
    sidebar.classList.add("open");
    document.querySelector(".mobileMenuIcon img").src = "../assets/images/icons/close.svg";
    document.querySelector(".mobile-menu").classList.toggle("display");
    document.querySelector(".mobile-menu ul").style.left = "-100%";

    setTimeout(() => {
      document.querySelector(".mobile-menu ul").style.left = "0";
    }, "0");
  }
}
function showSidebar3() {
  const sidebar = document.querySelector(".mobile-menu ul");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    document.querySelector(".mobileMenuIcon img").src = "../../assets/images/icons/menu.svg";
    document.querySelector(".mobile-menu").classList.toggle("display");
  } else {
    sidebar.classList.add("open");
    document.querySelector(".mobileMenuIcon img").src = "../../assets/images/icons/close.svg";
    document.querySelector(".mobile-menu").classList.toggle("display");
    document.querySelector(".mobile-menu ul").style.left = "-100%";

    setTimeout(() => {
      document.querySelector(".mobile-menu ul").style.left = "0";
    }, "0");
  }
}

// function showSidebar2() {
//   const sidebar = document.querySelector(".navbar ul");
//   if (sidebar.classList.contains("open")) {
//     sidebar.classList.remove("open");
//     document.querySelector(".menuIcon img").src = "../assets/images/icons/menu.svg";
//   } else {
//     sidebar.classList.add("open");
//     document.querySelector(".menuIcon img").src = "../assets/images/icons/close.svg";
//   }
// }

// function showSidebar3() {
//   const sidebar = document.querySelector(".navbar ul");
//   if (sidebar.classList.contains("open")) {
//     sidebar.classList.remove("open");
//     document.querySelector(".menuIcon img").src = "../../assets/images/icons/menu.svg";
//   } else {
//     sidebar.classList.add("open");
//     document.querySelector(".menuIcon img").src = "../../assets/images/icons/close.svg";
//   }
// }

document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("buttonFocusMobile").focus();
});
