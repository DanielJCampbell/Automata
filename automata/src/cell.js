class Cell {
  constructor(row, col, state) {
    this.row = row;
    this.col = col;
    this.state = state;
    this.neighbours = {};
  }

  initNeighbours(grid) {
    Object.entries(grid.config.neighbourRules).forEach(entry => {
      let stateName = entry[0];
      let rules = entry[1];

      this.neighbours[stateName] = rules.neighboursForCell(this.row, this.col, grid);
    });
  };

  render(canvas, viewport, colorMap) {
    //TODO;
  }
};

export { Cell };
