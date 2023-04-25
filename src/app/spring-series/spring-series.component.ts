import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-series',
  templateUrl: './spring-series.component.html',
  styleUrls: ['./spring-series.component.css']
})
export class SpringSeriesComponent implements OnInit {
  tournamentsArr: any[] =[
    {tourName:'Holdem Highrollers', prize:'50 000 ₾', place:'ბაი-ინი - 550₾',date:'27 აპრილი'},
    {tourName:'Omaha Highrollers', prize:'50 000 ₾', place:'ბაი-ინი - 550₾',date:'28 აპრილი'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
