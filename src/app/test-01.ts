import { CommonModule } from '@angular/common';
/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input,NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <input placeholder="Entrt loan amout" [(ngModel)]="loan_amount" (ngModelChange)="handleLoanAmountChange($event)"/> <br />
                    <b>Monthly Payment: </b> 
                        <span *ngIf="monthly_payment">{{monthly_payment | currency }}</span>
                        <span *ngIf="!monthly_payment">N/A</span>
                    <br/>
                    <b>Late Payment Fee : </b> 
                        <span *ngIf="late_payment">{{late_payment | currency }}</span>
                        <span *ngIf="!late_payment">N/A</span>
                    <br/>
                </div>`
})
export class Test01Component {

    loan_amount:number;
    monthly_payment: number;
    late_payment: number;

    handleLoanAmountChange(e) {
        const helper = (amount, percentage) => (amount * percentage) / 100;

        if(e) {
            this.monthly_payment = helper(e, 2) ;
            this.late_payment = helper(this.monthly_payment, 5) ;
        } else {
            this.monthly_payment = 0;
            this.late_payment = 0;
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
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component]
})
export class Test01Module {}