import type { Preview } from '@storybook/html';
import {defineCustomElements} from '../loader';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

defineCustomElements();


export default preview;


