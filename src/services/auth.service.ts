import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../madals/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private UserRequests:UserService) { }
  public  user= new BehaviorSubject<any>(null)

  logIn(){
    this.UserRequests.getUser(1).subscribe((user:User)=>{
      this.user.next(user)
    })
  }
  logOut(){
    this.user.next(null)
  }
  outoLogin(){
    const siginInUser = localStorage.getItem('userData')
    if(!siginInUser){
      return
    }
    return this.user.next(JSON.parse(siginInUser))
  }
  outoLogout(){

  }
 
}
