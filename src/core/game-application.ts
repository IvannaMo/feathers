import { Application } from "pixi.js";
import { Scene } from "../scenes/scene";


class GameApplication extends Application {
  private _currentScene?: Scene;

  async init() {
    await super.init({ resizeTo: window });

    this.canvas.style.position = "absolute";
    this.canvas.style.height = "100%";
    this.canvas.style.width = "100%";

    document.body.appendChild(this.canvas);
  }

  setScene(scene: Scene) {
    if (this._currentScene) {
      this._currentScene.destroy();
    }

    this.stage.removeChildren();

    this.stage.addChild(scene.container);
    this._currentScene = scene;
  }
}

export { GameApplication };