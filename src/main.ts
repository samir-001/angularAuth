/// <reference types="@angular/localize" />


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './components/app/App.routes';
import { AuthInterceptorService } from './services/auth-interceptor.service';


bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(HttpClientModule),
      provideRouter(APP_ROUTE),
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ],
  }).catch((err) => console.error(err));