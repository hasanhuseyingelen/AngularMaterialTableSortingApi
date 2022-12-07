import { Component } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  displayedColumns: string[] = ['id', 'name', 'userName'];

  dataSource = [
    {
      id: '1',
      name: 'Jack',
      userName: 'User Jack'
    },
    {
      id: '2',
      name: 'John',
      userName: 'User John'
    },
    {
      id: '3',
      name: 'Mike',
      userName: 'User Mike'
    },
    {
      id: '4',
      name: 'Anna',
      userName: 'User Anna'
    },
    {
      id: '1',
      name: 'Freud',
      userName: 'User Freud'
    },
  ]
}
