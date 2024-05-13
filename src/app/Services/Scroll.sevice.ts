import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private triggerSectionScroll = new Subject<void>();

  scrollTriggered$ = this.triggerSectionScroll.asObservable();

  triggerScrollToSection() {
    this.triggerSectionScroll.next();
  }
}
