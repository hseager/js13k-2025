import { State } from "@/core/types";
import { drawEngine } from "@/core/draw-engine";
import { controls } from "@/core/controls";
import { gameStateMachine } from "@/game-state-machine";
import { gameState } from "./game.state";

class MenuState implements State {
  private startGame() {
    gameStateMachine.setState(gameState);
  }

  onEnter() {
    c2d.addEventListener("click", this.startGame);
  }

  onUpdate() {
    const xCenter = drawEngine.context.canvas.width / 2;
    drawEngine.drawText("js13k 2025", 60, xCenter, 60);
    drawEngine.drawText("Start Game", 60, xCenter, 500);
    this.updateControls();
  }

  updateControls() {
    if (controls.isConfirm) {
      gameStateMachine.setState(gameState);
    }
  }

  onLeave() {
    c2d.removeEventListener("click", this.startGame);
  }
}

export const menuState = new MenuState();
