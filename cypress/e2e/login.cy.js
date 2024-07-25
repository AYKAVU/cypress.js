describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //Зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

         cy.get('#mail').type('german@dolnikov.ru'); // нашел поле Логин и ввел правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Нашел поле Пароль и ввел правильный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю текст на экране авторизации
         cy.get('#messageHeader').should('be.visible'); // Проверяем на экране авторизации что есть текст, и что он видимый
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем на экране авторизации что есть крест, и что он видимый
         cy.get('#exitMessageButton > .exitIcon').click(); // кликаем кнопку выхода
    })

    it('Рабочая кнопка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#forgotEmailButton').click(); // кликаю на кнопку восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // выбираем поле ввода email, и вводим валидную почту
        cy.get('#restoreEmailButton').click(); // Кликаем на кнопку 'Отправить код'
        cy.get('#messageHeader').should('be.visible');// Проверяем на экране сброса пароля что есть текст, и что он видимый
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю текст на экране сюроса пароля
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем на экране авторизации что есть крест, и что он видимый
        cy.get('#exitMessageButton > .exitIcon').click(); // кликаем кнопку выхода
    })

    it('Ошибка авторизации - неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#mail').type('german@dolnikov.ru'); // нашел поле Логин и ввел правильный логин
        cy.get('#pass').type('iDontLoveqastudio1'); // Нашел поле Пароль и ввел не правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю текст на экране авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяем на экране авторизации что есть текст, и что он видимый
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем на экране авторизации что есть крест, и что он видимый
        cy.get('#exitMessageButton > .exitIcon').click(); // кликаем кнопку выхода
    })

    it('Ошибка авторизации - неправильный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#mail').type('negerman@dolnikov.ru'); // нашел поле Логин и ввел не правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашел поле Пароль и ввел правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю текст на экране авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяем на экране авторизации что есть текст, и что он видимый
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем на экране авторизации что есть крест, и что он видимый
        cy.get('#exitMessageButton > .exitIcon').click(); // кликаем кнопку выхода
    })

    it('Ошибка валидации - email буз @', function () {
        cy.visit('https://login.qa.studio/'); //Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#mail').type('germandolnikov.ru'); // нашел поле Логин и ввел не валидный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашел поле Пароль и ввел правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю текст на экране авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяем на экране авторизации что есть текст, и что он видимый
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем на экране авторизации что есть крест, и что он видимый
        cy.get('#exitMessageButton > .exitIcon').click(); // кликаем кнопку выхода
    })

    it('Верный пароль и верный логин, но логин с заглавными буквами', function () {
        cy.visit('https://login.qa.studio/'); //Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // нашел поле Логин и ввел правильный логин "ЗДЕСЬ БАГ"
        cy.get('#pass').type('iLoveqastudio1'); // Нашел поле Пароль и ввел правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю текст на экране авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяем на экране авторизации что есть текст, и что он видимый
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем на экране авторизации что есть крест, и что он видимый
        cy.get('#exitMessageButton > .exitIcon').click(); // кликаем кнопку выхода
    })
})