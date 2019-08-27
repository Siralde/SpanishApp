import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private platform: Platform) { }

  ngOnInit() {
  }

  isPhone() {
    return this.platform.is('mobileweb');
  }

  isDesktop() {
    return this.platform.is('desktop');
  }

}
