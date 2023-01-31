import { renderLinkElement } from './helpers';

const applyConfig = (config) => {
  config.settings.slate.elements = {
    ...config.settings.slate.elements,
    h1: renderLinkElement('h1'),
    h2: renderLinkElement('h2'),
    h3: renderLinkElement('h3'),
    h4: renderLinkElement('h4'),
  };
  return config;
};

export default applyConfig;
