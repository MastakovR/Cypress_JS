describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восст.пар

         cy.get('#mail').type('usermail@e-mail.ru'); //ввел верный логин
         cy.get('#pass').type('passwordcorrect'); //ввел верный пароль
         cy.get('#loginButton').click(); //нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверка после авторизации видно текст
         cy.get('#messageHeader').should('be.visible'); //Сообщение видно пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Виден крестик пол-ю
 })
 it('Верный логин и не верный пароль', function () {
    cy.visit('https://login.qa.studio/'); //зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восст.пар

    cy.get('#mail').type('usermail@e-mail.ru'); //ввел верный логин
    cy.get('#pass').type('passworduncorrect'); //ввел не верный пароль
    cy.get('#loginButton').click(); //нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверка после авторизации видно текст
    cy.get('#messageHeader').should('be.visible'); //Сообщение видно пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Виден крестик пол-ю
 })
 it('Не верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); //зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восст.пар

    cy.get('#mail').type('usermail@e-mail.ru'); //ввел не верный логин
    cy.get('#pass').type('passwordcorrect'); //ввел верный пароль
    cy.get('#loginButton').click(); //нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверка после авторизации видно текст
    cy.get('#messageHeader').should('be.visible'); //Сообщение видно пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Виден крестик пол-ю
 })
 it('Проверка, что есть @', function () {
    cy.visit('https://login.qa.studio/'); //зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восст.пар

    cy.get('#mail').type('usermaile-mail.ru'); //ввел верный логин, без @
    cy.get('#pass').type('passwordcorrect'); //ввел верный пароль
    cy.get('#loginButton').click(); //нажал войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверка после авторизации видно текст
    cy.get('#messageHeader').should('be.visible'); //Сообщение видно пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Виден крестик пол-ю
 })
 it('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); //зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восст.пар

    cy.get('#mail').type('usErmaIl@e-mail.ru'); Ввел верный логин, с заглавными буквами
    cy.get('#pass').type('passwordcorrect'); //Ввел верный пароль
    cy.get('#loginButton').click(); //нажал войти

    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно') 
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Виден крестик пол-ю
    })
 it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); //зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восст.пар

    cy.get('#forgotEmailButton').click(); //нажал восстановить пароль

    cy.get('#mailForgot').type('usermail@e-mail.ru'); //Ввел почту для восстановления
    cy.get('#restoreEmailButton').click(); // Нажал отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверка на совпадение текст
    cy.get('#messageHeader').should('be.visible'); //Сообщение видно пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Виден крестик пол-ю
 })
})
