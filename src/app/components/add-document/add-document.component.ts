import { Component, OnInit } from '@angular/core';
import { DocumentService } from './../../services/document.service';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  addDocumentForm:FormGroup;
  constructor(
    private _documentService : DocumentService,
    private router : Router
  ) { }

  ngOnInit() {
    this.addDocumentForm = new FormGroup ({
      title: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      description: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      author: new FormControl (null, [Validators.required, Validators.maxLength(200)])
    })
  }

  submitDocument(form):void{
    this._documentService.AddDocument(form.value);
    this.router.navigate(['document-list']);
  }

}
