@web @regression @messenger
Feature: Messenger Feature

  Background:
    Given I am on messenger page

  @messenger-1
  Scenario: Verify invalid login from messenger page
    When I enter SohelHelloWrong@tst.com into email text field on home screen
    Then I enter goblingslkjaf into password text fields on home screen
    And I click on loggin button ms
    Then I verify error messes is displayed