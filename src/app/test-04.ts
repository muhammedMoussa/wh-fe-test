import { FormsModule } from '@angular/forms';
/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'ng-app',
    template : `
                <h2>Enter your first and last name</h2>
                <div>
                    <input placeholder="First Name" [(ngModel)]="first_name" (focusout)="handleUserName()"/> <br /> <br />
                    <input placeholder="Last Name" [(ngModel)]="last_name" (focusout)="handleUserName()"/><br /> <br />
                    <p>Username: {{username}} </p>
                </div>
                `,
    styles : []
})
export class UserNameComponent {
    first_name = "";    
    last_name = "";    
    username = "";

    handleUserName() {
        const {first_name, last_name} = this;
        if(first_name && last_name) {
            this.username = `${first_name.toLowerCase()}_${last_name.toLowerCase()}_${Math.floor(Math.random() * 9) + 1}`
        } else {
            this.username = "";
        }
    }   
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : UserNameComponent
            }
        ])
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};