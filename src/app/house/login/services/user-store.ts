import { Logger } from './../../../core/logger/logger';
import { UserState } from './user-state';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { UserTo } from '../../house-model/user-to';

@Injectable()
export class UserStore {
    emptyUser: UserTo = {
        username: '',
        password: '',
    };

    private stateSource = this.initState();
    state$ = this.stateSource.asObservable().pipe(distinctUntilChanged());

    initState(): BehaviorSubject<UserState> {
        return new BehaviorSubject<UserState>({
            user: this.emptyUser,
        });
    }

    setUser(user: UserTo): void {
        this.emitNewState({
            user: user,
        } as UserState);
    }

    resetUser(): void {
        this.emitNewState({
            user: this.emptyUser,
        } as UserState);
    }

    getUser(): UserTo {
        return this.stateSource.getValue().user;
    }

    private emitNewState(newState: UserState) {
        const currentState = this.stateSource.getValue();
        const nextState = Object.assign({}, currentState, newState);
        this.stateSource.next(nextState);
        Logger.debug('nextState User ->', nextState);
    }
}
