/*import {Page , Locator} from "@playwright/test";

export class Registrationpage{
    page:Page;

    createone:Locator;
    name:Locator;
    emailid:Locator;
    mobilenumber:Locator;
    password:Locator;
    confirmpass:Locator;
    sinup:Locator;

    constructor(page:Page){
        this.page=page;
        this.createone=page.getByRole("link",{name:"Create one now"});
        this.name=page.locator("#name");
        this.emailid=page.locator("#email");
        this.mobilenumber=page.locator("#mobile");
        this.password=page.locator("#password");
        this.confirmpass=page.locator("#confirmPassword");
        this.sinup=page.getByRole("button",{name:"Signup"})


    }

    async createonepage(){
        await this.page.goto(`/signup`)
    }

    async sinupdetails(name:string,emailid:string,mobilenumber:string,password:string,confirmpass:string){
        await this.createonepage();
        await this.createone.click();
        await this.name.click();
        await this.name.fill(name);
        await this.emailid.click();
        await this.emailid.fill(emailid);
        await this.mobilenumber.click();
        await this.mobilenumber.fill(mobilenumber);
        await this.password.click();
        await this.password.fill(password);
        await this.confirmpass.click();
        await this.confirmpass.fill(confirmpass);
        await this.sinup.click();

    }
}
    */