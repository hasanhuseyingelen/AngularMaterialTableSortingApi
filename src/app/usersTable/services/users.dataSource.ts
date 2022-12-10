import { DataSource } from "@angular/cdk/collections";
import { Injectable } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { BehaviorSubject, Observable } from "rxjs";
import { UserInterface } from "../types/user.interface";
import { UsersService } from "./users.service";

@Injectable()
export class UsersDataSource extends DataSource<UserInterface> {
    users$ = new BehaviorSubject<UserInterface[]>([]);
    isLoading$ = new BehaviorSubject<boolean>(false);
    usersTotalCount$ = new BehaviorSubject<number>(0);

    constructor(private UsersService: UsersService) {
        // We must be use super because this class extended DataSource
        super();
    }

    connect(): Observable<UserInterface[]> {
        return this.users$.asObservable();
    }

    disconnect(): void {
        this.users$.complete();
    }

    loadUsers(sort: Sort, paginatorOptions: PageEvent): void {
        this.isLoading$.next(true);
        this.UsersService.fetchUsers(sort, paginatorOptions).subscribe((users) => {
            this.users$.next(users.body);
            this.isLoading$.next(false);
            
            this.usersTotalCount$.next(users.headers.get('X-Total-Count'));
        });
    }
}
