import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates-btn',
  templateUrl: './dates-btn.component.html',
  styleUrls: ['./dates-btn.component.css'],
})
export class DatesBtnComponent implements OnInit {
  @Input() btnInfo!: { header: string; stage: string };
  @Input() isActive!: string;
  @Input() key!: string;

  constructor() {}

  ngOnInit(): void {
  }
}
