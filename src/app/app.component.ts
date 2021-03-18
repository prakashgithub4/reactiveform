import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm';
  form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    age: new FormControl('',[Validators.required])
  });
  get formdata(){
    return this.form.controls;
  }
  onSubmit(){
   console.log(this.form.value);
   
  }
}
