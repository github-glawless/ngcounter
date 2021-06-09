import { Component } from '@angular/core';

interface HTMLElementStyles {
  backgroundColor?: string,
  color?: string,
  fontSize?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'theNewTitle'  ;
  
  titleStyle: HTMLElementStyles = {
    backgroundColor: 'red',
    color:'blue',
    fontSize: '2em'
  }
  theNumbers: number[] = [1,2,3]
  constructor () {}

  addNumberToTheNumbers():void {
    const nextNumber = this.theNumbers.length+1;
    this.theNumbers.push(nextNumber);
    console.log('we are adding a number to theNumbers');
  }

}
