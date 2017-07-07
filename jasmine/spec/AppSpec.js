describe('Wikipedia Viewer', function() {
  var viewModel;

  describe('Search Input', function() {
    var placeholder = 'Click to search';
    var userInput = 'Hello!';
    var text;

    beforeEach(function() {
      viewModel = new WikiViewerViewModel();
    });

    it('Should show placeholder into input search when app start', function() {
      text = viewModel.search();

      expect(text).toBe(placeholder);
    });

    it('Should hide placeholder when click on', function() {
      viewModel.focusSearch();
      text = viewModel.search();

      expect(text).toBe('');
    });

    it('Should show placeholder when blur and nothing change', function() {
      viewModel.focusSearch();
      viewModel.processSearch();
      text = viewModel.search();

      expect(text).toBe(placeholder);
    });

    it('Should keep user input when blur', function() {
      viewModel.search(userInput);
      viewModel.processSearch();
      text = viewModel.search();

      expect(text).toBe(userInput);
    });
  });

  describe('Clear Button', function() {
    var placeholder = 'Click to search';
    var userInput = 'Hello!';
    var text;

    beforeEach(function() {
      viewModel = new WikiViewerViewModel();
    });

    it('Should keep placeholder when click on', function() {
      viewModel.clearSearch();
      text = viewModel.search();

      expect(text).toBe(placeholder);
    });

    it('Should clear user input and show placeholder when click on', function() {
      viewModel.search(userInput);
      viewModel.clearSearch();
      text = viewModel.search();

      expect(text).toBe(placeholder);
    });

    it('Should show placeholder when click on search and then click on clear', function() {
      viewModel.focusSearch();
      viewModel.clearSearch();
      text = viewModel.search();

      expect(text).toBe(placeholder);
    });
  });
});
