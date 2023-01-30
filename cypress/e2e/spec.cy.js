
//  First good testing

// Using "expect" to wait a response

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

//  End First good testing

// Failing test 

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

// End failing test

// Visit Web Page

// Using "visit" to go to the Web Page

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// End Visit Web Page

// Filter page elements 

// Using "contains()" inside parentheses we write what we expect to be filtered

// describe('My First Test', () => {
//   it('finds the content "type"', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type')
//   })
// })

// End Filter page elements 

// Seleccionando un elemento de la pantalla y realizarle la funcion correspondiendo para ver si hay alguna respuesta 
// describe('My First Test', () => {
//   it('finds the content "type"', () => {
//     cy.visit('https://dev.pagando.tech')
//     //aqui seleccionamos la mira en la parte derecha e inspeccionamos el elemento, luego copiamos el codigo y lo colocamos aqui, realizandole la funcion correspondiente
//     // en este caso seleccionamos el boton de inicio de sesion de pagando y efectivamente nos lleva al login.
//     cy.get('.flex > .text-base').click()

//   })
// })
// End Seleccionando un elemento de la pantalla y realizarle la funcion correspondiendo para ver si hay alguna respuesta 

// Escribir en un Input e iniciar sesion en pagando
// describe('My First Test', () => {
//   it('finds the content "type"', () => {
//     cy.visit('https://dev.pagando.tech')
//     //aqui seleccionamos la mira en la parte derecha e inspeccionamos el elemento, luego copiamos el codigo y lo colocamos aqui, realizandole la funcion correspondiente
//     // en este caso seleccionamos el boton de inicio de sesion de pagando y efectivamente nos lleva al login.
//     cy.get('.flex > .text-base').click()
//     //Luego buscamos los elementos donde vamos a escribir y con la funcion .type("") dentro escribimos lo que querramos escribirle al input
//     cy.get('#email').type("taquilla@example.com")
//     // cy.get('#email').clear() Borra lo que esta en el elemento
//     cy.get('#password').type("taquilla")
//     // Luego darle click e iniciar sesion en el caso del ingreso de pagando 
//     cy.get('.login-p-button').click()
//     cy.get('#dni').type("27195915")
//     cy.get('[type="submit"]').click()
//   })
// })
// End Escribir en un Input e iniciar sesion en pagando

// antes y despues de realizar unas pruebas
  describe('My First Test', () => {
    //con la funcion before va a ejecutar las funciones antes de las pruebas
    before(() => {
      cy.visit('https://dev.pagando.tech')
    })
    //Endcon la funcion before va a ejecutar las funciones antes de las pruebas
    //con la funcion before va a ejecutar las funciones despues de las pruebas
    after (() => {
      cy.log("ejecutando todas las post ejecuciones a las pruebas")
    })
    //End con la funcion before va a ejecutar las funciones despues de las pruebas
    //ejecuta las funciones antes de cada iteracion de prueba
    // beforeEach()
    //End ejecuta las funciones antes de cada iteracion de prueba
    //ejecuta las funciones antes de cada iteracion de prueba
    // afterEach()
    //End ejecuta las funciones antes de cada iteracion de prueba
    it('finds the content "type"', () => {
      //aqui seleccionamos la mira en la parte derecha e inspeccionamos el elemento, luego copiamos el codigo y lo colocamos aqui, realizandole la funcion correspondiente
      // en este caso seleccionamos el boton de inicio de sesion de pagando y efectivamente nos lleva al login.
      cy.get('.flex > .text-base').click()
      //Luego buscamos los elementos donde vamos a escribir y con la funcion .type("") dentro escribimos lo que querramos escribirle al input
      cy.get('#email').type("taquilla@example.com")
      // cy.get('#email').clear() Borra lo que esta en el elemento
      cy.get('#password').type("taquilla")
    // })
    // it('Buscar si esa cedula esta registrada', () => {
      // Luego darle click e iniciar sesion en el caso del ingreso de pagando 
      cy.get('.login-p-button').click()
      cy.get('#dni').type("27195915")
      cy.get('[type="submit"]').click()
    })
  })
// End antes y despues de realizar unas pruebas

// Validar los checkbox
  // describe("Pruebas en los checkbox", () => {
  //   beforeEach(() => {
  //     cy.visit("https://automationexercise.com/")
  //   })
  //   it("Click CheckBox", () => {
  //     //seleccionar
  //     cy.get('el check que vayamos a buscar').check()
  //     // deseleccionar
  //     cy.get('el check que vayamos a buscar').uncheck()
  //   })
  // })
// End Validar los checkbox

// Para filtrar por un select 
  // it ("Order by highest to lowest", () => {
  //   cy.get("element,#id,.class,etc").select("value")
  //   //en el select value vamos a indicar el valor del filtro que querramos buscar buscandolo con el inspeccionador de la interfaz de cypress
  //   //value es sesitive, tiene que ser escrito tal cual como esta en el inspeccionador 
  // })
// End Para filtrar por un select 

// si tengo mas de un elemento con el mismo nombre de seleccion o la misma clase y quiero usar el primer elemento
  // describe("go to different sections", () => {
  //   it("go to first section", () => {
  //     // antes del .click() se coloca la posicion a la que queremos darle click 
  //     cy.get(["class=example"]).first().click();
  //   })
  //   it("go to second section", () => {
  //     // antes del .click() se coloca la posicion en caso de ser un arreglo colocando eq y dentro de los parentesis la posicion del elemento en el arreglo a la que queremos darle click 
  //     cy.get(["class=example"]).eq(2).click();
  //   })
  // })
// End si tengo mas de un elemento con el mismo nombre de seleccion o la misma clase y quiero usar el primer elemento

// asserts
// describe("cuentas", () => {
//   var a=1;
//   it('vamos a ver una igualdad', () => {
//     expect(1==1, "aqui podemos explicar de que va a ser el assert y que posible respuesta esperamos si falla").to.equal(true);
//   })
//   it('vamos a ver que no sea una igualdad', () => {
//     expect(1==2).to.equal(true);
//   })
//   it('vamos a ver que una resta este bien', () => {
//     expect(1-5, "aqui se espera un 0").to.equal(0);
//   })
//   it('vamos a ver que una resta este mal', () => {
//     expect(1-1).to.not.equal(2);
//   })
//   it('tiene que ser verdadero', () => {
//     expect(2==2).to.be.true;
//   })
//   it('tiene que ser falso', () => {
//     expect(2==1).to.be.false;
//   })
//   it("la variable existe", () => {
//     expect(a).to.exist;
//   })
//   it("es menor a 10"), () => {
//     expect(a).to.be.lessThan(10);
//   }
//   it("es mayor a 10"), () => {
//     expect(a).to.be.greaterThan(10);
//   }
// })
// end asserts 

// headless (no cuenta con entorno grafico)
  //abrilos la consola en la carpeta donde tenemos el proyecto en cypress y escribimos: node_modules\.bin\cypress run
  //va a empezar a ejecutar todos los casos en la consola
  
//