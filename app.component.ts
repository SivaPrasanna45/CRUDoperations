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
      "firstName": "aa",
      "lastName": "aaa",
      "email": "aa.aa@gmail.com"
    },
    {
      "firstName": "bbbb",
      "lastName": "bb",
      "email": "bb.bb@gmail.com"
    },
    {
      "firstName": "cc",
      "lastName": "kuccmar",
      "email": "cc@gmail.com"
    },
    {
      "firstName": "dd",
      "lastName": "daddndu",
      "email": "ddd@gmail.com"
    },
    {
      "firstName": "ee",
      "lastName": "edd",
      "email": "deee@gmail.com"
    },
    {
      "firstName": "ff",
      "lastName": "ff",
      "email": "venkfffat/kumar@gmail.com"
    },
    {
      "firstName": "gg",
      "lastName": "ggggg",
      "email": "reggggnu.ggg@gmail.com"
    },
    {
      "firstName": "hhh",
      "lastName": "ABhhc",
      "email": "tahhhnoo.abc@gmail.com"
    },
    {
      "firstName": "iiii",
      "lastName": "iii",
      "email": "iii@gmail.com"
    }
  ];
  //union variable
  unvar;
  addrow(){

    console.log(this.json)
   
   this.unvar = _.unionBy(this.json, [this.add]);
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
