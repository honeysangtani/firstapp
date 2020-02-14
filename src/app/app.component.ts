import { Component, HostBinding } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


import {
  trigger, 
  state, 
  style, 
  animate, 
  transition, 
  // ... 
  } from '@angular/animations'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})

export class AppComponent {

  birthday: Date = new Date(1988, 3, 15);
  toggle = true; // start with true == shortDate

  get format(){
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat(){
    this.toggle = !this.toggle;
  }

  rev: String = 'honey';
  
  /////////////////////////////////////////////////////////

  // profileForm =  new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl('')
  // });

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });  

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  updateProfile(){
    
    // this.profileForm.patchValue({
    //   firstName: ['', Validators.required],
    //   lastName : ['']
    // })
    console.log(this.profileForm.value);

  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  

  

  ///////////////////////////////////////////////////////////////////////////

  onSave($event){
    console.log('ii', $event);
  }
  title: string = 'HEllo';
  fullname: string='Hello Javatpoint';

  email = new FormControl(''); 
  updateEmail() { 
    this.email.setValue('tutorial&example@example.com')
  }
  
  servers = [];
  OnAddServer(){
    this.servers.push("Another Server Added");
  }
  onRemoteServer(id:number) {
    const position=id+1;
    this.servers.splice (position, 1);
  }

  constructor(private fb: FormBuilder) { }

}


