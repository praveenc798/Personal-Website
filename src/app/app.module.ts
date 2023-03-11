import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {TabMenuModule} from 'primeng/tabmenu';
import {SplitterModule} from 'primeng/splitter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExperPageComponent } from './exper-page/exper-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ExperPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AccordionModule,
    TabMenuModule,
    SplitterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
