import { Component, ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css'],
})
export class LicenseComponent {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  columnDefs: ColDef[] = [
    { field: 'Company', headerName: 'Company', width: 130 },
    { field: 'ContectPersion', headerName: 'Contect Persion', width: 150 },
    { field: 'Telephone', headerName: 'Telephone', width: 120 },
    { field: 'LicenseIssueDate', headerName: 'License Issue Date', width: 165 },
    { field: 'ActivationDate', headerName: 'Activation Date', width: 150 },
    { field: 'ExpiryDate', headerName: 'Expiry Date', width: 130 },
    { field: 'ExtendDate', headerName: 'Extend Date', width: 140 },
    { field: 'AddedVehicles', headerName: 'Added Vehicles', width: 150 },
    { field: 'MaxValue', headerName: 'Max Value', width: 120 },
    {
      field: 'Remark',
      headerName: 'Remark',
      width: 100,
      cellRenderer: () => `<i class="fa-solid fa-message"></i>`,
      cellClass:"centercell"

    },
    {
      field: 'LicenseExpiry',
      headerName: 'License Expiry',
      cellRenderer: () =>
        `<i class="fa-solid fa-circle " style="color: #ea1a1a;"></i>`,
      width: 140,
      cellClass:"centercell"
    },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };
  rowData = [
    {
      Company: 'ABC Inc.',
      ContectPersion: 'John Doe',
      Telephone: '(123) 456-7890',
      LicenseIssueDate: '2023-09-01',
      ActivationDate: '2023-09-15',
      ExpiryDate: '2024-09-01',
      ExtendDate: '2024-09-15',
      AddedVehicles: 50,
      MaxValue: '$100,000',
      Remark: 'Lorem ipsum dolor sit amet',
      LienseExpiry: '2024-09-01',
    },
    {
      Company: 'XYZ Corporation',
      ContectPersion: 'Jane Smith',
      Telephone: '(555) 123-4567',
      LicenseIssueDate: '2023-08-15',
      ActivationDate: '2023-08-30',
      ExpiryDate: '2024-08-15',
      ExtendDate: '2024-08-30',
      AddedVehicles: 75,
      MaxValue: '$150,000',
      Remark: 'Consectetur adipiscing elit',
    },
    {
      Company: 'EFG Ltd.',
      ContectPersion: 'Alice Johnson',
      Telephone: '(789) 987-6543',
      LicenseIssueDate: '2023-07-20',
      ActivationDate: '2023-08-05',
      ExpiryDate: '2024-07-20',
      ExtendDate: '2024-08-05',
      AddedVehicles: 60,
      MaxValue: '$120,000',
      Remark: 'Sed do eiusmod tempor',
    },
    {
      Company: 'LMN Industries',
      ContectPersion: 'Michael Brown',
      Telephone: '(555) 555-5555',
      LicenseIssueDate: '2023-06-10',
      ActivationDate: '2023-06-25',
      ExpiryDate: '2024-06-10',
      ExtendDate: '2024-06-25',
      AddedVehicles: 40,
      MaxValue: '$80,000',
      Remark: 'Ut labore et dolore magna aliqua',
    },
    {
      Company: 'PQR Solutions',
      ContectPersion: 'Sarah Wilson',
      Telephone: '(987) 654-3210',
      LicenseIssueDate: '2023-05-05',
      ActivationDate: '2023-05-20',
      ExpiryDate: '2024-05-05',
      ExtendDate: '2024-05-20',
      AddedVehicles: 55,
      MaxValue: '$110,000',
      Remark: 'Excepteur sint occaecat cupidatat non proident',
    },
  ];
}
