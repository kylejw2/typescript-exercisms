export class ResistorColor {
  private SEQUENCE: readonly string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  private colors: string[];
  private numString: string;

  constructor(colors: string[]) {
    if (colors.length < 2) {throw new Error("At least two colors need to be present")}
    this.colors = colors;
    this.numString = "";
    for (let i = 0; i < 2; i++) {
      this.numString += this.SEQUENCE.findIndex(color => color === this.colors[i])
    }

  }
  value = (): number => +this.numString;
}
