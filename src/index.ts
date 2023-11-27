import { SceneController } from './SceneController';
import { ObjectController } from './ObjectController';
import { ModalController } from './ModalController';

class App {
  private sceneController: SceneController;
  private objectController: ObjectController;
  // private modalController: ModalController;

  constructor() {
    this.sceneController = new SceneController();
    this.objectController = new ObjectController();
    // this.modalController = new ModalController()
  }
}

new App();
