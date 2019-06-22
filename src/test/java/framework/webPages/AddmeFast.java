package framework.webPages;

import org.openqa.selenium.By;

public class AddmeFast extends BasePage {
    private By emailField = By.xpath("//input[@placeholder='Email']");
    private By passwordField = By.id("//input[@placeholder='Password']");
    private By loingButton = By.id("//input[@name='login_button']");


    public void enterEmail (String email)  {
       setValue(emailField,email);
    }
    public void enterPassword (String password) {
        setValue(passwordField,password);
    }
    public void clickOnloginButton () {
        clickOn(loingButton);
    }

}
