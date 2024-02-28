import { Component } from '@angular/core';
import { ContactServiceService } from '../../services/contact-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  userDetails = {
    name: '',
    age: null,
    email: '',
    phone: '',
    query: ''
  };

  constructor(private contactService: ContactServiceService, private router: Router) {}
  
  handleSubmit() {
    this.contactService.setUserDetails(this.userDetails)
    this.router.navigate(["contact-result"])
  }
  handleClear() {
    Object.assign(this.userDetails, {
      name: '',
      age: null,
      email: '',
      phone: '',
      query: ''
    })
  }
}
