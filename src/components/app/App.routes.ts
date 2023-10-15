import { Route} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import  {ProtectedDataComponent} from '../protected-data/protected-data.component';

export const APP_ROUTE: Route[] = [
  {path:'home',component:HomeComponent,pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'private',component:ProtectedDataComponent},
  {path:'**',redirectTo:'home'}
];
