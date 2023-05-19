/// <reference types="Cypress" />

describe('Adicionar produto no carrinho', () =>{
    beforeEach(() => {
        cy.realizarBuscaProduto()    
      })
    it('Adicionar produto no carrinho com sucesso ', () =>{
      cy.adicionarProdutoCarrinho()
    })
  })