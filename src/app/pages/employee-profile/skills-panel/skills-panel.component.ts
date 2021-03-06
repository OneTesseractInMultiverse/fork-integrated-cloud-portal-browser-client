import {Component, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../@fuse/animations';

@Component({
    selector: 'app-skills-panel',
    templateUrl: './skills-panel.component.html',
    styleUrls: ['./skills-panel.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})

export class SkillsPanelComponent {
} // COMPONENT END
