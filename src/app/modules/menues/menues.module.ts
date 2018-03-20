import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from '../../service/user.service';
import {DatatableComponent} from '../../menu/datatable/datatable.component';

@NgModule({
  imports: [
    CommonModule,
    // data table
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule
  ],
  declarations: [
    // datatable
    DatatableComponent
  ],
  providers: [UserService],
})
export class MenuesModule { }
