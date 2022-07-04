import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { ToastrModule } from 'ngx-toastr';

import { HeaderComponent } from './header/header.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ResultComponent } from './result/result.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';

const appRoute: Routes = [
  { path: '', component: ContentComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: ContentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AttributesComponent,
    ResultComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    ClipboardModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
