import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Pipe, PipeTransform} from '@angular/core';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';
import { ToastrModule } from 'ngx-toastr';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
