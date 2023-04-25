import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('innerSlider') innerSlider!: ElementRef;
  pressed: boolean = false;
  startx!: number;
  x!: number;
  imgsArr: string[] = [
    '../../../assets/images/promotions-sm.png',
    '../../../assets/images/promotions-sm.png',
    '../../../assets/images/promotions-sm.png',
    '../../../assets/images/promotions-sm.png',
    '../../../assets/images/promotions-sm.png',
    '../../../assets/images/promotions-sm.png',
    '../../../assets/images/promotions-sm.png',
    '../../../assets/images/promotions-sm.png',
    '../../../assets/images/promotions-sm.png',
  ];
  constructor() {}

  ngOnInit(): void {}

  mouseDown(e: MouseEvent) {
    this.pressed = true;
    this.startx = e.offsetX - this.innerSlider.nativeElement.offsetLeft;
    this.slider.nativeElement.style.cursor = 'grabbing';
  }

  mouseEnter() {
    this.slider.nativeElement.style.cursor = 'grab';
  }

  mouseUp() {
    this.slider.nativeElement.style.cursor = 'grab';
  }

  winMouseUp() {
    this.pressed = false;
  }

  mouseMove(e: MouseEvent) {
    e.preventDefault();
    if (!this.pressed) return;
    this.innerSlider.nativeElement.parentElement.scrollLeft -= e.movementX;
  }
}
