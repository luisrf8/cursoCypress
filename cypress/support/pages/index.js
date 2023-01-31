  class indexPage{
    // Aqui trabajamos con la paginacion, creando componentes con page Objects para luego llamarlos donde los necesitemos
    // constructor() {
    //   this.searchInput = "#id del componente a buscar en la pagina"
    //   this.searchButton = "#id del boton > .clase del boton"
    // }
    // search = (element) => {
    //   cy.get(this.searchInput).type(element);
    //   cy.get(this.searchButton).click();
    // }
    //End  Aqui trabajamos con la paginacion, creando componentes con page Objects para luego llamarlos donde los necesitemos

    //aqui usamos el fixture locators creando el json index.json en la carpeta fixtures
    search = (element) => {
        cy.fixture('index.json').then((locators) => {
        cy.get(locators.searchInput).type(element);
        cy.get(locators.searchButton).click();
        })
      }
    //end aqui usamos el fixture locators creando el json index.json en la carpeta fixtures
    
  }

  export default new indexPage();