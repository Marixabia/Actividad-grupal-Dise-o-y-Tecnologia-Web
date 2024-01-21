import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { IgxTextHighlightModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootComponent } from './foot/foot.component';
import { BodyComponent } from './body/body.component';
import { CommonModule } from "@angular/common";
import { UserFormComponent } from './user-form/user-form.component';
import { MatDividerModule } from "@angular/material/divider";

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootComponent,
    BodyComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    IgxTextHighlightModule,
    BrowserAnimationsModule
  ],

  providers: [
    provideClientHydration(),
    DatePipe,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
