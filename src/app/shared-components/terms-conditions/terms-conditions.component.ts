import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css'],
})
export class TermsConditionsComponent implements OnInit {
  termsArr: { text: string }[] = [
    { text: 'როდის იწყება და რა ფორმატით გაიმართება აქცია' },
    { text: 'როგორ მივიღო აქციაში მონაწილეობა?' },
    { text: 'სხვადასვა' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
