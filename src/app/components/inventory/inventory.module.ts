import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: InventoryComponent},
      // {path: '', redirectTo: 'inventory', pathMatch: 'full'},
    ])
  ]
})
export class InventoryModule { }
