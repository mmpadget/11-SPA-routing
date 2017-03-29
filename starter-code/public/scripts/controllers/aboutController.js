'use strict';

(function(module) {
  const aboutController = {};
  console.log('About view initiated!');

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    console.log('Inside of aboutController.init()');

    // $('.main-nav').on('click', '.tab', function() {
    // $('.tab-content').hide();
    // $(`#${$(this).data('content')}`).fadeIn();
    // });

    // $('.main-nav .tab:first').click();
  };

  module.aboutController = aboutController;
})(window);
