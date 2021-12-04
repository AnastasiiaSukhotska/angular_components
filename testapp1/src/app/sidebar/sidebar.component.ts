import { Component, Inject } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import {Contact} from '../model/contact';

@Component({
  selector: 'app-sidebar',
  template: `
  
    <ul class="contact-list">
      <li *ngFor="let contact of contacts" (click)='changeContact(contact)' [class.active]='activeContact==contact'>{{contact.name}} <button class="button-delate" (click)='deleteContact(contact)'>X</button></li>
    </ul>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  activeContact:any;
  contacts:Contact[]=[];


  constructor(@Inject(ContactsService) private contactsService:ContactsService) { 
    contactsService.getContacts().subscribe(c=>this.contacts=c);
  }
  changeContact(contact:any){
    this.activeContact=contact;
    this.contactsService.activateContact(contact);
  }

   deleteContact(contact:any){
    this.contactsService.deleteContact(contact);
   }

 
}
