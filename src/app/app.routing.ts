import { RouterModule } from '@angular/router'
import { ApplycreditcompComponent } from './applycreditcomp/applycreditcomp.component'
import { InstantdecisioncompComponent } from './instantdecisioncomp/instantdecisioncomp.component'
import { RetrieveapplicationcompComponent } from './retrieveapplicationcomp/retrieveapplicationcomp.component'
import { StatuscompComponent } from './statuscomp/statuscomp.component'

export const AppRouting = RouterModule.forRoot ([
    {path:'applycredit', component: ApplycreditcompComponent},
    {path:'instantdecision', component: InstantdecisioncompComponent},
    {path:'retrieve', component: RetrieveapplicationcompComponent},
    {path:'status', component: StatuscompComponent},
])