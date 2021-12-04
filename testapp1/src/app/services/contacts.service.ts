  import { Injectable } from '@angular/core';
  import {Contact} from '../model/contact';
  import {merge, Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts:Contact[]=[];
  private active:Contact|null=null;
  private contactsSubject:Subject<Contact[]>=new Subject<Contact[]>();
  private activeContactSubject:Subject<Contact|null>=new Subject();
  getContacts():Observable<Contact[]>{
    return merge(this.contactsSubject, of(this.contacts));
  }


  public addContact(contact:Contact){
    this.contacts.push(contact);
    this.contactsSubject.next(this.contacts);
  }

  public activateContact(contact: Contact|null){
    this.active=contact;
    this.activeContactSubject.next(contact);
  }

  public getActiveContact():Observable<Contact|null>{
    return this.activeContactSubject;
  }
  deleteContact(contact:Contact|null){
    if(this.active==null) this.activateContact(null);
    this.contacts=this.contacts.filter(c=>c!==contact);
     this.contactsSubject.next(this.contacts);
  }
 }
