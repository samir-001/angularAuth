import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler, HttpHeaders} from '@angular/common/http'
import { AuthService } from './auth.service';
import { exhaustMap, take } from 'rxjs';
import { User } from '../madals/User';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private auth:AuthService) { }
  intercept(req:HttpRequest<any>,next:HttpHandler){

  return this.auth.user.pipe(take(1),exhaustMap((user)=>{
    if(!user){
      return next.handle(req)
    }
    const modifiedReq =req.clone({
      headers:new HttpHeaders({
        token:user.email
      })
    })
    return next.handle(modifiedReq)
  }))
  }
}
