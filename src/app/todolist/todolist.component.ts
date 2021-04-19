import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  listTask:any = [];
  countTask:number = 0;
  checked: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getListTask() 
  }

  getListTask() {
    let resp= this.http.get("http://localhost:8080/todos/1/items");
    resp.subscribe((data)=>{
     
      this.listTask = data;
  
    });
  }

}
