import {RouterModule, Routes} from '@angular/router';
import {StepperComponent} from './stepper/stepper.component';
import {NgModule} from '@angular/core';
import {HolaComponent} from './hola/hola.component';
import {FormularioReactComponent} from './formulario-react/formulario-react.component';

const appRoutes: Routes = [
  {path: 'stepper', component: StepperComponent},
  {path: 'hola', component: HolaComponent},
  {path: 'formularioReact', component: FormularioReactComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
