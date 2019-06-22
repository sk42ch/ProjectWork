package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.webPages.HomePage;
import framework.webPages.MessengerLoginPage;
import framework.webPages.MessengerPage;
import org.testng.Assert;

public class MessengerSD {


    private MessengerPage messengerPage = new MessengerPage();


    @Given("^I am on messenger page$")
    public void getPageTitle () {
        Assert.assertEquals(SharedSD.getDriver().getTitle(),"Messenger");
    }


    @When("^I enter (.+) into (email|password) text field on home screen$")
    public void messengetTextField (String value, String textField)throws InterruptedException {

        switch (textField) {
            case "email":
            messengerPage.enterEmail(value);
            break;
            case "password":
                messengerPage.enterPassword(value);
                break;
        }

    }

    @When ("^I enter (.+) into (firstname) textfield$")
public void firstnameField(String value){
        messengerPage.enterEmail(value);
    }

    @And("^I click on loggin button ms$")
    public void clickOnLoginButton() throws InterruptedException {
       messengerPage.clickOnLoginButton();
    }
    @Then("^I verify error messes is displayed$")
    public void errorMessageVerify () throws InterruptedException {
        Assert.assertEquals(messengerPage.verifyErrorMessage(), "Incorrect email","Not valied error message");
    }
}
