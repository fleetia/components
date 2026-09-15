import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Fleetia Components',
    brandImage: './brand/icon.svg',
    brandUrl: 'https://github.com/fleetia/components',
    brandTarget: '_blank',
  }),
});
