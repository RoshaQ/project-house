import { environment } from './../../../environments/environment';
export class Logger {

    private static develop = !environment.production;

    static debug(message: string, param?: any) {
        if (Logger.develop) {
            if (param) {
                console.log(message, param);
            } else {
                console.log(message);
            }
        }
    }

    static warn(message: string) {
        if (Logger.develop) {
            console.warn(message);
        }
    }

    static error(message: string) {
        if (Logger.develop) {
            console.error(message);
        }
    }
}
