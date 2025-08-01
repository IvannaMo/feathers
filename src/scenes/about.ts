import { Scene } from "./scene";
import { GameApplication } from "../core/game-application";


class AboutScene extends Scene {
  constructor (app: GameApplication) {
    super();
    
    this._app = app;
    this._app.stage.addChild(this.container);
  
    this.create();
  }
  
  async create() {

  }

  protected resize() {
    
  }

  destroy() {
    this._container.destroy({ children: true });
  }
}

export { AboutScene };