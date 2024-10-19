import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';



@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
constructor( ){
console.log("rana")
}
// gettaskFromService(){
//   this._taskService.getTasks().subscribe((task)=>{
//   })
// }


}
