import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from './ConfirmDialogData';

@Component({
  selector: 'app-dialogs-confirm',
  templateUrl: './dialogs-confirm.component.html',
  styleUrls: ['./dialogs-confirm.component.scss']
})

/**
 * https://zoaibkhan.com/blog/create-reusable-confirmation-dialogs-with-angular-material
 * 
 */
export class DialogsConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}

  ngOnInit(): void {
  }

}
