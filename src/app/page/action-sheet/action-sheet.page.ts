import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  isFavorite = false;
  constructor(
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      subHeader: 'Select your action',
      translucent: true,
      backdropDismiss: true,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'rojo',
          handler: () => {
            this.onDelete();
          },
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share',
          data: {
            action: 'share',
          },
          cssClass: 'primary',
          handler: () => {
            this.onShared();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
  onDelete() {
    console.log('Delete');
  }
  onShared() {
    console.log('Shared');
  }
 
}
