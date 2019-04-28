import { Component, OnInit } from '@angular/core';
import {GetlistserviceService} from '../services/getlistservice.service';
@Component({
  selector: 'app-get-my-list',
  templateUrl: './get-my-list.component.html',
  styleUrls: ['./get-my-list.component.css']
})
export class GetMyListComponent implements OnInit {

  constructor(private service:GetlistserviceService) { }

    username: String;
    repo =new Array();
    full_name: String;
    length: number;
  ngOnInit() {
  }

  getList(username){
    username = this.username;

   this.service.getList(username).subscribe(repo=>
      {
        this.repo=repo;
        this.length=this.repo.length;
        console.log("found");
        console.log(this.repo.length);
      })



  }


}
