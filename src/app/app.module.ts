import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {PillOverviewPage} from '../pages/pill-overview/pill-overview';
import {PillCrackerPage} from '../pages/pill-cracker/pill-cracker';
import {MenuPopOverComponent} from '../components/menu-pop-over/menu-pop-over';
import {PillTabs} from '../pages/pill-tabs/pill-tabs';
import {PillSettingsPage} from '../pages/pill-settings/pill-settings';
import {PillHeaderComponent} from "../components/pill-header/pill-header";

@NgModule({
  declarations: [
    MyApp,
    PillTabs,
    PillOverviewPage,
    PillCrackerPage,
    MenuPopOverComponent,
    PillHeaderComponent,
    PillSettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PillTabs,
    PillOverviewPage,
    PillCrackerPage,
    MenuPopOverComponent,
    PillHeaderComponent,
    PillSettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
