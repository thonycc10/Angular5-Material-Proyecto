import {RouterModule, Routes} from '@angular/router';
import {StepperComponent} from './stepper/stepper.component';
import {NgModule} from '@angular/core';
import {HolaComponent} from './hola/hola.component';

const appRoutes: Routes = [
  {path: 'stepper', component: StepperComponent},
  {path: 'hola', component: HolaComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
