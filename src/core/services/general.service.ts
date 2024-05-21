import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class GeneralService{
    constructor(public http:HttpClient){}
    postLogin(email:string, password:string){
        return this.http.post('http://localhost:8080/auth', {username:email, password})
    }
}