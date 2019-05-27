import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  setting: Settings =
  {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) 
  {
    this.selectSettings();
   }

  saveSettings()
  {
    localStorage.setItem('settings', JSON.stringify(this.setting));
  }

  selectSettings()
  {
    if(localStorage.getItem('settings'))
    {
      this.setting= JSON.parse(localStorage.getItem('settings')); 
    }
    this.applyTheme(this.setting.theme);
  }

  applyTheme(theme: string)
  {
    let url=`assets/css/colors/${theme}.css`
    this._document.getElementById('theme').setAttribute('href',url);

    this.setting.themeUrl=url;
    this.setting.theme=theme;
    this.saveSettings();
  }
}

interface Settings
{
  themeUrl: string;
  theme: string;
}