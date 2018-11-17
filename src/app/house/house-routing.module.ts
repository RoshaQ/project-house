import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { LoginComponent } from './login/components/login/login.component';
import { AuthGuardService } from '../core/auth-guard/auth-guard.service';

const houseRoutes: Routes = [
    {
        path: 'house',
        children: [
            {
                path: 'homepage',
                component: HomeComponent,
                canActivate: [AuthGuardService],
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: '',
                redirectTo: 'homepage',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(houseRoutes)],
    exports: [RouterModule],
})
export class HouseRoutingModule {}
