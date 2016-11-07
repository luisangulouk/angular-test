import {Component} from 'angular2/core';
import {Config} from './config.services';
import {StringFeaturesComponent} from './stringfeatures.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [StringFeaturesComponent]
})

export class AppComponent {
	test = Config.MAIN_HEADING;
}
