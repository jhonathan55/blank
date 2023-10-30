import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonsPageRoutingModule } from './buttons-routing.module';
import { ButtonsPage } from './buttons.page';
import { HeaderModule } from 'src/app/components/header/header.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsPageRoutingModule,
    HeaderModule
  ],
  declarations: [ButtonsPage]
})
export class ButtonsPageModule {}
