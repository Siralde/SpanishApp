import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MobilewebHeaderComponent } from './components/header/mobileweb-header/mobileweb-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DesktopHeaderComponent } from './components/header/desktop-header/desktop-header.component';
import { LogoComponent } from './components/header/logo/logo.component';

@NgModule({
  declarations: [AppComponent, MobilewebHeaderComponent, DesktopHeaderComponent, LogoComponent, FooterComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
