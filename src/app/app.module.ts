import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';

/*Components */
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { DocumentListComponent } from './components/document-list/document-list.component';

/*Service */
import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    AddDocumentComponent,
    EditDocumentComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
