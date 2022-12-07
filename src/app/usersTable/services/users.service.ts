import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../types/user.interface";

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {

    }

    fetchUsers(): Observable<UserInterface[]>{
        return this.http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
    }

}