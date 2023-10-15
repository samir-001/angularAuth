import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { User } from '../madals/User';

@Component({
  
  standalone:true,
  selector: 'app-nav',
  imports:[
    RouterModule
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],


   
})
export class NavComponent implements OnInit{
  public islogedIn!:boolean 
  private userSubscription!:Subscription
  constructor(private auth:AuthService){
    this.islogedIn = false
  }
  ngOnInit(): void {
    this.userSubscription = this.auth.user.subscribe((user)=>{
      this.islogedIn = !!user
       console.log(this.islogedIn)
    })
  }
  logout(){
    this.auth.user.next(null)
  }
}
