class CheckoutPage {

    editarDadosCheckout(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email, observacoes){
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#order_comments').type(observacoes)
        cy.get('#payment_method_bacs').check()
        cy.get('#terms').check()
        cy.get('#place_order').click()
    }

}

export default new CheckoutPage()