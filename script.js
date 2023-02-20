particlesJS("particles-js", {
  particles: {
    number: { value: 400, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 5, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 881.3255135724136,
      color: "#000000",
      opacity: 0.6169278595006895,
      width: 2
    },
    move: {
      enable: true,
      speed: 9,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: {
        distance: 347.65234765234766,
        size: 11.988011988011989,
        duration: 0,
        opacity: 0,
        speed: 3
      },
      repulse: { distance: 271.72827172827175, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
//-----------------------------------------------------------------------------------------------------------------------------//


//-----------------------------------------------------------------------------------------------------------------------------//
document.addEventListener("DOMContentLoaded", function () {

  data.forEach(function afficheAnalogie(resultat) {
    document.querySelector('#list-analogies').innerHTML += "<section class=\"section\"><div class=\"card\" style=background-image:url(" + resultat.img + ")> <div class=\"info\" id= " + resultat.id + "><h1 class=\"title\">" + resultat.analogies + "</h1><p class=\"description\">" + resultat.valeursAnalogies + "" + resultat.justification + "</p></div> </div></section>"
  })

  //création d'une section quand on clique sur un button 
  document.querySelector('#envoi').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#toi').innerHTML += "<section class=\"section\"><div class=\"card\" style=background-image:url(" + document.querySelector("#imganalogie").value + ")><div class=\"info\"><h1 class=\"title\">Si j'étais " + document.querySelector("#analogies").value + "</h1><p class=\"description\">Je serais "+ document.querySelector("#valeurAnalogies").value +","+ document.querySelector("#arganalogie").value +"</p></div></div></section>";

    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=alvin.mirenda&courriel=" + document.querySelector("#courriel").value + "&message=Si j'étais " + document.querySelector("#analogies").value + ",je serais " + document.querySelector("#valeurAnalogies").value +"Parce que" + document.querySelector("#arganalogie").value ).then(function (response) {
      response.json().then(function (data) {
        if (data.status == "success") {
          document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
        } else {
          document.querySelector("#message").innerHTML = "Problème : votre message n'a pas été reçu";
        }
      })
    })
  });


  //-----------------------------------------------------------------------------------------------------------------------------//

  // TP7 Q4 Détection du clic sur le bouton d'envoi du formulaire

  // TP7 Q6 Envoi des données à l'API à l'adresse ci-de
  // TP6 Q2 
  //  document.querySelector("#analogies").value
  // // TP6 Q3 et Q4 Détection qu'une touche du clavier a été relâchée sur le champ analogie
  // document.querySelector("#analogies").addEventListener('keyup', function (e) {
  //   console.log("Champ analogies modifié");
  //   // TP6 Q5 Remplissage de la phrase de l'analogie suggérée
  //   document.querySelector("#analogieSuggeree").innerHTML = document.querySelector("#analogies").value;
  // })

  // // document.querySelector("#valeurAnalogies").addEventListener('keyup', function (e) {
  // //   console.log("Champ valeurAnalogie modifié");
  // //   // TP6 Q5 Remplissage de la phrase de l'analogie suggérée
  // //   document.querySelector("#valeurAnalogieSuggeree").innerHTML = document.querySelector("#valeurAnalogies").value;
  // // })

  // document.querySelector("#arganalogie").addEventListener('keyup', function (e) {
  //   console.log("Champ analogies modifié");
  //   // TP6 Q5 Remplissage de la phrase de l'analogie suggérée
  //   document.querySelector("#arganalogieSuggeree").innerHTML = document.querySelector("#arganalogie").value;
  // }) 

  // // Q3 Afficher le tableau analogies dans la console



  //-----------------------------------------------------------------------------------------------------------------------------//
});
src = "https://kit.fontawesome.com/628c8d2499.js"; crossorigin = "anonymous";