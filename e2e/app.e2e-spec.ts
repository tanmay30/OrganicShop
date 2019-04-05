import { OShopPage } from './app.po';

describe('o-shop App', () => {
  let page: OShopPage;

  beforeEach(() => {
    page = new OShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
