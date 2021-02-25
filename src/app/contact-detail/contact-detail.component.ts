import {Component, OnInit} from '@angular/core';
import {ContactService} from '../service/contact.service';
import {Contact} from '../model/Contact';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  goBack(): void {
    this.location.back();
  }
}
