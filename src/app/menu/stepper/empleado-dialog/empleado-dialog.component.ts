import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-empleado-dialog',
  templateUrl: './empleado-dialog.component.html',
  styleUrls: ['./empleado-dialog.component.css']
})
export class EmpleadoDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<EmpleadoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }
  onClosedConfirm() {
    this.thisDialogRef.close('Confirmar');
  }

  onClosedCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
