package stepdefinition;

import cucumber.api.java.ca.I;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.webPages.AddmeFast;
import org.testng.Assert;

public class AddmeFastSD {
    AddmeFast homePage = new AddmeFast();

    @Given("^I am on AddmeFast home page$")
    public void getPageTitle () {

    }

    @When("^I enter (.+) into (email) text field$")
    public void enterEmailintoemail(String value) {
        homePage.enterEmail(value);
    }
    @Then("^I enter (.+) into (password) text field$")
    public void passwordentering(String value) {
        homePage.enterPassword(value);
    }
    @And("^I click loginButton$")
    public void clickonButton ()throws InterruptedException {
        homePage.clickOnloginButton();
        Thread.sleep(5000);
    }
}
