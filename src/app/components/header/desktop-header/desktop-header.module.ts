import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DesktopHeaderComponent } from './desktop-header.component';

const routes: Routes = [
  {
    path: '',
    component: DesktopHeaderComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesktopHeaderComponent]
})
export class DesktopHeaderModule {}
