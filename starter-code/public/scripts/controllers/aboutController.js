'use strict';

(function(module) {
  const aboutController = {};
  console.log('About view initiated!');

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    console.log('Inside of aboutController.init()');
    $('.tab-content').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
