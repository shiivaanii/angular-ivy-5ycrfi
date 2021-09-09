import { Component } from '@angular/core';
import candidateData from './candidate.json';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

interface Candidate {
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}
  candidateForm = this.formBuilder.group({
    first_name: '',
    last_name: '',
    email: '',
    gender:''
  });
  searchword: any;

  candidates: Candidate[] = candidateData;

  searchThis() {}

  onSubmit() {}
}
