import ScrollToAnchor from './components/ScrollToAnchor';
import { renderLinkElement } from './helpers';

const applyConfig = (config) => {
  config.settings.slate.elements = {
    ...config.settings.slate.elements,
    h1: renderLinkElement('h1'),
    h2: renderLinkElement('h2'),
    h3: renderLinkElement('h3'),
    h4: renderLinkElement('h4'),
  };

  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '',
      component: ScrollToAnchor,
    },
  ];
  return config;
};

export default applyConfig;
