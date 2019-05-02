import { NeighbourRules } from "./neighbour_rules";
import { StateRules } from "./state_rules"

class Config {
  constructor(stateNames, stateColors, stateRules, neighbourRules, defaultState) {
    this.stateNames = stateNames;
    this.stateColors = stateColors;
    this.stateRules = stateRules;
    this.neighbourRules = neighbourRules;
    this.defaultState = defaultState;
  }

  // Conways game of life is the default state/rule set
  static initDefault() {
    return new Config(
      ["ON", "OFF"],
      { ON: "black", OFF: "white" },
      StateRules.initDefault(),
      NeighbourRules.initDefault(),
      "OFF"
    );
  };
};

export { Config };
