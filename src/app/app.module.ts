import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { BeerCompComponent } from './beer-comp/beer-comp.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// PrimeNg
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {GrowlModule} from 'primeng/growl';


// Angular Material
import {MatInputModule} from '@angular/material/input';
import { CommonService } from './service/common.service';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    BeerCompComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpModule,
    MenubarModule,
    MatCardModule,
    MatExpansionModule,
    DialogModule,
    MatMenuModule,
    MatButtonModule,
    CheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    GrowlModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
