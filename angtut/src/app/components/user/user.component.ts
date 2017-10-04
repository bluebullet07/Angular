import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name:string;
age:number;
email:string;
address:Address;
hobbies:string[];

constructor() { 
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log ('ngOnInit ran...')
    this.name = 'K7';
    this.age = 25; 
    this.email = 'abc@abc.com';
    this.address =
    {
      street:'angular street',
      city:'angcity',
      state:'East Anglia'
    }
    this.hobbies = ['music','movies','cooking','skating']
  }

}

interface Address{
  street:string;
  city:string;
  state:string;
}
