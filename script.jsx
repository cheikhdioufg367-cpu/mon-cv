// =========================
// CV INTERACTIF
// =========================

window.onload = function () {

    // Message de bienvenue
    alert("👋 Bienvenue sur le CV de Cheikh Sadibou Coly Diouf");

    // Animation des sections
    let items = document.querySelectorAll(".item");

    items.forEach(function(item, index) {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";

        setTimeout(function() {
            item.style.transition = "all 0.8s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 300);

    });

    // Animation des centres d'intérêt
    let interests = document.querySelectorAll(".interest-box");

    interests.forEach(function(box) {

        box.addEventListener("mouseover", function() {
            box.style.transform = "scale(1.1)";
            box.style.transition = "0.3s";
        });

        box.addEventListener("mouseout", function() {
            box.style.transform = "scale(1)";
        });

    });

   
    const bouton = document.getElementById("back-to-top");
}
// Sélection du bouton
const themeButton = document.getElementById("theme-toggle");

// Au clic sur le bouton
themeButton.addEventListener("click", function () {

    // Si le mode sombre est déjà activé
    if (document.documentElement.getAttribute("data-theme") === "dark") {

        // Retour au mode clair
        document.documentElement.removeAttribute("data-theme");
        themeButton.textContent = "🌙 Mode sombre";

    } else {

        // Activation du mode sombre
        document.documentElement.setAttribute("data-theme", "dark");
        themeButton.textContent = "☀️ Mode clair";

    }

});