import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './register/forms/forms.component'
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HomeComponent } from './rxjs/home/home.component';
import { UserComponent } from './rxjs/user/user.component'
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from "@ngrx/store";
import { counterReducer } from './store/reducer/counter.reducer';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HomeComponent,
    UserComponent,
    CounterComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxMaskModule,
    AppRoutingModule,
    StoreModule.forRoot({ ctr: counterReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
