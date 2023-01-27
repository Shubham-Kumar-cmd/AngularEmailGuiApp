import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

   data={
     to:"",
     subject:"",
     message:""
   }

   flag:boolean=false;

  constructor(private snack:MatSnackBar,private email:EmailService){}

   btnClick(){
     console.log("btn clicked");
     //this.snack.open("Email Sent successfully","Ok")
   }

  doSubmitForm(){
    console.log("try to submit form");
    console.log("Data "+this.data);

    
    if(this.data.to==''  || this.data.subject=='' || this.data.message==''){
      this.snack.open("fields can not be empty","Ok");
      return;
    }
    else{
      this.snack.open("Email send Successfully","Ok");
    }

    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
        this.flag=false;
      },error=>{
        console.log(error);
        this.flag=false;
      }
      
    )
  }
}
