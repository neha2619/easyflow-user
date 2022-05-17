import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import {Worker} from '../pages/Worker'
import { About } from '../pages/About'
import { Company } from '../pages/Company'
import { UpdateWorkerProfile } from '../pages/UpdateWorkerProfile'
import { UpdateWorkerPassword } from '../pages/UpdateWorkerPassword'
import { WorkerReport } from '../pages/WorkerReport'
import { WorkerSendRequest } from '../pages/WorkerSendRequest'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/worker' component={Worker}/>
            <Route path='/about' component={About}/>
            <Route path='/company' component={Company}/>
            <Route path='/updateworkerprofile' component={UpdateWorkerProfile}/>
            <Route path='/updateworkerpassword' component={UpdateWorkerPassword}/>
            <Route path='/workerreport' component={WorkerReport}/>
            <Route path='/workersendrequest' component={WorkerSendRequest}/>
            
        </Switch>
    )
}

export default Routes
