import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatStepperModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { ToobarComponent } from './menu/toobar.component';
import {StepperComponent} from './menu/stepper/stepper.component';
import {AppRoutingModule} from './app-routing.module';
import { FormularioReactComponent } from './menu/formulario-react/formulario-react.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { EmpleadoDialogComponent } from './menu/stepper/empleado-dialog/empleado-dialog.component';
import {MenuesModule} from './modules/menues/menues.module';


@NgModule({
  declarations: [
    AppComponent,
    ToobarComponent,
    StepperComponent,
    FormularioReactComponent,
    EmpleadoDialogComponent,
  ],
  imports: [
    MenuesModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ EmpleadoDialogComponent ]
})
export class AppModule { }
