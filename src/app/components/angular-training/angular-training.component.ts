import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-training',
  templateUrl: './angular-training.component.html',
  styleUrls: ['./angular-training.component.scss']
})
export class AngularTrainingComponent implements OnInit {

  messageFromChild: string;
  myMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  parentMethod(message: string){
    this.messageFromChild = message;
  }
}
