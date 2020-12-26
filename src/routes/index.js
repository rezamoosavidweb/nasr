import { Switch, Route } from 'react-router-dom'
import QuestionApprove from '../screens/QuestionApprove/QuestionApprove'








export default function Index() {
    return (
        <Switch>
            <Route exact path="/QuestionApprove" component={QuestionApprove} />
        </Switch>
    )
}
