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

  ngOnChanges() {
    this.hex = convert.hsl.hex([this.h, this.s, this.l]);
  }
}
