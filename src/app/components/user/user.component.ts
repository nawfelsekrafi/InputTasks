import { Component, OnInit, Testability } from '@angular/core';
import { Post } from 'src/app/post';
import { DataService } from '../../services/data.service';
import { Address } from '../../address';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isEdit :boolean = false;
  name: string;
  age: number;
  email: string = "test@Test.com";
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  constructor(private dataService: DataService) { }

 
  ngOnInit(): void {
    
    this.name = "Omar Ben El Khattab";
    this.age = 30;
    this.address = {
      street: "Makka",
      city: "The Arabian Peninsula",
      state: "no Were"
    }
    this.hobbies = ['write code', 'reading', 'walking','Justice'];
    this.hello = 'hahah';
  }

  onClick(){
    this.name = "Hey - Omar";
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i:number){
    this.hobbies.splice(i,1);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

