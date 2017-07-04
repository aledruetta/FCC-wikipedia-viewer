$(document).ready(function() {
  'use strict';

  var wikiViewerViewModel = new WikiViewerViewModel();
  ko.applyBindings(wikiViewerViewModel);
});

function WikiViewerViewModel() {
  'use strict';

  var self = this;
  var searchPlaceholder = 'Click to search';
  var inputLong = false;

  this.search = ko.observable(searchPlaceholder);
  this.search.subscribe(function(latest) {
    console.log(latest);
  }, this);

  this.clickSearch = function() {
    this.growSearch();

    if (self.search() === searchPlaceholder) {
      self.search('');
    }
  };

  this.clickClear = function() {
    this.shrinkSearch();

    if (self.search() !== searchPlaceholder) {
      self.search(searchPlaceholder);
    }
  };

  this.processSearch = function() {
    if (this.search() === '') {
      this.search(searchPlaceholder);
      this.shrinkSearch();
    } else {
      //
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
