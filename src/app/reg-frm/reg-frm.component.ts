import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reg-frm',
  templateUrl: './reg-frm.component.html',
  styleUrls: ['./reg-frm.component.css']
})
export class RegFrmComponent implements OnInit {


  applicationFrm!: FormGroup;


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addApplicationFormInputs();


    this.applicationFrm.patchValue({
      appId: Math.floor(Math.random() * 100)
    })
  }

  


  addApplicationFormInputs(){
    this.applicationFrm = this.formBuilder.group({
      appId: ['', Validators.required],
      appDate: ['',Validators.required],
      appName: ['', Validators.required],  
      appRole: ['', Validators.required],
      appDOB: ['', Validators.required],
      appGender: ['', Validators.required ], 
      appAge: ['',Validators.required], 
      appMobile: [''], 
      appEml: [''], 
      appRsn: [''], 
      appExp: ['',Validators.required], 
      appCCmp: [''], 
      appNP: [''], 
    });
  }

  clearForm() {
   
      this.applicationFrm.reset();
  }


  saveFormDetails() {
    console.log(this.applicationFrm.value);
  }

}
