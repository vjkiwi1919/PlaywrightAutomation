class ToysPage  {

    constructor(page){

        this.page = page;
        this.Contact = page.getByRole('link', { name: 'Contact' }).click();
        this.Submit = page.getByRole('link', { name: 'Submit' }).click();

       this.forename = page.locator("#forename").fill('vJ');   
       this.email = page.locator("[name='email']").fill('john@gmail.com');
        // this.phone =  page.getByRole('textbox', { name: 'Telephone' }).fill('123232424242');
        // this.message = page.locator("[placeholder='Tell us about it..']").fill('test automation');
        // this.feedback = page.getByText('We welcome your feedback -').click();
        
    }

    async goTo() 
    {
       await this.page.goto("http://jupiter.cloud.planittesting.com");

    }

async navigateToContact() 
{
    await this.page.getByRole('link', { name: 'Contact' }).click();
    await this.page.getByRole('link', { name: 'Submit' }).click();
    await this.page.locator("#forename").fill('vJ');  
    await this.page.locator("[name='email']").fill('john@gmail.com'); 

}

async checkValidation() 
{
   

}


}
module.exports = {ToysPage};