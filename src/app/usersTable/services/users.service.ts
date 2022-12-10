import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { Observable } from "rxjs";
import { UserInterface } from "../types/user.interface";

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {

    }

    fetchUsers(sort: Sort, paginatorOptions: PageEvent ): Observable<any>{
      const params = new HttpParams()
        .set('_sort', sort.active)
        .set('_order', sort.direction)
        // pageSize
        .set('_limit', paginatorOptions.pageSize)
        // Offset parameter
        .set('_start', paginatorOptions.pageSize * paginatorOptions.pageIndex);

        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users', { observe: 'response', params });
    }
}
