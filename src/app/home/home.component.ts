import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "@/_services/authentication.service";
import { UserService } from "@/_services/user.service";
import { first } from "rxjs/operators";

//import { User } from '@/_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {

    currentUser: any;
    users = [];

    constructor(private authenticationService: AuthenticationService, private userService: UserService){
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    loadAllUsers(){
        this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
    }

    deleteUser(id: number) {
        this.userService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
    }
}