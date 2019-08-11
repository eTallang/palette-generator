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
    const hue = this.randomHue();
    this.colors.forEach(color => this.updateColor(color, hue, this.mode));
  }

  private updateColor(color: HslColor, hue: number, mode: ShadeMode): void {
    if (mode === 'monochromatic') {
      color.hue = hue;
      color.saturation = this.randomPercent();
      color.lightness = this.randomPercent();
    }
  }

  private randomHue(): number {
    return Math.round(Math.random() * 360);
  }

  private randomPercent(): number {
    return Math.round(Math.random() * 100);
  }
}
