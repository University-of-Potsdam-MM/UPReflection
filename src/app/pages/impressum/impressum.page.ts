import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AbstractPage } from '../abstract-page';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.page.html',
  styleUrls: ['./impressum.page.scss'],
})
export class ImpressumPage extends AbstractPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {
    super();
  }

  ngOnInit() { }

  openPage(page) {
    if (page === 'LegalNoticePage') {
      this.navCtrl.navigateForward('/legal-notice');
    } else if (page === 'PrivacyPolicyPage') {
      this.navCtrl.navigateForward('/privacy-policy');
    } else {
      this.navCtrl.navigateForward('/terms-of-service');
    }
  }

}
