import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   //Something to change the lock picture
  flag = false;
  source = '../../../assets/lock.png';
  submit() {
  this.flag = true;

  if ( this.flag ) {
    console.log('unlock');
    this.source = '../../../assets/unlock.png';
  }
}
  constructor() { }

  ngOnInit() {
  }

}
