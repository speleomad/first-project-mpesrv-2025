import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit {
  contact!: Contact | undefined;
  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    //Get the contact ID from the route parameters with snapshot method
    //const contactId = this.route.snapshot.paramMap.get('id');
    //Get the contact ID from the route parameters with reactive method 
      let contactId:any;
    this.route.paramMap.subscribe(result => { contactId = result.get('id') });
    if (contactId) {
      this.contact = this.contactService.getContactbyId(+contactId);
    }
  }
  goToContacts(){
    this.router.navigateByUrl("/contacts");
  }

}
