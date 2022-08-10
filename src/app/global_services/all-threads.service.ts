import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
export interface Thread{
  name: string,
  title: string,
  email: string,
  content: string,
  id: string
}
@Injectable({
  providedIn: 'root'
})
export class AllThreadsService {

  allThreads: Thread[] =[]
  threadToEdit: Thread
  editing: boolean

  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message: Thread) {
    this.subject.next({ message });
}

// clearMessages() {
//     this.subject.next();
// }

getMessage(): Observable<any> {
    return this.subject.asObservable();
}

  addThread(thread: Thread){
    this.allThreads.push(thread)
    console.log(this.allThreads);
  }
  newThread(threads: Thread[]){
    this.allThreads = threads;
  }
  setEdit(thread: Thread, bool: boolean){
    this.threadToEdit = thread
    this.editing = bool
  }
  
}
