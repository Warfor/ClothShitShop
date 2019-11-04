import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClothsListComponent } from './cloths/cloths-list/cloths-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ClothDetailsComponent } from './cloths/cloth-details/cloth-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ClothAddComponent } from './cloths/cloth-add/cloth-add.component';
import { ClothUpdateComponent } from './cloths/cloth-update/cloth-update.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ClothsListComponent,
    NavbarComponent,
    WelcomeComponent,
    ClothDetailsComponent,
    ClothAddComponent,
    ClothUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
