import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilewebHeaderComponent } from './mobileweb-header.component';
import { LogoComponent } from '../logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [MobilewebHeaderComponent, LogoComponent]
})
export class MobileWebModule {}
