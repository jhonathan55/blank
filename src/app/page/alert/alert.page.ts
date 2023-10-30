import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: this.alertButtons,
    });
    await alert.present();
  }
  onOk() {
    console.log('Ok');
  }
  public alertButtons = [
    {
      text: 'Ok',
      handler: (data:any) => {
        if(data){
          console.log(data);
        }
        this.onOk();
      },
      role: 'ok',
    },
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'rojo',
      handler: () => {
        console.log('Cancel');
      }
    }
  ];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
    this.alertButtons,
  ];

}
