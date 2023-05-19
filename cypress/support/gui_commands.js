
Cypress.Commands.add('realizarBuscaProduto', (
    produto = Cypress.env('produto'),
) => {
    const realizarBuscaProduto = () => {
        cy.visit('/')
        cy.get('#twotabsearchtextbox').type(produto)
        cy.get('#nav-search-submit-button').click()
        cy.contains('copo stanley').should('be.visible')
    }
    realizarBuscaProduto()       
})

Cypress.Commands.add('adicionarProdutoCarrinho', () => {
    const adicionarProdutoCarrinho = () => {
        cy.contains('Copo térmico de cerveja Stanley|473ml').click()
        cy.get('#add-to-cart-button').click()
        cy.contains('Adicionado ao carrinho').should('be.visible')
        cy.get('#nav-cart-count').click()
        cy.wait(2000)
        cy.get('.a-truncate-cut').should('be.visible')
        cy.get('.a-truncate-cut').should('have.text','Copo Térmico de Cerveja Matte Black| 473ML')
    }
    adicionarProdutoCarrinho()       
})

Cypress.Commands.add('verificarProdutoInexistente', (
    produtoInexistente = Cypress.env('produtoInexistente'),
) => {
    const verificarProdutoInexistente = () => {
        cy.visit('/')
        cy.get('#twotabsearchtextbox').type(produtoInexistente)
        cy.get('#nav-search-submit-button').click()
        cy.contains('Nenhum resultado para ttttttttttttttt').should('be.visible')
    }
    verificarProdutoInexistente()       
})
