import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @ViewChildren("item") childrenList: QueryList<'game'> | undefined;
  public countPlayerPoint: number = 0;
  public countComputerPoint: number = 0;
  public timer: number = 3;
  public modalVisible: boolean = false;
  private _timeOut: number = 0;
  private _PointToWin: number = 10;

  ngOnInit(): void {
  }

  public starter(event: string):void {
    this._timeOut = Number(event);
    let startTimer = setInterval(() => {
      if (this.timer >= 1) {
        this.timer--
      } else {
        clearInterval(startTimer);
        this._gameStarted();
      }
    }, 700)
  }

  private _gameStarted(): void {
    if (this.countPlayerPoint === this._PointToWin || this.countComputerPoint === this._PointToWin) {
      this.modalVisible = true;
    } else {
      this._draw();
    }
  }

 public playerClick(event: any): void {
    if (event.target.className === 'inGame') {
      event.target.className = 'player';
      this.countPlayerPoint++;
      this._gameStarted();
    }
  }

  public randomItem(): string {
    let randomItemNumber: string = '';
    randomItemNumber = String(Math.floor(Math.random() * 100));
    return randomItemNumber;
  }

  private _draw(): void {
    let randomId: string = this.randomItem();
    this.childrenList?.forEach((item: any) => {
      if (item.nativeElement.id === randomId) {
        if (item.nativeElement.className === 'computer' || item.nativeElement.className === 'player') {
          this._draw();
        } else {
          item.nativeElement.className = 'inGame';
        }
        setTimeout(() => {
          if (item.nativeElement.className === 'inGame') {
            item.nativeElement.className = 'computer';
            this.countComputerPoint++;
            this._gameStarted();
          }
        }, this._timeOut);
      }
    })
  }

  public restart(event: number):void {
    this.countPlayerPoint = event;
    this.countComputerPoint = event;
    this.modalVisible = false;
    this.childrenList?.forEach((item: any) => {
      item.nativeElement.className = 'game-field__item'
    })
    this.timer = 3;
    this.starter(String(this._timeOut));
  }

}
