import { Component, OnInit, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() consolidateUrl!: string;

  copiedMessage = 'Link copied to the clipboard.';

  constructor(
    private clipboard: Clipboard,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  copyLink() {
    this.clipboard.copy(this.consolidateUrl);
    this.toastr.success(this.copiedMessage);
  }


}
