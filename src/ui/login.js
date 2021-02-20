import { Selector } from 'testcafe'

export class Login {
    constructor() {
        this.input = {
            username: Selector('#username'),
            password: Selector('#password')
        }

        this.button = {
            login: Selector('button')
        }
        
        this.div = {
            alert: Selector('#flash')
        }
    }
}
