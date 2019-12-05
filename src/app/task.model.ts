import {  Parenttask } from '../app/parenttask.model';
export class Task {
    Task_ID: number;   
    TaskName: string;
    Start_Date: Date;
    End_Date: Date;
    Priority: number;
    ParentTaskType: string;
    Parent_ID: number;
    IsTaskEnded: number;
    ParentTask: Parenttask;
}
