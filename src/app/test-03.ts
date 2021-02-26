import { FormsModule } from '@angular/forms';
/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'ng-app',
    template : `<form (ngSubmit)="handleSubmit($event)" >
                    <h2>Login</h2>
                    <br/>
                    <input type="email" [(ngModel)]="email" name="email" />
                    <p>{{emailError}}</p>
                    <br/>
                    <input type="password" [(ngModel)]="password" name="password" /> <br />
                    <p>{{passwordError}}</p>
                    <button type="submit">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    email:string = "";
    password:string = "";

    emailError:string = "";
    passwordError:string = "";

    private _logged_in = false;

    set logged_in(v : boolean) {
        this._logged_in = v;
    }

    get logged_in() : boolean {
        return this._logged_in;
    }
    
    handleSubmit(e) {
        e.preventDefault();

        const {email, password} = this;
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;

        this.clearErrors();

        if(email && password) {
            if(!emailRegex.test(email)) {
                this.emailError = "Invalid email";
                return this.logged_in = false;
            }

            if(!passRegex.test(password)) {
                this.passwordError = "Sorry, Password have to contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters";
                return this.logged_in = false;
            }

            if(emailRegex.test(email) && passRegex.test(password)) {
                alert(`Welcome ${email.split('@')[0]}`);
                this.clearErrors();
                this._logged_in = true;
            }
        } else {
            this.emailError = "Required";
            this.passwordError = "Required";
            this.logged_in = false;
        }    
    }

    clearErrors() {
        this.emailError = "";
        this.passwordError = "";
    }
    
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};