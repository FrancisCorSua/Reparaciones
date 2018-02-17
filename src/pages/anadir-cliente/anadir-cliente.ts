import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { HomePage } from "../home/home";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";


/**
 * Generated class for the AnadirClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadir-cliente',
  templateUrl: 'anadir-cliente.html',
})
export class AnadirClientePage {
    formCliente: FormGroup;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fb: FormBuilder,
        public auth: AuthProvider, public servicio: UserServiceProvider) {

        this.formCliente = this.fb.group({
            clienteUsuario: ['', [Validators.required]],
            clienteContrasena: ['', [Validators.required]],    
            clienteNombre: ['', [Validators.required]],    
            codigoPostal: ['', [Validators.required]],    
            clienteTelefono: ['', [Validators.required]],  
        });
    }

    guardarCliente() {
      var cliente = {
        clienteUsuario: this.formCliente.get('clienteUsuario').value,
        clienteContrasena: this.formCliente.get('clienteContrasena').value,
        clienteNombre: this.formCliente.get('clienteNombre').value,
        codigoPostal: this.formCliente.get('codigoPostal').value,
        clienteTelefono: this.formCliente.get('clienteTelefono').value,
      }

    
      this.servicio.postClientes(cliente).subscribe(
          (data) => {
              console.log(data);
              this.alertaAnadida();
              this.navCtrl.push(HomePage);
          },
          (error) => {
              console.log(error);
              this.falloInesperado();
          });
    }

  alertaAnadida() {
      let alert = this.alertCtrl.create({
          title: 'Sin problema',
          subTitle: 'El cliente fue añadido correctamente',
          buttons: ['OK']
      });
      alert.present();
  }

  falloInesperado() {
      let alert = this.alertCtrl.create({
          title: 'Ha habido un error',
          subTitle: 'Ha ocurrido un error intentando añadir al cliente. Inténtelo de nuevo más tarde.',
          buttons: ['OK']
      });
      alert.present();
  }

  volver(): void {
      this.navCtrl.push(HomePage);
  }

}