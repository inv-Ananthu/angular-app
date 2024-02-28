import { Component, OnInit } from '@angular/core';
import { ContactServiceService, UserDetails } from '../../services/contact-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-result.component.html',
  styleUrl: './submit-result.component.css'
})
export class SubmitResultComponent implements OnInit {

  userDetails: UserDetails = {

    name: "",
    age: null,
    email: "",
    phone: "",
    query: ""

  };

  isUserData: boolean = false

  constructor(private contactService: ContactServiceService, private router: Router) {}

  ngOnInit(): void {
    const savedData: UserDetails = this.contactService.getUserDetails();
    if(JSON.stringify(this.userDetails) !== JSON.stringify(savedData)){
      this.userDetails = savedData;
      this.isUserData = true
    }
    else{
      this.isUserData = false
    }
  }

  handleRedirectToHome(): void {

    this.router.navigate([""])
  }
}
