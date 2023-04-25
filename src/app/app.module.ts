import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashGamesComponent } from './cash-games/cash-games.component';
import { SpringSeriesComponent } from './spring-series/spring-series.component';
import { FinalStageComponent } from './final-stage/final-stage.component';
import { DatesBtnComponent } from './shared-components/dates-btn/dates-btn.component';
import { LeaderboardComponent } from './shared-components/leaderboard/leaderboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconLegendComponent } from './shared-components/icon-legend/icon-legend.component';
import { AdditionalInfoComponent } from './shared-components/additional-info/additional-info.component';
import { TermsConditionsComponent } from './shared-components/terms-conditions/terms-conditions.component';
import { SliderComponent } from './shared-components/slider/slider.component';
import { PrizeCategoriesComponent } from './shared-components/prize-categories/prize-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    CashGamesComponent,
    SpringSeriesComponent,
    FinalStageComponent,
    DatesBtnComponent,
    LeaderboardComponent,
    IconLegendComponent,
    AdditionalInfoComponent,
    TermsConditionsComponent,
    SliderComponent,
    PrizeCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
