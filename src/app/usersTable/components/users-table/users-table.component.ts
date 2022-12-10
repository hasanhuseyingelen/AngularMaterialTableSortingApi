import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { UsersDataSource } from '../../services/users.dataSource';
import { UsersService } from '../../services/users.service';

import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'userName'];
  dataSource = new UsersDataSource(this.userService);
  totalCount = 0;

  // Paginator variables
  pageSizeOptions = [3, 5];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabledPaginator = false;
  
  paginatorOptions: PageEvent = {
    length: 10,
    pageSize: 3,
    pageIndex: 0,
  };

  sort: Sort = {active: 'id', direction: 'asc'};

  constructor(private userService: UsersService) {

  }

  ngOnInit(): void {
    this.dataSource.loadUsers({active: 'id', direction: 'asc'}, this.paginatorOptions);

    this.dataSource.usersTotalCount$.subscribe((totalCount) => { 
      this.paginatorOptions.length = totalCount 
      
      // If count higher than Item per page then pagination should be disabled
      this.disabledPaginator = totalCount < Math.min(...this.pageSizeOptions) ? true : false;
    });
  }

  loadUsers(): void {
    this.dataSource.loadUsers(this.sort, this.paginatorOptions);
  }

  sortUsers(sort: Sort): void {
    // this.dataSource.loadUsers(sort);
    this.sort = sort;
    this.loadUsers();
  }
    
  handlePageEvent(pageEvent: PageEvent) {
    // Items per page (limit)
    // this.paginatorOptions.pageSize = pageEvent.pageSize;
    // // Page number
    // this.paginatorOptions.pageIndex = pageEvent.pageIndex;
    this.paginatorOptions = pageEvent;
    
    // Get data from api
    this.dataSource.loadUsers(this.sort, this.paginatorOptions);    
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    console.log(setPageSizeOptionsInput);
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


  // dataSource = [
  //   {
  //     id: '1',
  //     name: 'Jack',
  //     userName: 'User Jack'
  //   },
  //   {
  //     id: '2',
  //     name: 'John',
  //     userName: 'User John'
  //   },
  //   {
  //     id: '3',
  //     name: 'Mike',
  //     userName: 'User Mike'
  //   },
  //   {
  //     id: '4',
  //     name: 'Anna',
  //     userName: 'User Anna'
  //   },
  //   {
  //     id: '1',
  //     name: 'Freud',
  //     userName: 'User Freud'
  //   },
  // ]
}
