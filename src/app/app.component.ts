import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  datesArr: { header: string; stage: string; key: string }[] = [
    { header: '1 - 29 აპრილი', stage: 'Cash Games', key: 'cashGames' },
    { header: '13 - 29 აპრილი', stage: 'Spring Series', key: 'springSeries' },
    { header: '30 აპრილი', stage: 'Final Stage', key: 'finalStage' },
  ];
  title = 'europabet-popup';
  isActive: string = this.datesArr[0].key;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.isActive = event.urlAfterRedirects.substring(1);
      });
  }

  toggleBtn() {
    console.log(this.isActive);
  }
}
