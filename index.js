// Ajouter une bg au navbar lors de depasse la section suivante--------------------------
const navbar = document.getElementById("navbar");
      const hero = document.getElementById("hero");

      window.addEventListener("scroll", () => {
        // Récupérer la hauteur de la section hero
        const heroHeight = hero.offsetHeight;

        // Vérifier si l'utilisateur a scrollé de 90% de la hauteur de la section hero ou si la largeur de l'écran est plus grande que 640px
        if (window.scrollY > heroHeight * 0.9) {
          // Appliquer les classes seulement si l'écran est grand (et retirer rounded-full pour les grands écrans)
          navbar.classList.add("bg-black", "bg-opacity-90", "shadow-lg");
        } else {
          // Retirer toutes les classes lorsqu'on est en haut de la page
          navbar.classList.remove("bg-black", "bg-opacity-90", "shadow-lg");
          // Appliquer rounded-full seulement sur les petits écrans
          if (window.innerWidth < 640) {
            navbar.classList.add("rounded-full");
          }
        }
      });
// Fin d'Ajouter une bg au navbar lors de depasse la section suivante--------------------------
