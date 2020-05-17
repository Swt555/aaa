import { Injectable } from '@angular/core';
import { TestBService } from './testb.service';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class TestAService {
    title: string;

    constructor(private bSerivice: TestBService) {
        this.title = 'Hello, A';
    }
    getTitle() {
        return this.title;
    }
    setTitle(t: string) {
        this.title = t;
    }
}