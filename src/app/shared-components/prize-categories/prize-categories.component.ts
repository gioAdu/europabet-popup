import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-categories',
  templateUrl: './prize-categories.component.html',
  styleUrls: ['./prize-categories.component.css'],
})
export class PrizeCategoriesComponent implements OnInit {
  prizesArr:any[] = [
    {cat:'A',
      items:[
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'The Festival in Malta -ს მეინ ივენთის ბაი-ინი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'სასტუმრო Golden Tulip Vivaldi Hotel'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'€500 სახარჯი ფული'},
    ]},
    {cat:'B',
      items:[
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
    ]},
    {cat:'C',
      items:[
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
      {img:'../../../assets/images/final-item-ticket-icon.png',text:'ორმხრივი ავიაბილეთი'},
    ]}
  ]
  @Input() prizes:{img:string,text:string}[] = []
  constructor() {}
  test!:any[]

  ngOnInit(): void {
    for(let item in this.prizes){
      console.log(item)
    }
  }
}
