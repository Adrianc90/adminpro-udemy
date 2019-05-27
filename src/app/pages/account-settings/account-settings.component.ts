import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document,
    public _setting: SettingsService
  ) { }

  ngOnInit() 
  {
    this.applySelect2();
  }

  changeColor( theme: string, link: any)
  {
    this.applySelect(link);
    this._setting.applyTheme(theme);
  }

  applySelect(link: any)
  {
    let selectors: any = document.getElementsByClassName('selector');
    for (let ref of selectors)
    {
      ref.classList.remove('working');     
    }
    link.classList.add('working');
  }

  applySelect2()
  {
    let selectors: any = document.getElementsByClassName('selector');
    let theme= this._setting.setting.theme;
    for (let ref of selectors)
    {
      if(ref.getAttribute('data-theme')=== theme)
      {
        ref.classList.add('working');
        break;
      }
    }
  }
}
