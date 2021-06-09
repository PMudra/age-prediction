import { newE2EPage } from '@stencil/core/testing';

describe('age-prediction', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<age-prediction></age-prediction>');

    const element = await page.find('age-prediction');
    expect(element).toHaveClass('hydrated');
  });
});
