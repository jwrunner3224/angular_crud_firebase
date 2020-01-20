import { Component, OnInit } from '@angular/core';
import { DocumentService } from './../../services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents;
  id;
  constructor(
    private _documentService : DocumentService,
  ) { }

  ngOnInit() {
    this.getDocumentList();
  }

  getDocumentList = () =>
  this._documentService
    .GetDocumentList()
    .subscribe(res => {
      this.documents = res;
    });

    deleteDocument = data => this._documentService.DeleteDocument(data);
}
