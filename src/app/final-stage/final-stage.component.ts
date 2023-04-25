import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-stage',
  templateUrl: './final-stage.component.html',
  styleUrls: ['./final-stage.component.css'],
})
export class FinalStageComponent implements OnInit {
  prizesArr:any[] = [
    {prize:'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
    {prize:'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
    {prize:'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
    {prize:'სპეც. ტურნირი Tournament Sharks III ადგილი'},
    {prize:'Holdem Grinders ლიდერბორდის გამარჯვებული'},
    {prize:'ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები'},
    {prize:'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
    {prize:'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},

  ]
  tournamentsArr: any[] = [
    {
      header: '“Cashgame Highrollers” -',
      ticket: '1 საგზური',
      img: '../../../assets/images/poker-item-1-ticket-icon.png',
    },
    {
      header: '„Cashgame Grinders”',
      ticket: '1 საგზური',
      img: '../../../assets/images/poker-item-1-ticket-icon.png',
    },
    {
      header: '„Tournament Sharks“ -',
      ticket: '1 საგზური',
      img: '../../../assets/images/poker-item-1-ticket-icon.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
