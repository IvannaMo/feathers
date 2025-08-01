import { Scene } from "./scene";
import { GameApplication } from "../core/game-application";
import { Assets, Sprite } from "pixi.js";
import { createMainMenuUI } from "../ui/main-menu-ui";
import { JoinGameScene } from "./join-game";
import { CreateGameScene } from "./create-game";
import { ProfileScene } from "./profile";
import { SettingsScene } from "./settings";
import { AboutScene } from "./about";


class MainMenuScene extends Scene {
  private _logo!: Sprite;
  private _background!: Sprite;

  constructor(app: GameApplication) {
    super();

    this._app = app;
    this._app.stage.addChild(this._container);

    this.create();
    createMainMenuUI(this.handleNavigation.bind(this));
  }

  async create() {
    const backgroundTexture = await Assets.load("/src/assets/images/main-menu-background.jpg");
    this._background = new Sprite(backgroundTexture);
    this._background.anchor.set(0.5);

    const logoTexture = await Assets.load("/src/assets/logo.png");
    this._logo = new Sprite(logoTexture);

    this.container.addChildAt(this._background, 0);
    this._container.addChildAt(this._logo, 1);

    this.resize();
    window.addEventListener("resize", this.resize.bind(this));
  }

  protected resize() {
    const { width, height } = this._app.renderer;
    this._app.renderer.resize(width, height);

    if (this._background) {
      const backgroundTextureWidth = this._background.texture.width;
      const backgroundTextureHeight = this._background.texture.height;

      const scale = Math.max(window.innerWidth / backgroundTextureWidth, window.innerHeight / backgroundTextureHeight);

      this._background.scale.set(scale);
      this._background.x = window.innerWidth / 2;
      this._background.y = window.innerHeight / 2;
    }

    if (this._logo) {
      const logoMaxWidth = 0.48 * window.innerWidth;
      const logoMaxHeight = 0.2 * window.innerHeight;
      const logoTextureWidth = this._logo.texture.width;
      const logoTextureHeight = this._logo.texture.height;

      const scale = Math.min(logoMaxWidth / logoTextureWidth, logoMaxHeight / logoTextureHeight);

      this._logo.scale.set(scale);
      this._logo.x = 0.1 * window.innerWidth;
      this._logo.y = 0.15 * window.innerHeight;
    }
  }

  private handleNavigation(label: string) {
    this.destroy();

    switch (label) {
      case "Join Game":
        this._app.setScene(new JoinGameScene(this._app));
        break;
      case "Create Game":
        this._app.setScene(new CreateGameScene(this._app));
        break;
      case "Profile":
        this._app.setScene(new ProfileScene(this._app));
        break;
      case "Settings":
        this._app.setScene(new SettingsScene(this._app));
        break;
      case "About":
        this._app.setScene(new AboutScene(this._app));
        break;
    }
  }

  destroy() {
    document.getElementById("main-menu-ui")?.remove();
    window.removeEventListener("resize", this.resize);
    this._container.destroy({ children: true });
  }
}

export { MainMenuScene };