import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password= ""
  length= 0;
  useLetters =false;
  useNumbers =false;
  useSymbols =false;


  onChangeLength(event:Event){
    this.length= parseInt((event.target as HTMLInputElement).value)
  }

  onChangeUseLetters(){
    this.useLetters= !this.useLetters
  }

  onChangeUseNumbers(){
    this.useNumbers= !this.useNumbers
  }

  onChangeUseSymbols(){
    this.useSymbols= !this.useSymbols
  }

  generatePassword(){
    const numbers = '1234567890';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()-_?¡';

    let validChars =''
    if (this.useLetters) {
      validChars+= letters
    }
    if (this.useNumbers) {
      validChars+= numbers
    }
    if (this.useSymbols) {
      validChars+= letters
    }
    let generatedPassword =""
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword+= validChars[index]
    }
    this.password=generatedPassword
  }
}

