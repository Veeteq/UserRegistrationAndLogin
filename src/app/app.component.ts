import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    currentUser: any;    
    title: string = "Angular 8 User Registration and Login Example";    

    constructor(private router: Router, private authenticationService: AuthenticationService){
        this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
    }

    logout(){
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}