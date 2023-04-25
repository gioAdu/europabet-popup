import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-legend',
  templateUrl: './icon-legend.component.html',
  styleUrls: ['./icon-legend.component.css'],
})
export class IconLegendComponent implements OnInit {
  iconLegendArr: { icon: string; text: string }[] = [
    {
      icon: '../../../assets/images/travel-icon-sm.png',
      text: 'The Festival in Malta-ს საგზური',
    },
    {
      icon: '../../../assets/images/ticket-icon-sm.png',
      text: 'სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური',
    },
    {
      icon: '../../../assets/images/travel-icon-sm.png',
      text: 'ტექნიკის მაღაზიის ვაუჩერი',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
