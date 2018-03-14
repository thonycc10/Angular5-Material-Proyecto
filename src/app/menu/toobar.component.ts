import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toobar',
  templateUrl: './toobar.component.html',
  styleUrls: ['./toobar.component.css']
})
export class ToobarComponent implements OnInit {

  constructor() { }

  foods = [
    {value: 'steak-0', viewValue: 'Centro Asistencial 1'},
    {value: 'pizza-1', viewValue: 'Centro Asistencial 2'},
  ];
  ngOnInit() {
  }

}
