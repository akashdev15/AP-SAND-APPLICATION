import {expect, test} from "../src/fixtures/MyFixtures";
import { logindetails , sandetails } from "../src/test-driven/Logindetails";

test.describe("AP SAND APPLICATION",()=>{

    test("Loginpage",async({loginpage,page,generatreciptepage})=>{

        console.log("Going through the url..........")

        await loginpage.firstpage();
        await expect(page).toHaveURL(process.env.BASE_URL);
        await loginpage.firstpagedetails(logindetails.email_id,logindetails.password);
        await loginpage.secondpage();
        await expect(page).toHaveURL("https://ap-sand-govt.web.app/dashboard");
        await generatreciptepage.thirdpage();
        await generatreciptepage.sand_details(sandetails.tripno,sandetails.customername,sandetails.customernumber,sandetails.adress,sandetails.sandquantity,sandetails.sandsupplypointname,sandetails.availablesand,sandetails.regestrationadress,sandetails.drivername,sandetails.drivermobilenumber,sandetails.vehicalplatenumber)


    })
})
