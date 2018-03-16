import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {EmpleadoDialogComponent} from './empleado-dialog/empleado-dialog.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [FormBuilder, MatDialog]
})

export class StepperComponent implements OnInit {
  dialogResult = '';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  toppings = new FormControl();
  /*Uso para auto select*/
  myControl: FormControl = new FormControl();
  options = ['Empleado 1', 'Empleado 2', 'Empleado 3']; // para lista auto select
  filteredOptions: Observable<string[]>;
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
  }
  toppingList = ['Departamento 1', 'Departamento 2', 'Departamento 3', 'Departamento 4', 'Departamento 5', 'Departamento 6'];
  toppingListArea = ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5', 'Area 6'];
  toppingListServicio = ['Servicio 1', 'Servicio 2', 'Servicio 3', 'Servicio 4', 'Servicio 5', 'Servicio 6'];
  toppingListSalas = ['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5', 'Sala 6'];
  animal: string;
  name: string;
  empleado = [
    {value: '0', viewValue: 'Empleado 1'},
    {value: '1', viewValue: 'Empleado 2'},
  ];
  zona = [
    {value: '0', viewValue: 'Zona 1'},
    {value: '1', viewValue: 'Zona 2'},
  ];
  area = [
    {value: '0', viewValue: 'Area 1'},
    {value: '1', viewValue: 'Area 2'},
  ];
  Departamento = [
    {value: '0', viewValue: 'Area 1'},
    {value: '1', viewValue: 'Area 2'},
  ];
  Servicio = [
    {value: '0', viewValue: 'Area 1'},
    {value: '1', viewValue: 'Area 2'},
  ];
  position = 'above';

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    // para select auto
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val)),
    );
  }
  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  openDialog() {
    let dialogRef = this.dialog.open(EmpleadoDialogComponent, {
      width: '600px',
      data: 'Somos infast'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`close dialog: ${result}`);
      this.dialogResult = result;
    });
  }
}
