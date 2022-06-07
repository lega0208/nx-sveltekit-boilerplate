import test from './test.svelte';
import { render } from '@testing-library/svelte';

it('it works', async () => {
  const { getByText } = render(test);

  expect(getByText('Hello component!'));
});
