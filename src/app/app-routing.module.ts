import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashGamesComponent } from './cash-games/cash-games.component';
import { SpringSeriesComponent } from './spring-series/spring-series.component';
import { FinalStageComponent } from './final-stage/final-stage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cashGames' },
  { path: 'cashGames', pathMatch: 'full', component: CashGamesComponent },
  { path: 'springSeries', component: SpringSeriesComponent },
  { path: 'finalStage', component: FinalStageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
