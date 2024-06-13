const $sidebar = document.querySelector("#sidebar")
const $showSidebarBtn = document.querySelector("#menu-list")

const showSidebar = () => {
    $sidebar.classList.toggle("hideSidebar")
}

$showSidebarBtn.addEventListener("click",  showSidebar)