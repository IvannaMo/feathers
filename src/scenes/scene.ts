import { GameApplication } from "../core/game-application";
import { Container } from "pixi.js";


abstract class Scene {
  protected _app: GameApplication;
  protected _container = new Container();

  get container() {
    return this._container;
  }

  abstract create(): void;
  protected abstract resize(): void;
  abstract destroy(): void;
}

export { Scene };