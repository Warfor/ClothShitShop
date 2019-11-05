import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ClothsListComponent} from './cloths/cloths-list/cloths-list.component';
import {ClothDetailsComponent} from './cloths/cloth-details/cloth-details.component';
import {ClothAddComponent} from './cloths/cloth-add/cloth-add.component';
import {ClothUpdateComponent} from './cloths/cloth-update/cloth-update.component';


const routes: Routes = [
  { path: 'cloths/:id', component: ClothDetailsComponent },
  { path: 'cloth-update/:id', component: ClothUpdateComponent },
  { path: 'cloth-add', component: ClothAddComponent },
  { path: 'cloths', component: ClothsListComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
