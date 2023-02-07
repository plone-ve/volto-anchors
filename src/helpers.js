import { isArray } from 'lodash';
import config from '@plone/volto/registry';
import { serializeNodes } from '@plone/volto-slate/editor/render';
import { UniversalLink } from '@plone/volto/components';
import linkSVG from '@plone/volto/icons/link.svg';

import './less/slate-anchors.less';

export const createSlateParagraph = (text) => {
  return isArray(text) ? text : config.settings.slate.defaultValue();
};

export const serializeText = (text) => {
  return isArray(text) ? serializeNodes(text) : text;
};

export const openAccordionIfContainsAnchors = (anchor) => {
  if (typeof window !== 'undefined') {
    const anchorElement = document.querySelector(anchor);
    if (
      anchorElement !== null &&
      anchorElement.closest('.accordion') !== null
    ) {
      const comp = anchorElement.closest('.accordion').querySelector('.title');
      if (!comp.className.includes('active')) {
        comp.click();
      }
    }
    // if (anchorElement !== null && anchorElement.closest('.tabs') !== null) {
    //   const comp = anchorElement.closest('.tabs').querySelector('.item');
    //   if (!comp.className.includes('active')) {
    //     comp.click();
    //   }
    // }
  }

  return true;
};

export const renderLinkElement = (tagName) => {
  function LinkElement({ attributes, children, mode = 'edit', className }) {
    const Tag = tagName;
    const slug = attributes.id || '';

    return (
      <Tag className={className} {...attributes}>
        {mode === 'view' && slug && (
          <UniversalLink
            className="anchor"
            aria-hidden="true"
            tabIndex={-1}
            href={`#${slug}`}
          >
            <svg
              {...linkSVG.attributes}
              dangerouslySetInnerHTML={{ __html: linkSVG.content }}
              width="2em"
              height={null}
            ></svg>
          </UniversalLink>
        )}
        {children}
      </Tag>
    );
  }
  LinkElement.displayName = `${tagName}LinkElement`;
  return LinkElement;
};
