import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [FormBuilder]
})

export class StepperComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  toppings = new FormControl();
  myControl: FormControl = new FormControl();
  options = ['Empleado 1', 'Empleado 2', 'Empleado 3'];
  filteredOptions: Observable<string[]>;
  constructor(private _formBuilder: FormBuilder) {
  }
  toppingList = ['Departamento 1', 'Departamento 2', 'Departamento 3', 'Departamento 4', 'Departamento 5', 'Departamento 6'];
  empleado = [
    {value: '0', viewValue: 'Empleado 1'},
    {value: '1', viewValue: 'Empleado 2'},
  ];
  zona = [
    {value: '0', viewValue: 'Zona 1'},
    {value: '1', viewValue: 'Zona 2'},
  ];
  position = 'above';

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }
  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
