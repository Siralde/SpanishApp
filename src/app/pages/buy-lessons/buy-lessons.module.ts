import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuyLessonsPage } from './buy-lessons.page';

const routes: Routes = [
  {
    path: '',
    component: BuyLessonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuyLessonsPage]
})
export class BuyLessonsPageModule {}
