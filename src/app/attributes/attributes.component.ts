import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fixedUrlParams } from '../../assets/static-data'
import { ImageAttributes } from './models/image-attributes.model';
import { ImageListService } from './services/image-list.service';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  @Output()
  setConsolidateUrl = new EventEmitter();
  imageAttributes: ImageAttributes;
  fixedUrlParams: string = fixedUrlParams;
  consolidatedUrl = '';
  imageList: string[];
  selectedImageIndex: number = 0;

  constructor( private imageListService: ImageListService ) { 
    this.imageList = this.imageListService.getImageList();
    this.imageAttributes = new ImageAttributes(this.imageList[0].split('?')[0] + this.fixedUrlParams, '', '');
  }

  ngOnInit(): void {
    
  }

  updateBaseUrl(target: any, selectedIndex:  number) {
    if(target !== null ) {
      this.imageAttributes.imageUrl = target.getAttribute('src').split('?')[0]  + this.fixedUrlParams;
    }
    this.selectedImageIndex = selectedIndex;
  }

  isSelected(index: number) {
    return this.selectedImageIndex == index;
  }

  applyAttributes() {
    this.consolidatedUrl = this.imageAttributes.imageUrl;
    this.appendParams();
    this.setConsolidateUrl.emit(this.consolidatedUrl);
    this.resetData();
  }

  appendParams() {
    for (let property in this.imageAttributes) {
      let key = property;
      let value =  this.imageAttributes[property as keyof ImageAttributes];
      if (value && key !== 'imageUrl') {
        if(key === 'blend') {
            value = value.substring(1);
        }
        this.consolidatedUrl += '&' + key + '=' + encodeURIComponent(value);
      }
    }
  }

  getImageTextLength() {
    return this.imageAttributes.txt.length;
  }

  resetData() {
    this.consolidatedUrl = '';
  }

}
