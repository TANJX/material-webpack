console.log('hello world');
import {MDCRipple} from '@material/ripple/index';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

const ripple = new MDCRipple(document.querySelector('.foo-button'));

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;