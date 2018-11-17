import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserStore } from './../user-store';
import { UserTo } from 'src/app/house/house-model/user-to';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private http: HttpClient, private userStore: UserStore) {}

    public login(username: string, password: string) {
        if (username === 'admin' && password === 'admin') {
            const user = {
                username: username,
                password: password,
            } as UserTo;
            this.userStore.setUser(user);
        }
    }

    public logout() {
        this.userStore.resetUser();
    }
}
