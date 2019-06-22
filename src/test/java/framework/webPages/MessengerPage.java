package framework.webPages;

import cucumber.api.java.ca.I;
import gherkin.lexer.Th;
import org.openqa.selenium.By;
import stepdefinition.SharedSD;

public class MessengerPage extends BasePage{

    private By emailField = By.id("email");
    private By passwordField = By.id("pass");
    private By loginButton = By.id("loginbutton");
    private By errorMessage = By.xpath("//div[contains(text(),'Incorrect Email')]");




    public void enterEmail(String email)  {

        setValue(emailField, email);
    }

    public void enterPassword(String password) throws InterruptedException {
    Thread.sleep(4000);
        setValue(passwordField, password);
    }

    public void clickOnLoginButton() throws InterruptedException {

        clickOn(loginButton);
        Thread.sleep(4000);
    }
    public String verifyErrorMessage ()throws InterruptedException {
       return getTextFromElement(errorMessage);

    }
}
