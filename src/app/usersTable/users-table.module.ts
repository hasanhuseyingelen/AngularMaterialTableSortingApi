import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersService } from './services/users.service';
import { UsersDataSource } from './services/users.dataSource';



@NgModule({
  declarations: [
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    UsersTableComponent
  ],
  providers: [
    UsersService,
    UsersDataSource
  ]
})


export class UsersTableModule { }
