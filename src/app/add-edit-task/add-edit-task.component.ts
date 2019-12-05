import { Component, OnInit, NgModule } from '@angular/core';
import { Task } from '../task.model';
import { Parenttask } from '../parenttask.model';
import { TaskinfoService } from '../taskinfo.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-add-edit-task',
    templateUrl: './add-edit-task.component.html',
    styleUrls: ['./add-edit-task.component.css', './bootstrap.min.css']
})

export class AddEditTaskComponent implements OnInit {

    private taskinfo: Task = new Task();
    private ListParentTask: Parenttask[];
    private TaskID: any; 

    constructor(private ServiceInfo: TaskinfoService, private _Activatedroute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.TaskID = this._Activatedroute.snapshot.params['id'];
        if (this.TaskID == 0) {
            this.taskinfo = new Task();
        }
        else {
            //get task information for Edit
            this.ServiceInfo.GetTasksDetails(this.TaskID).subscribe((data: any) => {
                this.taskinfo = data;
            });
        }
      
        //get parent task
        this.ServiceInfo.GetParentTasksList().subscribe((data: any) => {
            this.ListParentTask = data; 
        });
    }

    SaveTask() {            
        this.taskinfo.ParentTask = this.ListParentTask.find(e => e.Parent_ID == this.taskinfo.Parent_ID);
        if (this.taskinfo.ParentTask != undefined ) {
            this.taskinfo.ParentTaskType = this.taskinfo.ParentTask.ParentTaskType;
            this.taskinfo.Parent_ID = this.taskinfo.ParentTask.Parent_ID;
        }
        this.ServiceInfo.AddUpdateTask(this.taskinfo).subscribe((data: any) => {
            this.router.navigate([`./ViewTask`]);
        });
    }
}
