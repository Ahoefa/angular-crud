import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';

type StateType = {
  value: string;
  disabled: boolean;
};

/**
 * @internal
 * **Note** setSate() function parameter type
 */
export type SetStateParam<T> = Partial<T> | ((state: T) => T);

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent {
  // #region component outputs
  @Output() valueChange = new EventEmitter();
  // #region component outputs

  // #region component input
  @Input() placeholder: string = 'Ecrire une nouvelle publication...';
  // #endregion component output

  @Input() value: string | undefined;

  @HostListener('keypress', ['$event'])
  onKeyPress(e: KeyboardEvent) {
    // On s'assure que le input est pas vide
    const value = (this._state.value ?? '').trim();
    if ((e.code?.toLocaleLowerCase() === 'enter') && value !== '') {
      this.dispatchValueChange();
    }
  }

  private _state: StateType = {
    value: '',
    disabled: false,
  };
  

  /**
   * Creates component instances
   *
   */
  constructor(private changeRef: ChangeDetectorRef) {}

  onInputChange(event?: Event) {
    const value = (event?.target as HTMLInputElement).value.trim();
    // Case the value does not change we doe not fire any change event
    if (value === this._state.value) {
      return;
    }
    this.setState((state) => ({ ...state, value }));
    // this.dispatchValueChange();
    event?.stopPropagation();
  }

  onSearchClick(event?: Event) {
    event?.preventDefault();
    event?.stopImmediatePropagation();
    event?.stopPropagation();
  }

  setState(state: SetStateParam<StateType>) {
    if (typeof state === 'function') {
      this._state = state(this._state);
    }
    this._state = { ...this._state, ...state };
    this.changeRef.markForCheck();
  }

  private dispatchValueChange() {
    this.valueChange.emit(this._state.value);
  }

}
