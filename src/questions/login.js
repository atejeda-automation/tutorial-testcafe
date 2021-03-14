import { t } from 'testcafe'
import { Login } from '../ui/login'

export class LoginQuestions extends Login {
    async validateInvalidUsernameMessage() {
        await t.expect(this.div.alert.innerText).contains('Your username is invalid!')
    }
}
