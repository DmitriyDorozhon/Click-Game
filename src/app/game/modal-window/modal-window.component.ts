import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @Input() playerScore: any;
  @Input() computerScore: any;
  @Output() getRestart: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  public newGame(): void {
    window.location.reload()
  }
}
