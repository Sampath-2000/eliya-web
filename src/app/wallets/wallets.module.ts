import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletsRoutingModule } from './wallets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { EditWalletComponent } from './edit-wallet/edit-wallet.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';


@NgModule({
  declarations: [AddWalletComponent, EditWalletComponent, WalletListComponent],
  imports: [
    CommonModule,
    WalletsRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ]
})
export class WalletsModule { }
