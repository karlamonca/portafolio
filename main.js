let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #3e6b4a;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #11d452;">Creo páginas web y hago contenido de programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
