import { Component } from '@angular/core';

import { HslColor } from './hsl-color';
import { ColorService } from './color.service';

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

  constructor(private colorService: ColorService) { }

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
        this.colorService.createMonichronic(color, hue);
        break;
      }
      case 'triad': {
        this.colorService.createTriad(color, index, hue);
        break;
      }
      case 'complementary': {
        this.colorService.createComplementary(color, index, hue);
        break;
      }
    }
  }

  private randomHue(): number {
    return Math.round(Math.random() * 360);
  }
}
