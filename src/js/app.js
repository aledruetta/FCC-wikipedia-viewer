$(document).ready(function() {
  'use strict';

  ko.applyBindings(new WikiViewerViewModel());
});

function WikiViewerViewModel() {
  'use strict';

  var self = this;
  var searchPlaceholder = 'Click to search';
  var inputLong = false;

  this.search = ko.observable(searchPlaceholder);
  // this.search.subscribe(function(latest) {
  //   console.log(latest);
  // }, this);
  this.isFormCentered = ko.observable(true);

  this.focusSearch = function() {
    console.log('focusSearch');
    this.growSearch();

    if (self.search() === searchPlaceholder) {
      this.search('');
    }
  };

  this.clickClear = function() {
    console.log('clickClear');
    this.shrinkSearch();

    if (self.search() !== searchPlaceholder) {
      this.search(searchPlaceholder);
    }
  };

  this.processSearch = function() {
    console.log('processSearch');
    if (this.search() === '') {
      this.search(searchPlaceholder);
      this.shrinkSearch();
    } else {
      this.isFormCentered(false);
    }
  };

  this.growSearch = function() {
    var $input = $('.input-container');
    var $clear = $('.clear-container');

    if (!inputLong) {
      $input.css('width', '38em');
      $clear.css({
        'transform': 'translateX(16.5em)'
      });

      inputLong = true;
    }
  };

  this.shrinkSearch = function() {
    var $input = $('.input-container');
    var $clear = $('.clear-container');

    if (inputLong) {
      $input.css('width', '19em');
      $clear.css({
        'transform': 'translateX(7em)'
      });

      inputLong = false;
    }
  };

}
