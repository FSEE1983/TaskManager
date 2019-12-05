import { Component, OnInit } from '@angular/core';
import { TaskinfoService } from '../taskinfo.service';
import { Router } from '@angular/router';
import { Task } from '../task.model';

@Component({
    selector: 'app-view-task',
    templateUrl: './view-task.component.html',
    styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

    constructor(private ServiceInfo: TaskinfoService, private router: Router) { }

    private taskinfo: Task[];
    private TaskinfoFromService: Task[];

    private TaskName: string;
    private ParentTask: string;
    private PriorityFrom: number;
    private PriorityTo: number;
    private StartDate: Date;
    private EndDate: Date;

    ngOnInit() {
        this.LoadTask();

    }
    LoadTask() {
        this.ServiceInfo.GetTasksList().subscribe((data: any) => {
            this.TaskinfoFromService = data;
            this.taskinfo = data;            
        });
    }

    EditTask(id: number) {        
        this.router.navigate([`./AddEditTask/${id}`]);
    }

    EndTask(id: number) {
        this.ServiceInfo.EndTask(id).subscribe((data: any) => { this.LoadTask(); });
        
    }
    SearchChange() {
        this.taskinfo = this.TaskinfoFromService;
        if (this.TaskName != undefined && this.TaskName.length > 0) {
            this.taskinfo = this.taskinfo.filter(x => x.TaskName.startsWith(this.TaskName)); 
        }               
        if (this.ParentTask != undefined && this.ParentTask.length > 0) {
            this.taskinfo = this.taskinfo.filter(x => (x.ParentTask != null && x.ParentTask != undefined) && x.ParentTask.Parent_Task.startsWith(this.ParentTask));
        } 
        if (this.PriorityFrom != undefined) {
            this.taskinfo = this.taskinfo.filter(x => x.Priority >= this.PriorityFrom);
        } 
        if (this.PriorityTo != undefined) {
            this.taskinfo = this.taskinfo.filter(x => x.Priority <= this.PriorityTo);
        } 
        if (this.StartDate != undefined && this.StartDate.toString().length > 0) {
            this.taskinfo = this.taskinfo.filter(x => x.Start_Date == this.StartDate);
        } 
        if (this.EndDate != undefined && this.EndDate.toString().length > 0) {
            this.taskinfo = this.taskinfo.filter(x => x.End_Date == this.EndDate);
        } 
    }
}
