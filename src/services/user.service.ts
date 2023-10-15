import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../madals/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor(private http:HttpClient,private auth:AuthService){}


createUser(user:User):Observable<User>{
  let customparams = new HttpParams()
  customparams = customparams.set('email',user.email)
  customparams = customparams.append('password',user.password)
  return this.http.post<User>('http://localhost:3000/user',user,{
  headers:new HttpHeaders({
    samir:"123",
    token:"demoToken"
  }),
  params:customparams
  }).pipe( catchError((error) => {
    return throwError(() => error);
  }), tap(data=>{
    this.auth.user.next(data)
  }))
}

getUser(id:number):Observable<User>{
  return this.http.get<User>(`http://localhost:3000/${id}`)
}

getUsers():Observable<User[]>{
  return this.http.get<User[]>('http://localhost:3000')
}

updateUser(user:User):Observable<User>{
  return this.http.patch<User>('http://localhost:3000',user)
}

DeleteUser(id:number):Observable<boolean>{
  return this.http.post<boolean>('http://localhost:3000',id)
}
}
