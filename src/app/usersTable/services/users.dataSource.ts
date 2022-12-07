import { DataSource } from "@angular/cdk/collections";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserInterface } from "../types/user.interface";
import { UsersService } from "./users.service";

@Injectable()
export class UsersDataSource extends DataSource<UserInterface> {
    users$ = new BehaviorSubject<UserInterface[]>([]);
    isLoading$ = new BehaviorSubject<boolean>(false);

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

    loadUsers(): void {
        this.isLoading$.next(true);
        this.UsersService.fetchUsers().subscribe((users) => {
            this.users$.next(users);
            this.isLoading$.next(false);
        });
    }
    

}