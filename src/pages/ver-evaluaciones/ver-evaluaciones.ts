import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AnadirEvaluacionPage } from '../anadir-evaluacion/anadir-evaluacion';

/**
 * Generated class for the VerEvaluacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-evaluaciones',
  templateUrl: 'ver-evaluaciones.html',
})
export class VerEvaluacionesPage {
  evaluaciones: any;
  numero: any;

  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {
  }

  anadirEvaluacion(): void {
    this.navCtrl.push(AnadirEvaluacionPage);
  }

  deleteEvaluacionServicios(): void {
    this.servicio.deleteEvaluacionServicios(this.numero);
  }

  ionViewDidLoad() {
        console.log('ionViewDidLoad HomedPage');
        this.servicio.getEvaluacionServicios().subscribe(
            (data) => {
                this.evaluaciones = data;
            },
            (error) => {
                console.error(error);
            }
        )
    }


}
