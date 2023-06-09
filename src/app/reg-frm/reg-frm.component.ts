import { Component, OnInit ,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource,  } from '@angular/material/table';
import { MatPaginator  } from '@angular/material/paginator';

import { Applicant } from './applicant.model';

@Component({
  selector: 'app-reg-frm',
  templateUrl: './reg-frm.component.html',
  styleUrls: ['./reg-frm.component.css']
})
export class RegFrmComponent implements OnInit {


  applicationFrm!: FormGroup;

  dispalyedColumns = ['name', 'email', 'phone', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Applicant>();
  @ViewChild('page1', { read: MatPaginator }) firstDataPaginator!: MatPaginator


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addApplicationFormInputs();


    this.applicationFrm.patchValue({
      appId: Math.floor(Math.random() * 100)
    })


    this.dataSource.data = [
      {
      "uid": "1212",
      "name": "Ashok Naik",
      "email": "asnb@mail.com",
      "phone": "8879920190",
      },
      {
        "uid": "1232",
        "name": "Sachin Naik",
        "email": "nb@mail.com",
        "phone": "8879920190",
        },

  
  
  ]

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

  ngAfterViewInit() {
   // this.dataSource.sort = this.firstDataSort;
    this.dataSource.paginator = this.firstDataPaginator;
  }


  saveFormDetails() {
    console.log(this.applicationFrm.value);
  }

}
