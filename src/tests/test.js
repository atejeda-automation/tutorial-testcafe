import { LoginTasks } from '../tasks/login'
import { LoginQuestions } from '../questions/login'

const LOGIN_TASKS = new LoginTasks
const LOGIN_QUESTIONS = new LoginQuestions

fixture`First time TestCafe`
    .page`https://the-internet.herokuapp.com/login`

test('First testcase: Login attemp with invalid username', async () => {
    await LOGIN_TASKS.loginAttempt('Alfred', 'Password')
    await LOGIN_QUESTIONS.validateLoginAttempMessage('invalidUsername')
})

test('Second testcase: Login attemp with invalid password', async () => {
    await LOGIN_TASKS.loginAttempt('tomsmith', 'Password')
    await LOGIN_QUESTIONS.validateLoginAttempMessage('invalidPassword')
})

test('Third testcase: Login attemp succes', async () => {
    await LOGIN_TASKS.loginAttempt('tomsmith', 'SuperSecretPassword!')
    await LOGIN_QUESTIONS.validateLoginAttempMessage('loginSucces')
})
