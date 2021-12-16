import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-angular-child',
  templateUrl: './angular-child.component.html',
  styleUrls: ['./angular-child.component.scss']
})
export class AngularChildComponent implements OnInit {

  @Input() textFromParent: string;
  @Input() color: string;
  @Input() count: number;
  @Output() btnClick: EventEmitter<string> = new EventEmitter<string>();
  messageInChild: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(message: string){
    this.btnClick.emit(message);
  }

  onSubmit(){
    this.btnClick.emit(this.messageInChild);
  }

}
