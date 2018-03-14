import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatSelectModule,
  MatSidenavModule,
  MatSortModule, MatStepperModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import { ToobarComponent } from './menu/toobar.component';
import { StepperComponent } from './stepper/stepper.component';
import {AppRoutingModule} from './app-routing.module';
import { HolaComponent } from './hola/hola.component';


@NgModule({
  declarations: [
    AppComponent,
    ToobarComponent,
    StepperComponent,
    HolaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule, MatTableModule, MatSortModule,
    MatPaginatorModule, MatInputModule, MatToolbarModule, MatSelectModule, MatStepperModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
