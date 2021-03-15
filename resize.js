/* global $ */

import { throttleDomAfterAsync } from '../helpers/throttle';

// class noting if browser has ever been resized (used to finish all css animation)
$(window).one('resize', () => $('html').addClass('was-resized'));

// dynamically recalculates the viewport height, taking mobile url bars into account.
// tradeoff if used will is a jumpiness on scroll on mobile browsers
const setVHUnitDesktop = () => {
  if (window.innerWidth > 580) {
    window.setVHUnit();
  }
};

window.addEventListener('resize', throttleDomAfterAsync(setVHUnitDesktop, 50));
window.addEventListener(
  'orientationchange',
  throttleDomAfterAsync(window.setVHUnit, 200),
);
