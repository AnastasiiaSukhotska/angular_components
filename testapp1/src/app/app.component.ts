import { Component, Inject } from '@angular/core';
import {Contact} from './model/contact';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(ContactsService) private contactsService:ContactsService){
  }

}


