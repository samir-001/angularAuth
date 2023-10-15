import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private user:UserService){}

  public mode:string = "login"

  onSubmit(loginData:NgForm){
    if(this.mode!=="login"){

   
    }else{
      this.user.createUser(loginData.value).subscribe((data)=>{
        console.log(data)
      })
      loginData.reset()
    }
  }

switchLoginSignUp(event:Event){
  event.preventDefault()
  switch (this.mode) {
    case "login":
      this.mode = "signUp"
      break;
      default :
      this.mode = "login"
        break;
      }
    }
}
