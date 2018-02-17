import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AnadirClientePage } from '../anadir-cliente/anadir-cliente';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  clientes: any;
  numero: any;

  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
  }

  anadirCliente(): void {
    this.navCtrl.push(AnadirClientePage);
  }

  deleteClientes(): void {
    this.servicio.deleteClientes(this.numero);
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
        console.log('ionViewDidLoad HomedPage');
        this.servicio.getClientes().subscribe(
            (data) => {
                this.clientes = data;
            },
            (error) => {
                console.error(error);
            }
        )
    }


}
