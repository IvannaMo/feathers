import { GameApplication } from "./core/game-application";
import { MainMenuScene } from "./scenes/main-menu";


(async () => {
  const app = new GameApplication();
  await app.init();

  const mainMenuScene = new MainMenuScene(app);
  app.setScene(mainMenuScene);
})();