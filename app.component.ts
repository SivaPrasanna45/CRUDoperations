import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'myProj';
  add = {};
  dataview;
  updateview;
  numberOfPages?: number;
  modalRef: BsModalRef;
  currentPage = 1;
  json = [
    ///Your data (array of objects)
  ];

  constructor(private modalService: BsModalService, private toastr: ToastrService) { }
  ngOnInit() {

  }
  defaultModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  swalAlt(updateview) {
    Swal({
      title: 'success!',
      text: updateview.firstName + '  row updated Successfully!!',
      type: 'success'
    });
  }

  viewOpenModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'green modal-lg' }));
  }

  addrow(add) {
    this.toastr.success(add.firstName + '   Row succesfully added!');
    this.json = _.unionBy(this.json, [add]);
    this.add = {};
  }
  view(viewtd) {
    this.dataview = viewtd;
  }

  update(updatetd) {
    this.updateview = updatetd;
  }
  delete(deldata) {
    this.json = _.pull(this.json, deldata);
    this.toastr.success(deldata.firstName + '  row has been Deleted :)');
  }
}
