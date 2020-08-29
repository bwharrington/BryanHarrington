import { MenuContainerPage } from './app.po';

describe('menu-container App', function() {
  let page: MenuContainerPage;

  beforeEach(() => {
    page = new MenuContainerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
