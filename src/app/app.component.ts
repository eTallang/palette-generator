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
    { hue: 230, lightness: 50, saturation: 100 },
    { hue: 230, lightness: 50, saturation: 100 },
    { hue: 230, lightness: 50, saturation: 100 },
    { hue: 230, lightness: 50, saturation: 100 },
    { hue: 230, lightness: 50, saturation: 100 }
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
    return Math.random() * 360;
  }

  private randomPercent(): number {
    return Math.random() * 100;
  }
}
