import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private section = new BehaviorSubject<string>('');

  sectionObservable = this.section.asObservable();

  constructor() { }

  scrollToSection(section: string) {
    this.section.next(section);
  }
}
