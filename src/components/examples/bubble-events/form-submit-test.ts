import { OutlineElement } from '../../base/outline-element/outline-element';
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

const elementName = 'form-submit-test';

/**
 * The Form Submit Test component
 */
@customElement(elementName)
export class FormSubmitTest extends OutlineElement {
  render(): TemplateResult {
    return html`
      <form>
        <input
          type="submit"
          style="border: 1px solid black; padding: 0.5rem 1rem; cursor: pointer;"
        />
      </form>
    `;
  }
}
