import { MyFirstProjectAngular7Page } from './app.po';

describe('my-first-project-angular7 App', function() {
  let page: MyFirstProjectAngular7Page;

  beforeEach(() => {
    page = new MyFirstProjectAngular7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
