import { Application } from "pixi.js";


(async () => {
  const app = new Application();

  await app.init({ resizeTo: window });
  app.canvas.style.position = "absolute";
  app.canvas.style.height = "100%";
  app.canvas.style.width = "100%";

  document.body.appendChild(app.canvas);
})();