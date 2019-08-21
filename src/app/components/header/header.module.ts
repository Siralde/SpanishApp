import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { MobilewebHeaderComponent } from './mobileweb-header/mobileweb-header.component';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';

@NgModule({
  imports: [
    IonicModule,
  ],
  declarations: [HeaderComponent, MobilewebHeaderComponent, DesktopHeaderComponent]
})
export class HeaderComponentModule {}
