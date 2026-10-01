import {Page , Locator} from "@playwright/test";

export class Loginpage{
    readonly page:Page;
    readonly email_id:Locator;
    readonly password:Locator;
    readonly login_button:Locator;
    readonly loginerror:Locator;
    

    constructor(page:Page){
        this.page=page;
        this.email_id=page.locator("#email");
        this.password=page.locator("#password");
        this.login_button=page.getByRole("button",{name:"Login"});
        this.loginerror = page.getByText("Unable to login. Please check your email and password."
);

    }
    async firstpage(){
        await this.page.goto(process.env.BASE_URL);
    }
    async firstpagedetails(email_id:string,password:string){
        await this.email_id.click();
        await this.email_id.fill(email_id);
        await this.password.click();
        await this.password.fill(password);
        await this.login_button.click();
    }
    async secondpage(){
        await this.page.goto("https://ap-sand-govt.web.app/dashboard")
    }
}