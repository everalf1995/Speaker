// @ts-ignore
import {MatButtonModule, MatCheckboxModule, MatListModule, } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule]
})

export class MaterialModule { }
