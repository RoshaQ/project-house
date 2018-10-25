import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Page404Component
  ],
  declarations: [Page404Component]
})
export class SharedModule { }
