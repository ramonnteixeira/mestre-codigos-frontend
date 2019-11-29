new App();

function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.className.length === 0) {
        menu.className += "responsive";
    } else {
        menu.className = "";
    }
}