  class indexPage{
    constructor() {
      this.searchInput = "#id del componente a buscar en la pagina"
      this.searchButton = "#id del boton > .clase del boton"
    }
    search = (element) => {
      cy.get(this.searchInput).type(element);
      cy.get(this.searchButton).click();
    }
  }

  export default new indexPage();