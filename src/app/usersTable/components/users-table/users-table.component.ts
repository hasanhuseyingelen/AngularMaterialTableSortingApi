import { Component, OnInit } from '@angular/core';
import { UsersDataSource } from '../../services/users.dataSource';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'userName'];
  dataSource = new UsersDataSource(this.userService);

  constructor(private userService: UsersService) {
    
  } 

  ngOnInit(): void {
    this.dataSource.loadUsers();
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
