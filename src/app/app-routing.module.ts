import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AssignmentReactiveComponent } from "./assignment-reactive/assignment-reactive.component";
import { AssignmentTemplateComponent } from "./assignment-template/assignment-template.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import { TemplateComponent } from "./template/template.component";

const appRoutes = [
    {
        path: 'template',
        component: TemplateComponent
    },
    {
        path: 'reactive',
        component: ReactiveComponent
    },
    {
        path: 'assignment-template',
        component: AssignmentTemplateComponent
    },
    {
        path: "assignment-reactive",
        component: AssignmentReactiveComponent
    },
    {
        path: '**',
        redirectTo: 'template'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}