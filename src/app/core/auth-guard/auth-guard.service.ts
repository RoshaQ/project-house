import { UserStore } from './../../house/login/services/user-store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private userStore: UserStore) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.userStore.getUser().username && this.userStore.getUser().username) {
            return true;
        }

        this.router.navigate(['house/login']);
        return false;
    }
}
