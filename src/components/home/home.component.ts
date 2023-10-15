import { Component,OnInit ,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  constructor(private auth:AuthService){}

   private userSubscription !: Subscription
  ngOnInit(): void {
    this.userSubscription = this.auth.user.subscribe((data)=>{
      console.log(data)
    })
    
  }
  
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

}
