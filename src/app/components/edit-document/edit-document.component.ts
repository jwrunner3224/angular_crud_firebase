import { Component, OnInit } from '@angular/core';
import { DocumentService } from './../../services/document.service';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {
  editDocumentForm:FormGroup;
  id:string;

  constructor(
    private _document : DocumentService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.editDocumentForm = new FormGroup ({
      title: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      description: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      author: new FormControl (null, [Validators.required, Validators.maxLength(200)])
    });

    this.id = this.route.snapshot.paramMap.get("id");
    this.getDocument();
  }

  getDocument() {
    this._document.GetDocument(this.id)
    .subscribe(res => {
      this.editDocumentForm.controls['title'].setValue (res.payload.data()['title']);
      this.editDocumentForm.controls['description'].setValue (res.payload.data()['description']);
      this.editDocumentForm.controls['author'].setValue (res.payload.data()['author']);
    });  
  }


  submitDocument(form){
    this._document.updateDocument(this.id, form.value)
    .then(
      res => {
        this.router.navigate(['document-list']);
      }
    )
  }

}
