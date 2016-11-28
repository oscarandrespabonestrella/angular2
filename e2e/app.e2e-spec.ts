import { SiteAngular2Page } from './app.po';

describe('site-angular2 App', function() {
  let page: SiteAngular2Page;

  beforeEach(() => {
    page = new SiteAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
