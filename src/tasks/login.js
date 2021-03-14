
import { t } from 'testcafe'
import { Login } from '../ui/login'

export class LoginTasks extends Login {
    async loginAttempt(username, password) {
        await t
            .typeText(this.input.username, username)
            .typeText(this.input.password, password)
            .click(this.button.login)
    }
}
