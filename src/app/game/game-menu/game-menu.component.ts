import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss']
})
export class GameMenuComponent implements OnInit {
  @Output() getData: EventEmitter<string> = new EventEmitter<string>();
  @Input() timerDigit: any;
  @Input() PlayerScore: any;
  @Input() ComputerScore: any;
  @Input() isStop: any;

  public valid: boolean = false;
  public visibleBasicBlock: boolean = true;
  public gameMenuForm: FormGroup = new FormGroup({
    "getTimeout": new FormControl("", [
      Validators.pattern("[0-9]{3,}"), Validators.required
    ])
  });

  ngOnInit(): void {
  }

  public clickOnStart(): void {
    this.getData.emit(this.gameMenuForm.controls.getTimeout.value);
    this.visibleBasicBlock = !this.visibleBasicBlock;
  }

  public checkValid(): void {
    this.valid = this.gameMenuForm.controls.getTimeout.valid;
  }
}
