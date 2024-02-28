import { Injectable } from '@angular/core';

export type UserDetails = {

    name: string,
    age: number | null,
    email: string,
    phone: string,
    query: string
}

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private userDetails: UserDetails = {

    name: "",
    age: null,
    email: "",
    phone: "",
    query: ""
  }

  setUserDetails(userDetails: UserDetails){

    this.userDetails = userDetails
  }

  getUserDetails(): UserDetails {

    return this.userDetails
  }

}
