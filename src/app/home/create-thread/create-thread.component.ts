import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AllThreadsService, Thread } from 'src/app/global_services/all-threads.service';
import { AllUsersService } from 'src/app/global_services/all-users.service';
import * as uuid from "uuid";
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {
  threadForm: FormGroup
  editing: boolean;
  threadToEdit: Thread
  messages: any[] = [];
  subscription: Subscription;
  message:any;

  constructor(private userService: AllUsersService, private threadService: AllThreadsService) { 
    this.subscription = this.threadService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        this.message = message
        this.editing = true
        this.threadForm.value.title = this.message.message.title
        this.threadForm.value.content = this.message.message.content 
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }

  ngOnInit(): void {
    this.initForm()
    this.editing = this.threadService.editing
    this.threadToEdit = this.threadService.threadToEdit
  }

  onSubmit(){
    if(this.editing){
      const threadList: any = this.threadService.allThreads.map((s)=>{        
        if(s.id === this.message.message.id){
          s.content = this.threadForm.value.content
          s.title = this.threadForm.value.title
        }
      })
      this.editing = false
      this.threadService.editing = false
      return;
    }
    const thread = {...this.userService.currentUser, title: this.threadForm.value.title, content: this.threadForm.value.content, id: uuid.v4()};
    this.threadService.addThread(thread)
    this.initForm()
    // this.threadService.getMessage().subscribe((e)=>console.log(e));
  }

  private initForm(){
    this.threadForm = new FormGroup({
      'title': new FormControl(null),
      'content': new FormControl(null),
    });
  }
}
