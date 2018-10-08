import { Component,TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as _ from 'lodash';
// import '~ngx-toastr/toastr.css';
// import '~ngx-toastr/toastr-bs4-alert';
// import '~bootstrap/scss/functions';
// import '~bootstrap/scss/variables';
// import '~bootstrap/scss/mixins';
// import '~ngx-toastr/toastr-bs4-alert';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProj';
  //adding a row variable 
  add = {};
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private toastr: ToastrService) {}
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
 
  viewOpenModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  updateOpenModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  addOpenModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'gray modal-lg' }));
  }
  json =[
    {
      "firstName": "siva",
      "lastName": "prasanna",
      "email": "vsp.anjaneyulu@gmail.com"
    },
    {
      "firstName": "siva",
      "lastName": "prasanna",
      "email": "vsp.anjaneyulu@gmail.com"
    },
    {
      "firstName": "satish",
      "lastName": "kumar",
      "email": "satish@gmail.com"
    },
    {
      "firstName": "shiva",
      "lastName": "dandu",
      "email": "dandusiva@gmail.com"
    },
    {
      "firstName": "mani",
      "lastName": "dandu",
      "email": "manidandu@gmail.com"
    },
    {
      "firstName": "venkat",
      "lastName": "kumar",
      "email": "venkat/kumar@gmail.com"
    },
    {
      "firstName": "renuka",
      "lastName": "kasarla",
      "email": "renu.kasarla@gmail.com"
    },
    {
      "firstName": "tanooja",
      "lastName": "ABc",
      "email": "tanoo.abc@gmail.com"
    },
    {
      "firstName": "eswar",
      "lastName": "katre",
      "email": "katreeswar@gmail.com"
    }
  ];
  //union variable
  unvar;
  addrow(){
    // console.log(this.add);
    // this.json = _.concat(this.add);
    console.log(this.json)
    // _.concat(this.json, [this.add]);
    // _.join(this.json, 'this.add');
   this.unvar = _.unionBy(this.json, [this.add]);
    // console.log(this.unvar);
    this.json = this.unvar;
    this.unvar ={};
  }
  //view data variable
  dataview;
  view(viewtd){
    this.dataview = viewtd;
  }
  // update data variable
  updateview;
  update(updatetd){
   this.updateview = updatetd;
  }
  delete(){
    console.log("delete");
  }
  Swal(){
    this.Swal();
  }
}
