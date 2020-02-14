import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; 

import { FirstComponentComponent } from './first-component/first-component.component';
import { HomeComponent } from './home/home.component';
import { ChangeDirective } from './change.directive';
import { TestingDirective } from './testing.directive';
import { SqrtComponent } from './sqrt/sqrt.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HomeComponent,
    ChangeDirective,
    TestingDirective,
    SqrtComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
