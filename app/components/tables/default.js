import classic from 'ember-classic-decorator';
import Component from '@ember/component';

@classic
export default class Tables extends Component {

  didRender() {
    this.rendered?.();
  }
}
