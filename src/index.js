import ScrollToAnchor from './components/ScrollToAnchor';
import { renderLinkElement } from './helpers';
import tocVariations from './customizations/volto/components/manage/Blocks/ToC/variations';

const applyConfig = (config) => {
  config.settings.slate.useLinkedHeadings = true;
  config.settings.slate.elements = {
    ...config.settings.slate.elements,
    h1: renderLinkElement('h1'),
    h2: renderLinkElement('h2'),
    h3: renderLinkElement('h3'),
    h4: renderLinkElement('h4'),
  };

  if (config.settings.slate.useLinkedHeadings) {
    config.settings.appExtras = [
      ...(config.settings.appExtras || []),
      {
        match: '',
        component: ScrollToAnchor,
      },
    ];
  }

  config.blocks.blocksConfig.toc = {
    ...config.blocks.blocksConfig.toc,
    variations: tocVariations,
  };
  return config;
};

export default applyConfig;
