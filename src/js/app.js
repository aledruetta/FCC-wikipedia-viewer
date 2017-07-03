$(function() {
  'use strict';

  var appViweModel = function() {
    var self = this;
    var searchPlaceholder = 'Click to search';

    this.search = ko.observable(searchPlaceholder);

    this.clickSearch = function() {
      self.search('');
    };

    this.processSearch = function() {
      if (this.search() === '') {
        this.search(searchPlaceholder);
      } else {
        //
      }
    };

    this.clickClear = function() {
      if (self.search() !== searchPlaceholder) {
        self.search(searchPlaceholder);
      }
    };

  };

  ko.applyBindings(new appViweModel());
});
