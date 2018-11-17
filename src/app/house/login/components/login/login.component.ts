import { UserStore } from './../../services/user-store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { AuthenticationService } from './../../services/authentication/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    dataSuccess: Boolean;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userStore: UserStore,
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
        this.authenticationService.logout();
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit(): void {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        const isLogged = this.authenticationService.login(this.f.username.value, this.f.password.value);

        if (isLogged) {
            this.dataSuccess = true;
            this.router.navigate(['/']);
        } else {
            this.dataSuccess = false;
        }
    }
}
