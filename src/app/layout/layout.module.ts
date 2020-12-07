import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';

import { SidenavComponent } from './sidenav/sidenav.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddExpenseComponent } from './add-expense/add-expense.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    AddExpenseComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,

  ],
  exports: [HeaderComponent, SidenavComponent,AddExpenseComponent],
})
export class LayoutModule {}
