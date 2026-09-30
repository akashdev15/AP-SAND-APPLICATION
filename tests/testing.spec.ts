import {expect, test} from "../src/fixtures/MyFixtures";
import { logindetails , sandetails , sinindetails } from "../src/test-driven/Logindetails";

test.describe("AP SAND APPLICATION",()=>{

    test("Loginpage",async({loginpage,page,generatreciptepage,registrationpage})=>{

        console.log("Going through the url..........")

        await loginpage.firstpage();
        await expect(page).toHaveURL(process.env.BASE_URL);
        await loginpage.firstpagedetails(logindetails.email_id,logindetails.password);
        await loginpage.secondpage();
        await expect(page).toHaveURL("https://ap-sand-govt.web.app/dashboard");
        await generatreciptepage.thirdpage();
        await generatreciptepage.Sanddetails(sandetails.tripno,sandetails.customername,sandetails.customernumber,sandetails.adress,sandetails.sandquantity,sandetails.sandsupplypointname,sandetails.availablesand,sandetails.regestrationadress,sandetails.drivername,sandetails.drivermobilenumber,sandetails.vehicalplatenumber)
        await registrationpage.createonepage();
        await registrationpage.sinupdetails(sinindetails.name,sinindetails.emailid,sinindetails.mobilenumber,sinindetails.password,sinindetails.confirmpass)

    })
})
