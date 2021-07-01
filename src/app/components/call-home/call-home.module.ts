import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallHomePageRoutingModule } from './call-home-routing.module';

import { CallHomePage } from './call-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallHomePageRoutingModule
  ],
  declarations: [CallHomePage]
})
export class CallHomePageModule {}
