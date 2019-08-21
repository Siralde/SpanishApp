import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { MobilewebHeaderComponent } from './mobileweb-header/mobileweb-header.component';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [HeaderComponent, MobilewebHeaderComponent, DesktopHeaderComponent]
})
export class HeaderComponentModule {}
