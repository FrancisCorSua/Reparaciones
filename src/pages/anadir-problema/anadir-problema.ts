import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { VerProblemasPage } from "../ver-problemas/ver-problemas";

/**
 * Generated class for the AnadirProblemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadir-problema',
  templateUrl: 'anadir-problema.html',
})
export class AnadirProblemaPage {
    formProblema: FormGroup;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fb: FormBuilder,
        public auth: AuthProvider, public servicio: UserServiceProvider) {

        this.formProblema = this.fb.group({
            evaluacionservicioevaluacionid: ['', [Validators.required]],    
            trabajadortrabajadorid: ['', [Validators.required]],    
            clienteclienteid: ['', [Validators.required]],
            problemacategoria: ['', [Validators.required]],
            problemanota: ['', [Validators.required]],
            problemaestado: ['', [Validators.required]],
            problemafecha: ['', [Validators.required]],
            trabajadorsolicitado: ['', [Validators.required]],
        });
    }

    guardarProblema() {
      var problema = {
        evaluacionServicioEvaluacionID: this.formProblema.get('evaluacionServicioEvaluacionID').value,
        trabajadorTrabajadorID: this.formProblema.get('trabajadorTrabajadorID').value,
        clienteClienteID: this.formProblema.get('clienteClienteID').value,
        problemaCategoria: this.formProblema.get('problemaCategoria').value,
        problemaNota: this.formProblema.get('problemaNota').value,
        problemaEstado: this.formProblema.get('problemaEstado').value,
        problemaFecha: this.formProblema.get('problemaFecha').value,
        trabajadorSolicitado: this.formProblema.get('trabajadorSolicitado').value,
           
             
      }

    
      this.servicio.postProblemas(problema).subscribe(
          (data) => {
              console.log(data);
              this.alertaAnadida();
              this.navCtrl.push(VerProblemasPage);
          },
          (error) => {
              console.log(error);
              this.falloInesperado();
          });
    }

  alertaAnadida() {
      let alert = this.alertCtrl.create({
          title: 'Sin problema',
          subTitle: 'El problema fue añadido correctamente',
          buttons: ['OK']
      });
      alert.present();
  }

  falloInesperado() {
      let alert = this.alertCtrl.create({
          title: 'Ha habido un error',
          subTitle: 'Ha ocurrido un error intentando añadir el problema. Inténtelo de nuevo más tarde.',
          buttons: ['OK']
      });
      alert.present();
  }

  volver(): void {
      this.navCtrl.push(VerProblemasPage);
  }

}