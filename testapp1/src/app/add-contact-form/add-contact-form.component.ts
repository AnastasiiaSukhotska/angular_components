import { Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {Contact} from '../model/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-add-contact-form',
  template: `
  <div class="form">
      <dl>
        <dt><label for="person-name-input"></label></dt>
        <dd><input type="text" id="person-name-input" [(ngModel)]="contact.name"></dd>
        <dt><label for="input-type"></label></dt>
        <dd><select name="type" id="input-type"  [(ngModel)]="contact.contactType">
          <option value="email">email</option>
          <option value="phone">phone</option>
        </select></dd>
        <dt><label for="person-phone-input"></label></dt>
        <dd><input type="text" id="person-phone-input" [(ngModel)]="contact.contactValue"></dd>
        <dd><button (click)="addContact()">Add</button></dd>
      </dl>
    </div>

  `,
  styleUrls: ['./add-contact-form.component.css']
})
export class AddContactFormComponent{
  public contact:Contact=new Contact('',' ', '');
  constructor(@Inject(ContactsService) private contactsService:ContactsService){

  }

  addContact(){
    if(!this.contact.name||!this.contact.contactType||!this.contact.contactValue){
      alert('Fill form')
      return;
    } 
    this.contactsService.addContact(this.contact);
    this.contact=new Contact('', '', '');
  }

}
