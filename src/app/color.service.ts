import { Injectable } from '@angular/core';
import { HslColor } from './hsl-color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  createMonichronic(color: HslColor, hue: number): void {
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
    color.saturation = this.randomSaturation();
    color.lightness = this.randomLightness();
  }

  createTriad(color: HslColor, index: number, hue: number): void {
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
    color.saturation = this.randomSaturation();
    color.lightness = this.randomLightness();
  }

  createComplementary(color: HslColor, index: number, hue: number): void {
    let oppositeHue: number;
    if (hue < 180) {
      oppositeHue = hue + 180;
    } else {
      oppositeHue = hue - 180;
    }

    color.hue = index + 1 > 3 ? hue : oppositeHue;
    color.saturation = this.randomSaturation();
    color.lightness = this.randomLightness();
  }

  private randomSaturation(): number {
    const saturation = Math.random() * 75;
    return Math.round(saturation + 25);
  }

  private randomLightness(): number {
    const lightness = Math.random() * 75;
    return Math.round(lightness + (25 / 2));
  }
}
