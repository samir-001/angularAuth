import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { UserService } from 'src/services/user.service';
import {OnInit} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[
    NavComponent,
    HttpClientModule,
    LoginComponent,
    RouterModule
  ]
})
export class AppComponent implements OnInit {
  constructor(private auth:AuthService){
    
  }
  ngOnInit(): void {
    // this.auth.getUsers().subscribe((data)=>{
    //   console.log(data)
    // })
  }
 
  title = 'athentication';
}
