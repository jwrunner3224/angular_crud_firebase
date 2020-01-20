import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDocumentComponent } from './components/add-document/add-document.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { DocumentListComponent } from './components/document-list/document-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-document' },
  { path: 'add-document', component: AddDocumentComponent },
  { path: 'edit-document/:id', component: EditDocumentComponent },
  { path: 'document-list', component: DocumentListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
