import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AnadirTrabajadorPage } from '../anadir-trabajador/anadir-trabajador';

/**
 * Generated class for the VerTrabajadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-trabajadores',
  templateUrl: 'ver-trabajadores.html',
})
export class VerTrabajadoresPage {
  trabajadores: any;
  numero: any;

  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
  }

  anadirTrabajador(): void {
    this.navCtrl.push(AnadirTrabajadorPage);
  }

  deleteTrabajadores(): void {
    this.servicio.deleteTrabajadores(this.numero);
  }

  ionViewDidLoad() {
        console.log('ionViewDidLoad HomedPage');
        this.servicio.getTrabajadores().subscribe(
            (data) => {
                this.trabajadores = data;
            },
            (error) => {
                console.error(error);
            }
        )
    }


}
