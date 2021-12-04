
import { Component, Input, Inject} from '@angular/core';
import {Contact} from '../model/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-active-contact',
  template: 
    `<div class="chosen-contact" *ngIf='contact!==null'>
        <div class="person-name">{{contact.name}}</div>
        <div class="contact-type">{{contact.contactType}}</div>
        <div class="person-contact">{{contact.contactValue}}</div>
      </div>`,
  styleUrls: ['./active-contact.component.css']
})
export class ActiveContactComponent{
  public contact:Contact|null=null;
  constructor(@Inject(ContactsService) private contactsService:ContactsService){
    contactsService.getActiveContact().subscribe(c=>this.contact=c);
  }

  

}
