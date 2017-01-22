import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PillOverviewPage} from '../pages/pill-overview/pill-overview';
import { PillCrackerPage } from '../pages/pill-cracker/pill-cracker';
import { MorePopOverPage } from '../pages/menu-pop-over/more-pop-over';
import { PillHeaderPage } from '../pages/pill-tabs/pill-header';
import { PillSettingsPage } from '../pages/pill-settings/pill-settings';

@NgModule({
  declarations: [
    MyApp,
    PillOverviewPage,
    PillCrackerPage,
    MorePopOverPage,
    PillHeaderPage,
    PillSettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PillOverviewPage,
    PillCrackerPage,
    MorePopOverPage,
    PillHeaderPage,
    PillSettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
