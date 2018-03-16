import {RouterModule, Routes} from '@angular/router';
import {StepperComponent} from './stepper/stepper.component';
import {NgModule} from '@angular/core';
import {FormularioReactComponent} from './formulario-react/formulario-react.component';

const appRoutes: Routes = [
  {path: 'stepper', component: StepperComponent},
  {path: 'formularioReact', component: FormularioReactComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
