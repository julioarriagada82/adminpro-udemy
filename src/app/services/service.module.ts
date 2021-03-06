import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  HospitalService,
  MedicoService,
  LoginGuardGuard,
  AdminGuard,
  SubirArchivoService
 } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SettingsService, 
              SidebarService, 
              SharedService,
              UsuarioService,
              HospitalService,
              MedicoService,
              LoginGuardGuard,
              AdminGuard,
              SubirArchivoService,
              ModalUploadService],
  declarations: []
})
export class ServiceModule { }
