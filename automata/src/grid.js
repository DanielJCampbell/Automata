import { Cell } from "./cell"

class Grid {
  constructor(width, height, config) {
    this.width = width;
    this.height = height;
    this.config = config;
    this.cells = [];

    this.initCells();
  };

  static initDefault(config) {
    return new Grid(Grid.defaultWidth, Grid.defaultHeight, config);
  };

  initCells() {
    for (let row = 0; row < this.height; row++) {
      this.cells.push([]);

      for (let col = 0; col < this.width; col++) {
        this.cells[row].push(new Cell(row, col, this.config.defaultState));
      }
    }
    this.config.initNeighbours(this);
  };

  render(canvas, viewport) {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        this.cells[row][col].render(canvas, viewport, config.stateColors);
      }
    }
  };

  process() {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        config.process(this.cells[row][col]);
      }
    }
  };
};

Grid.defaultWidth = 50;
Grid.defaultHeight = 50;

export { Grid };
