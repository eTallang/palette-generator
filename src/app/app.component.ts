import { Component } from '@angular/core';
import { HslColor } from './hsl-color';

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
}
