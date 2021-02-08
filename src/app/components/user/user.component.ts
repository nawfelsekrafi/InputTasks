import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.name = "Nawfel Sekrafi";
    this.age = 30;
    this.address = {
      street: "amal",
      city: "gabes",
      state: "Medenine"
    }
    this.hobbies = ['write code', 'reading', 'walking'];
    this.hello = 'hahah';
  }

  onClick(){
    this.name = "Hey - Sekrafi";
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i:number){
    this.hobbies.splice(i,1);
  }

}

interface Address {
  street: string,
    city: string,
    state: string
}
