describe('Проверка авторизации', function () {

    it('e2e покупка аватара на покемонах', function () {
        cy.visit('https://pokemonbattle.ru/'); //Зашел на сайт
        cy.get(':nth-child(1) > .auth__input').type('xydbwi228@yandex.ru');
        cy.get('#password').type('D-Link1488228');
        cy.get('.auth__button').click();
        cy.get('.header__btns > :nth-child(4)').click();
        cy.get('.available > button').first().click();
        cy.get('.credit').type('4620869113632996');
        cy.get('.k_input_ccv').type('125')
        cy.get('.k_input_date').type('1225');
        cy.get('.k_input_name').type('NAME');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
   })
})
