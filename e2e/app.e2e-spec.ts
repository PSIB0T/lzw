import { LZW3Page } from './app.po';

describe('lzw3 App', () => {
  let page: LZW3Page;

  beforeEach(() => {
    page = new LZW3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
