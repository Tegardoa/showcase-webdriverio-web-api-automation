Feature: Add Product to Cart

  Background:
    Given I am on login page
    When I type 'standard_user' on 'username' field
    And I type 'secret_sauce' on 'password' field
    And I click on 'login-button' button
    Then I am on product list page

  @positive
  Scenario: As User want to add single product to cart through product detail
    When I check product data on product card with 'Sauce Labs Onesie' as product name
    And I click on product card with 'Sauce Labs Onesie' as product name
    Then I am on product detail page
    And I validate product title, desc, price, and image is equal to list product page
    When I 'add' product through product detail page
    Then I can see badge on shopping cart with correct total product
    When I click cart button on top navbar
    Then I am on cart page
    And I validate products are added to cart

  @positive
  Scenario: As User want to add multiple product to cart through product detail
    When I check product data on product card with 'Sauce Labs Onesie' as product name
    And I click on product card with 'Sauce Labs Onesie' as product name
    Then I am on product detail page
    And I validate product title, desc, price, and image is equal to list product page
    When I 'add' product through product detail page
    Then I can see badge on shopping cart with correct total product
    When I click on 'back-to-products' button
    And I check product data on product card with 'Sauce Labs Bike Light' as product name
    And I click on product card with 'Sauce Labs Bike Light' as product name
    Then I am on product detail page
    And I validate product title, desc, price, and image is equal to list product page
    When I 'add' product through product detail page
    Then I can see badge on shopping cart with correct total product
    When I click on 'back-to-products' button
    And I check product data on product card with 'Sauce Labs Fleece Jacket' as product name
    And I click on product card with 'Sauce Labs Fleece Jacket' as product name
    Then I am on product detail page
    And I validate product title, desc, price, and image is equal to list product page
    When I 'add' product through product detail page
    Then I can see badge on shopping cart with correct total product
    When I click cart button on top navbar
    Then I am on cart page
    And I validate products are added to cart
