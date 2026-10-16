gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pin-section",
    start: "top top",
    end: "+=3000", // Controla qué tan largo es el scroll para esta sección
    pin: true,     // Mantiene la sección fija mientras ocurre la animación
    scrub: true,   // Sincroniza la animación directamente con el movimiento del scroll
    markers: false // Ponlo en true si necesitas depurar los puntos de inicio/fin
  }
});

// Animación para transicionar entre los pasos
tl.to(".step:nth-child(1)", { opacity: 0, duration: 1 })
  .fromTo(".step:nth-child(2)", { opacity: 0 }, { opacity: 1, duration: 1 });