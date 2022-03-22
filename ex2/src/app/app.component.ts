import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade1-tc2';

  @Input() parteMenuListar: boolean;
  @Input() parteMenuCadastro: boolean;

  showType(parteMenu: string): void {
    if(parteMenu == "listar"){
      this.parteMenuCadastro = false;
      this.parteMenuListar = true;
    }else{
      this.parteMenuListar = false;
      this.parteMenuCadastro = true;
    }
  }

  sucessCadastro(): void{
    document.getElementsByClassName('sucessNotification')[0].classList.add('sucessCadastro');
    setTimeout(() => {
      document.getElementsByClassName('sucessNotification')[0].classList.remove('sucessCadastro');
    }, 4000);
  }

  ngOnInit(): void {
    this.parteMenuListar = true;
  }
}
