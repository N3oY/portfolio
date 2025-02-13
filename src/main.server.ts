export { AppServerModule as default } from './app/app.module.server';
import 'zone.js/node';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}