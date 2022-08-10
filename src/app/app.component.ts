import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router){}

//   ngOnInit(){
//   this.router.events.subscribe( (e) => {
//     if (e instanceof NavigationStart) {
//       if (e.url === '/6' || e.url === '/7' || e.url === '/8' || '/9') {
//         this.routeHidden = false;
//       } else {
//         this.routeHidden = true;
//       }
//     }
//   }); 
// }
}
