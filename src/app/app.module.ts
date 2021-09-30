import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameMenuComponent } from './game/game-menu/game-menu.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { ModalWindowComponent } from './game/modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameMenuComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
