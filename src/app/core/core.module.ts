import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthGuardService],
  declarations: []
})
export class CoreModule { }
