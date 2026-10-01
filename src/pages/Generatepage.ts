import {Page , Locator} from "@playwright/test";

export class Generatreciptepage{
    page:Page;
    generaterecipt:Locator;
    tripno:Locator;
    customername:Locator;
    customerphnumber:Locator;
    constructorname:Locator;
    adress:Locator;
    sandquantity:Locator;
    sandunit:Locator;
    sandsupplypointname:Locator;
    availablesand:Locator;
    regestrationadress:Locator;
    drivername:Locator;
    drivermobilenumber:Locator;
    vehicalplatenumber:Locator;
    vehicaltrip:Locator;
    generaterecipt_button:Locator;

    constructor(page:Page){

        this.page=page;
        this.generaterecipt=page.getByRole('link', { name: 'Generate Receipt' });
        this.tripno=page.getByRole('textbox', { name: 'Trip No' });
        this.customername=page.getByRole('textbox', { name: 'Customer Name (required)' });
        this.customerphnumber=page.getByRole('textbox', { name: 'Customer Mobile No (required)' });
        this.constructorname=page.getByRole('textbox', { name: 'Construction Name' });
        this.adress=page.getByRole('textbox', { name: 'Address', exact: true });
        this.sandquantity=page.getByRole('spinbutton', { name: 'Sand Quantity (required)' });
        this.sandunit=page.getByLabel('Sand Unit* (required)');
        this.sandsupplypointname=page.locator("#supplyPoint");
        this.availablesand=page.getByRole('spinbutton', { name: 'Available Sand' });
        this.regestrationadress=page.locator("#registrationAddress");
        this.drivername=page.getByRole('textbox', { name: 'Driver Name (required)' });
        this.drivermobilenumber=page.getByRole('textbox', { name: 'Driver Mobile No (required)' });
        this.vehicalplatenumber=page.getByRole('textbox', { name: 'Vehicle No (required)' });
        this.vehicaltrip=page.getByLabel('Vehicle Trip* (required)');
        this.generaterecipt_button=page.getByRole('button',{name:"Generate Receipt"});

    }

    async thirdpage(){
        await this.page.goto("https://ap-sand-govt.web.app/receipts/new")
    }

    async Sanddetails(tripno:string,customername:string,customerphnumber:string,constructorname:string,adress:string,sandquantity:string,sandsupplypointname:string,availablesand:string,regestrationadress:string,drivername:string,drivermobilenumber:string,
        vehicalplatenumber:string)
    {
        await this.generaterecipt.click();
        await this.tripno.click();
        await this.tripno.fill(tripno);
        await this.customername.click();
        await this.customername.fill(customername);
        await this.customerphnumber.click();
        await this.customerphnumber.fill(customerphnumber);
        await this.constructorname.click();
        await this.constructorname.fill(constructorname);
        await this.adress.click();
        await this.adress.fill(adress);
        await this.sandquantity.click();
        await this.sandquantity.fill("100");
        await this.sandunit.click();
        await this.sandunit.selectOption("Ton");
        await this.sandsupplypointname.click();
        await this.sandsupplypointname.fill(sandsupplypointname);
        await this.availablesand.click();
        await this.availablesand.fill("100");
        await this.regestrationadress.click();
        await this.regestrationadress.fill(regestrationadress);
        await this.drivername.click();
        await this.drivername.fill(drivername);
        await this.drivermobilenumber.click();
        await this.drivermobilenumber.fill(drivermobilenumber);
        await this.vehicalplatenumber.click();
        await this.vehicalplatenumber.fill(vehicalplatenumber);
        await this.vehicaltrip.click();
        await this.vehicaltrip.selectOption("Trucktor")
        await this.generaterecipt_button.click();

    }
}