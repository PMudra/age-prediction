import { newSpecPage } from '@stencil/core/testing';
import { AgePrediction } from '../age-prediction';

describe('age-prediction', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AgePrediction],
      html: `<age-prediction></age-prediction>`,
    });
    expect(page.root).toEqualHtml(`
      <age-prediction>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </age-prediction>
    `);
  });
});
