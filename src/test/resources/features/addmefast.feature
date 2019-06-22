@addmefast @regression @social

  Feature: AddmeFast Feature

    Background:
      Given I am on AddmeFast home page

      @addmefast-login
      Scenario: Verify login on Addmefast
        When I enter rtrack2019@gmail.com into email text field
        Then I enter sohel224078 into password text field
        And I click loginButton