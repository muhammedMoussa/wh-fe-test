import { FormsModule } from '@angular/forms';
/**
 * Update the following components to meet the requirements : 
 * * Bind [field] of [textfield] component to its text input
 * * Pass value of [field] from [textfield] component to [title] property of component [ng-app]
 */
import { Component, Input, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'textfield',
    template : '<input type="text" [(value)]="field" readonly/>'
})
export class TextField {
    @Input() field = "";
}

@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield [(field)]="field"></textfield>`
})
export class ChildComponent {
    @Input() field = "";

}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component [(field)]="title"></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = "Hello from parent component";
    // also can deal with template refrence @ViewChild child.textfield.field ;)
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};