import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/madals/User.Ts';
@Component({
  selector: 'app-protected-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './protected-data.component.html',
  styleUrls: ['./protected-data.component.scss']
})
export class ProtectedDataComponent implements OnInit ,OnDestroy{
  public isLogedIn:boolean= false
  private userSubscription!:Subscription
  constructor(private auth:AuthService){

  }
  
  ngOnInit(): void {
    
    this.userSubscription = this.auth.user.subscribe((user)=>{
      this.isLogedIn = !!user
    }) 
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

}
