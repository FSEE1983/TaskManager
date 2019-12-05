import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Task } from '../app/task.model';
import { Parenttask } from '../app/parenttask.model';

@Injectable({
  providedIn: 'root'
})
export class TaskinfoService {
    private BaseURL = "http://localhost:49504/api/";

    constructor(private httpService: HttpClient) { }


    GetParentTasksList() {
        let Url = this.BaseURL + "ParentTask/";
        return this.httpService.get(Url);
    }

    GetTasksList() {
        let Url = this.BaseURL + "Task/";       
        return this.httpService.get(Url);     
    }
    GetTasksDetails(id: number) {
        let Url = this.BaseURL + "Task/" + "?id=" + id;
        return this.httpService.get(Url);
    }
   EndTask(id: number) {       
        let Url = this.BaseURL + "Task/" + "?id=" + id;        
        return this.httpService.delete<Task>(Url);
    }
    AddUpdateTask(model: Task) {
        let Url = this.BaseURL + "Task";       
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        if (model.Task_ID > 0) {
            Url = Url + "?id=" + model.Task_ID;   
            return this.httpService.put<Task>(Url, JSON.stringify(model), httpOptions);    
        }
        else {
            return this.httpService.post<Task>(Url, JSON.stringify(model), httpOptions);    
        }             
   } 
}
