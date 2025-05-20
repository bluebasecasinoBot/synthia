import { __c, __m, __SYD, __v, manage_mediaQuery, SYD_VAR } from "./sydneyDom_v3.js"

import "./nav.js"
import "./page1.js"
import "./page2.js"
import "./page3.js"
import "./page4.js"
import "./page5.js"
import "./page6.js"
import "./page7.js"
import "./footer.js"
import "./variable.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:`min-height:100vh;width:100vw;background:${" #03cefc "};font-family:font2; padding:15px;color:#000;`
        },
        [
            __SYD.navBar(),
            __SYD.p1(),
            // __SYD.p2(),
            // __SYD.p3(),
            // __SYD.p4(),
            __SYD.p5(),
            // // __SYD.p6(),
            // __SYD.p7(),
            __SYD.footer_main_parent()
        ],
        {
            createState:{
                stateName:"container"
            }
        }
    )
}

__m(__SYD.container() , ()=>{manage_mediaQuery(window.innerWidth);});