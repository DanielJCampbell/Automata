import { Grid } from "./grid";
import { Config } from "./config";

class Automata {
  constructor(grid, config) {
    this.grid = grid;
    this.config = config;

    this.currentWidth = grid.width;
    this.currentHeight = grid.height;
    this.generation = 0;
  };

  static initDefault(config) {
    return new Automata(Grid.initDefault(config), config);
  };

  process() {
    this.grid.process();
    this.generation += 1;
  };

  render(canvas, viewport) {
    this.grid.render(canvas, viewport);
    //TODO: Render other useful information, like the current generation
  };
};

export { Automata };
