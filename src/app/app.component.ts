import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera pagina';
  texto;

  numero1:number;
  numero2:number;
  resultado:Number;

  public operar(oper): void{
    console.log(this.numero1);
    console.log(this.numero2);

    switch (oper){
      case 's' : this.resultado = this.numero1+this.numero2;
      break;
      case 'r' : this.resultado = this.numero1-this.numero2;
      break;
      case 'm': this.resultado = this.numero1*this.numero2;
      break;
      case 'd' : this.resultado = this.numero1/this.numero2;
      break;
      default: this.resultado = 0;
    }

    
  }


}


