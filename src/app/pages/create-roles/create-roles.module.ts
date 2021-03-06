import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRolesRoutingModule } from './create-roles-routing.module';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {MaterialModule} from '../../modules/material/material.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CreateRolesComponent} from './create-roles.component';
import { RoleDeclarationModule } from '../declarations/role-declaration.module'


@NgModule({
  declarations: [
    CreateRolesComponent
  ],
  imports: [
    CommonModule,
    CreateRolesRoutingModule,
      //  FUSE MODULE
      FuseSharedModule,
      // EXTERNAL LIBRARIES MODULE
      MaterialModule,
      NgxChartsModule,
      RoleDeclarationModule
  ]
})
export class CreateRolesModule { }
