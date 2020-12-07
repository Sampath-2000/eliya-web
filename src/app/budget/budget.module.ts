import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { EditBudgetComponent } from './edit-budget/edit-budget.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AddBudgetComponent, BudgetListComponent, EditBudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
  ]
})
export class BudgetModule { }
