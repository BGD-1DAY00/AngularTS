import { Component, OnInit } from '@angular/core';
import { AllThreadsService, Thread } from 'src/app/global_services/all-threads.service';
import { AllUsersService, IUser } from 'src/app/global_services/all-users.service';

@Component({
  selector: 'app-show-thread',
  templateUrl: './show-thread.component.html',
  styleUrls: ['./show-thread.component.css']
})
export class ShowThreadComponent implements OnInit {
  allThreads: Thread[]
  currentUser: IUser
  constructor(public threadService: AllThreadsService, public userService: AllUsersService) { }

  ngOnInit(): void {
    this.allThreads = this.threadService.allThreads
    this.currentUser = this.userService.currentUser
  }

  deleteThread(item:Thread){
    const filteredList = this.allThreads.filter((each)=>{
      return each.id !==item.id 
    })
    this.threadService.newThread(filteredList)
    this.allThreads = filteredList
  }
  editThread(item: Thread){
    console.log(item);
    
    this.threadService.setEdit(item, true)
    this.threadService.sendMessage(item)
    console.log(this.threadService.threadToEdit, this.threadService.editing);
    
  }
  
}
