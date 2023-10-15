import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { Observable, map } from "rxjs";

export const authGuard:CanActivateFn = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree=>{
  const auth = inject(AuthService);
  const router = inject(Router);
return auth.user.pipe(map((user)=>{
  return !!user
}))
}