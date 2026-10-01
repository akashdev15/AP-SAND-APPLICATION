//import { Registrationpage } from './../pages/Registrationpage';
import { Loginpage } from './../pages/Loginpage';
import { Generatreciptepage } from './../pages/Generatepage';
import {test as base} from "@playwright/test";


type MyFixtures={
    loginpage:Loginpage,
    generatreciptepage:Generatreciptepage,
    //registrationpage:Registrationpage
}

export const test=base.extend<MyFixtures>({
    loginpage: async ({page},use)=>{
        const loignpage=new Loginpage(page)
        await use(loignpage)
    },
    generatreciptepage:async ({page},use)=>{
        const generatreciptepage=new Generatreciptepage(page)
        await use(generatreciptepage)
    },
    //registrationpage:async ({page},use)=>{
    //    const registrationpage=new Registrationpage(page)
    //    await use(registrationpage)
    //}
    
})

export {expect} from "@playwright/test";
