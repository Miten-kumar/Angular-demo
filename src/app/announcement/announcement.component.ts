import { Component, ViewChild, ElementRef } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import Swal from 'sweetalert2';
import {
  NgbModalConfig,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',

  providers: [NgbModalConfig, NgbModal],

  styleUrls: ['./announcement.component.css'],
})
export class AnnouncementComponent {
  @ViewChild('content', { static: false }) content: ElementRef | null = null;
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any): NgbModalRef {
    return this.modalService.open(content);
  }

  columnDefs: ColDef[] = [
    { field: 'subject', headerName: 'Subject' },

    {
      field: 'view',
      headerName: 'View',
      cellRenderer: () => {
        const iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>`;
        const iconElement = document.createElement('div');
        iconElement.innerHTML = iconHTML;
        iconElement.addEventListener('click', () => {
          Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue?',
            icon: 'error',
            confirmButtonText: 'Cool',
          });
        });

        return iconElement;
      },
    },
    { field: 'AnnouncementTime', headerName: 'Announcement Time' },
    { field: 'AnnouncementVia', headerName: 'Announcement Via' },
    { field: 'RecieverUserLevel', headerName: 'Reciever User Level' },
    {
      field: 'Reciever',
      headerName: 'Receiver',
      cellRenderer: () => {
        const iconHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>';

        const iconElement = document.createElement('div');
        iconElement.innerHTML = iconHTML;

        iconElement.addEventListener('click', () => {
          this.open(this.content);
        });

        return iconElement;
      },
    },

    { field: 'EditScedule', headerName: 'Edit Scedule' },
    { field: 'PreviewScedule', headerName: 'Preview Schedule' },
    { field: 'Status', headerName: 'Status' },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  rowData = [
    {
      subject: 'Sample',
      view: '100',
      AnnouncementTime: '2023-09-07 10:00 AM',
      AnnouncementVia: 'Email',
      RecieverUserLevel: 'Admin',
      Reciever: 'User 1',
      EditScedule: 'Edit',
      PreviewScedule: 'Preview',
      Status: 'Active',
    },
    {
      subject: 'Sample',
      view: '50',
      AnnouncementTime: '2023-09-07 11:30 AM',
      AnnouncementVia: 'Notification',
      RecieverUserLevel: 'User',
      Reciever: 'User 2',
      EditScedule: 'Edit',
      PreviewScedule: 'Preview',
      Status: 'Inactive',
    },
    {
      subject: 'Sample',
      view: '75',
      AnnouncementTime: '2023-09-07 1:45 PM',
      AnnouncementVia: 'SMS',
      RecieverUserLevel: 'Admin',
      Reciever: 'User 3',
      EditScedule: 'Edit',
      PreviewScedule: 'Preview',
      Status: 'Active',
    },
  ];
}
