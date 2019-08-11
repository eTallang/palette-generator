import { Component } from '@angular/core';
import { HslColor } from './hsl-color';

type ShadeMode = 'monochromatic' | 'triad' | 'complementary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colors: HslColor[] = [
    { hue: 347, saturation: 70, lightness: 62 },
    { hue: 347, saturation: 90, lightness: 86 },
    { hue: 347, saturation: 20, lightness: 58 },
    { hue: 347, saturation: 66, lightness: 92 },
    { hue: 347, saturation: 54, lightness: 13 }
  ];
  mode: ShadeMode = 'monochromatic';

  generatePalette(): void {
    /**
     * TODO: Select hue from a wheel
     */
    const hue = this.randomHue();
    this.colors.forEach((color, index) => this.updateColor(color, index, hue, this.mode));
  }

  private updateColor(color: HslColor, index: number, hue: number, mode: ShadeMode): void {
    switch (mode) {
      case 'monochromatic': {
        /**
         * TODO
         *   - Spread hue based on a factor
         *   - Do not do complete random saturation and lightness.
         *     1. Strong saturation, primary
         *     2. Lighter version of primary
         *     3. Gray scale color
         *     4. Close to white
         *     5. Close to black
         */
        color.hue = hue;
        color.saturation = this.randomPercent();
        color.lightness = this.randomPercent();
        break;
      }
      case 'triad': {
        let hue2: number;
        let hue3: number;
        if (hue < 120) {
          hue2 = hue + 120;
          hue3 = hue2 + 120;
        } else if (hue < 240) {
          hue2 = hue - 120;
          hue3 = hue + 120;
        } else {
          hue2 = hue - 120;
          hue3 = hue2 - 120;
        }
        color.hue = index < 2 ? hue : index < 4 ? hue2 : hue3;
        color.saturation = this.randomPercent();
        color.lightness = this.randomPercent();
        break;
      }
      case 'complementary': {
        let oppositeHue: number;
        if (hue < 180) {
          oppositeHue = hue + 180;
        } else {
          oppositeHue = hue - 180;
        }

        color.hue = index + 1 > 3 ? hue : oppositeHue;
        color.saturation = this.randomPercent();
        color.lightness = this.randomPercent();
        break;
      }
    }
  }

  private randomHue(): number {
    return Math.round(Math.random() * 360);
  }

  private randomPercent(): number {
    return Math.round(Math.random() * 100);
  }
}
