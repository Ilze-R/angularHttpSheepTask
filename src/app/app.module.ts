import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { SheepComponent } from './sheep/sheep.component';
import { SingleComponent } from './sheep/single/single.component';

@NgModule({
  declarations: [AppComponent, EntryComponent, SheepComponent, SingleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
