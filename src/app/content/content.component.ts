import { Component, OnInit } from '@angular/core';
import { initConsolidateUrl } from 'src/assets/static-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  consolidateUrl = initConsolidateUrl;

  setConsolidateUrl(value: string) {
    this.consolidateUrl = value;
  }

}
