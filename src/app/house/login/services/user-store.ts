import { Logger } from './../../../core/logger/logger';
import { UserState } from './user-state';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { UserTo } from '../../house-model/user-to';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
@Injectable()
export class UserStore {
    private stateSource = this.initState();
    state$ = this.stateSource.asObservable().pipe(distinctUntilChanged());

    initState(): BehaviorSubject<UserState> {
        return new BehaviorSubject<UserState>({
            user: undefined,
        });
    }

    setUser(user: UserTo): void {
        this.emitNewState({
            user: user,
        } as UserState);
    }

    resetUser(): void {
        this.emitNewState({
            user: undefined,
        } as UserState);
    }

    getUser(): UserTo {
        const user = this.stateSource.getValue().user;
        if (user) {
            return user;
        }
        return null;
    }

    private emitNewState(newState: UserState) {
        const currentState = this.stateSource.getValue();
        const nextState = Object.assign({}, currentState, newState);
        this.stateSource.next(nextState);
        Logger.debug('nextState User ->', nextState);
    }
}
