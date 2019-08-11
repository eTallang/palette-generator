import { Component, Input, OnChanges } from '@angular/core';
import * as convert from 'color-convert';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnChanges {
  @Input() h: number;
  @Input() s: number;
  @Input() l: number;

  hex: string;
  rgb: string;
  hsl: string;

  ngOnChanges() {
    this.hex = convert.hsl.hex([this.h, this.s, this.l]);
    this.hsl = `${this.h}, ${this.s}%, ${this.l}%`;
    this.rgb = convert.hsl.rgb([this.h, this.s, this.l]).join(', ');
  }
}
