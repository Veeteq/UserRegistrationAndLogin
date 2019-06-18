import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private httpClient: HttpClient){
    }

    getAll(){
        return this.httpClient.get<any[]>(`${config.apiUrl}/users`);
    }

    registerUser(user){
        return this.httpClient.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id){
        return this.httpClient.delete(`${config.apiUrl}/users/${id}`);
    }
}