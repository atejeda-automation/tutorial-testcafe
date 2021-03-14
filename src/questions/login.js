import { t } from 'testcafe'
import { Login } from '../ui/login'

export class LoginQuestions extends Login {
    async validateLoginAttempMessage(messageType) {
        switch (messageType) {
            case 'invalidUsername':
                await t.expect(this.div.alert.innerText).contains('Your username is invalid!')
                break
            case 'invalidPassword':
                await t.expect(this.div.alert.innerText).contains('Your password is invalid!')
                break
            case 'loginSucces':
                await t.expect(this.div.alert.innerText).contains('You logged into a secure area!')
                break
            default:
                console.warn('unsupported message type: ' + messageType)
                break;
        }
    }
}
