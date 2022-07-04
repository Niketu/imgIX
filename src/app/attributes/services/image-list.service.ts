import { Injectable } from '@angular/core';
import { imageList } from 'src/assets/static-data';

@Injectable({
    providedIn: 'root'
})
export class ImageListService {

    constructor() { }

    getImageList(): string[] {
        return imageList;
    }
}