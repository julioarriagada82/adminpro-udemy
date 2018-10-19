import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTES } from './app.routes';

//Modulos
import { ServiceModule  } from './services/service.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipe Module
import { PipesModule } from './pipes/pipes.module';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { ModalUploadComponent } from './components/modal-upload/modal-upload.component';

@NgModule({
  declarations: [
    PagesComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ModalUploadComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule,
    PipesModule
  ],
  exports: [ModalUploadComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
