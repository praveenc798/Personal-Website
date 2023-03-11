import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class filed{
  custname:any;
  custemail:any;
  custmessage:any;
}



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})


export class ContactPageComponent {
  constructor(private contact: ContactService) { }
  FormData: filed[] = [{custname:0,custemail:0,custmessage:0}]; 
  name:string;
  email:string;
  message:string;
  

  onsend(){
    debugger
    this.FormData[0].custname = this.name;
    this.FormData[0].custemail = this.email;
    this.FormData[0].custmessage = this.message;  
    
    if( (this.FormData[0].custemail == undefined) || (this.FormData[0].custname == undefined ) || (this.FormData[0].custmessage == undefined ))
    {
      window.alert('Please fill all the form fileds before submiting...')
    }
    else
    {
      this.contact.postMessage(this.FormData[0]).subscribe()
      window.alert('I have recevied your message. I will get back to you soon...')
      this.name= undefined;
      this.email = undefined;
      this.message = undefined;
    }

  }
  
}

