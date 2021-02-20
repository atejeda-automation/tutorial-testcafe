import { LoginTasks } from '../tasks/login'
import { LoginQuestions } from '../questions/login'

const LOGIN_TASKS = new LoginTasks
const LOGIN_QUESTIONS = new LoginQuestions

fixture`First time TestCafe`
    .page`https://the-internet.herokuapp.com/login`

test('First testcase in testcafe', async () => {
    await LOGIN_TASKS.loginAttempt('Alfred', 'Password')
    await LOGIN_QUESTIONS.validateInvalidUsernameMessage()
})
