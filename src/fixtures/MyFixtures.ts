import { Loginpage } from './../pages/Loginpage';
import { Generatreciptepage } from './../pages/Generatepage';
import {test as base} from "@playwright/test";


type MyFixtures={
    loginpage:Loginpage,
    generatreciptepage:Generatreciptepage,
}

export const test=base.extend<MyFixtures>({
    loginpage: async ({page},use)=>{
        const loignpage=new Loginpage(page)
        await use(loignpage)
    },
    generatreciptepage:async ({page},use)=>{
        const generatreciptepage=new Generatreciptepage(page)
        await use(generatreciptepage)
    }
    
})

export {expect} from "@playwright/test";