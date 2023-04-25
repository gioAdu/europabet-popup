import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  prizesArr:any[] = [
    {place:1,voucher:'—', prize:{img:'../../../assets/images/travel-icon-sm.png', text:'A კატეგორიის საგზური'}},
    {place:2,voucher:'—', prize:{img:'../../../assets/images/ticket-icon-sm.png', text:'B კატეგორიის საგზური'}},
    {place:3,voucher:'1500₾', prize:{ text:'სპეც. ტურნირის ბილეთი'}},
    {place:4,voucher:'1200₾', prize:{ text:'სპეც. ტურნირის ბილეთი'}},
    {place:5,voucher:'1000₾', prize:{ text:'სპეც. ტურნირის ბილეთი'}},
    {place:6,voucher:'800₾', prize:{ text:'სპეც. ტურნირის ბილეთი'}},
    {place:7,voucher:'600₾', prize:{ text:'სპეც. ტურნირის ბილეთი'}},
    {place:8,voucher:'400₾', prize:{ text:'სპეც. ტურნირის ბილეთი'}},
  ]
  constructor() {}

  ngOnInit(): void {}
}
