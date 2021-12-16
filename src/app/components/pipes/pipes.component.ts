import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { validateLocaleAndSetLanguage } from 'typescript';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})

export class PipesComponent implements OnInit {
//to jest producer jest aktywowany kiedy subskrypcja jest zaimplementowana, jest to wtedy cold observable
//hot observable produkuje wartosci kiedy nie ma jeszcze subskrybenta
  observable = Observable.create((observer: any) => {
    try{
      observer.next('Witam!');    
      observer.next('Jak się measz?');
      setInterval(() => {
        observer.next('w srodku interwału')
      },3000);
      // observer.complete();
      // observer.next('To się nie wyśle');
    } catch(err){
      observer.console.error(err);
    }
  }).pipe(
    tap((val: any) => console.log('domyślne:', val)),
    map((val: any) => val.toUpperCase()), 
    tap((val: any) => console.log('dużymi:', val)),   
    map((val: any) => val.toLowerCase()),
    tap((val: any) => console.log('małymi:', val)),
    
  );
  
  // .pipe(share());

  // callback - funkcja jest wywoływana w stosownym dla siebie czasie
  constructor() { }

  //connect to stream
  //callbacks: next, error, complete
  ngOnInit(): void {
    var observer = this.observable.subscribe(
      (next:any) => this.addItem(next),
      (error: any) => this.addItem(error),
      (complete:any) => this.addItem('Complete')
    )

    var observer2 = this.observable.subscribe(
      (next:any) => this.addItem(next),
    )

    // //mozemy dodawac do siebie observery, dzieki temu na dole usuniemy obie subskrypcje

    observer.add(observer2);

    setTimeout(() => {
      observer.unsubscribe()
    },6001)
  }





  addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output")?.appendChild(node);
  }
}
