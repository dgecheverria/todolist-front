import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  @ViewChild('titleTask') titleTask: any; // a

  listTask:any = [];
  countTask:number = 0;
  checked: boolean = false;
  postId: any;
  taskValue: string = "";

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

  addNewTask(value:any) {
    let title_task = value;
    console.log(title_task);
    // Simple POST request with a JSON body and response type <any>
     this.http.post<any>('http://localhost:8080/todos/1/item', {"title":title_task}).subscribe(data => {
      this.postId = data.id;
      this.titleTask.nativeElement.value = ' '
      this.getListTask();
    }) 
  }

}
