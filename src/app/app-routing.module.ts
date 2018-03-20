import {RouterModule, Routes} from '@angular/router';
import {StepperComponent} from './menu/stepper/stepper.component';
import {NgModule} from '@angular/core';
import {FormularioReactComponent} from './menu/formulario-react/formulario-react.component';
import {DatatableComponent} from './menu/datatable/datatable.component';

const appRoutes: Routes = [
  {path: 'stepper', component: StepperComponent},
  {path: 'formularioReact', component: FormularioReactComponent},
  {path: 'datatable', component: DatatableComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
