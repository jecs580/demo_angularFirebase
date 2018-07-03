import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// servicios
import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { AdicionlistaComponent } from './components/adicionlista/adicionlista.component';
import {FormsModule} from '@angular/forms'; // esta importacion fue colocada con ayuda de un
// video en la documentacion de angular con se encuentra el como importar

// Fin servicios
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AdicionlistaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
