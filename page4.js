import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p4 = () =>{
    return __c(
        "div",
        {
            style:"background:#16143a;height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;" + __sC['pages'](),
            id:"p4"
        },
        [
            __SYD.p4SubHeader()
        ]
    )
}

__SYD.p4SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p4SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __SYD.p4_text1(),
            __SYD.p4_text2(),
            __SYD.p4_text3(),
            __SYD.p4_tabs()
        ],
        {
            createState:{
                stateName:"p4SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false}//breakVal:false
            }
        }
    )
}


__SYD.p4_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get() + "color:#b9bcc5;"
        },
        [
            __c(
                "p",
                {},["get $Alita"]
            )
        ]
    )
}


__SYD.p4_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get()
        },
        [
            __c(
                "p",
                {},["get it now on"]
            )
        ]
    )
}


__SYD.p4_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get() + "color:#fff;"} text-align:center;`},["Trade $ALITA securely and instantly on top-tier Solana DEXs. No middlemen, just pure peer-to-peer trading power."])
        ]
    )
}

__SYD.p4_tabs = () =>{
    return __c(
        "div",
        {
            style:"display:flex;row-gap:50px;column-gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;"
        },
        [
            __SYD.p4_tab({title:"uniswap" , src:"uniswap"}),
            __SYD.p4_tab({title:"ByBit" , src:"bybit"}),
            __SYD.p4_tab({title:"OKX" , src:"okx"}),
            __SYD.p4_tab({title:"Binance" , src:"binance"}),
            __SYD.p4_tab({title:"pancakeswap" , src:"pancakeswap"}),
        ]
    )
}

__SYD.p4_tab = ({title , src}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(['p4SubHeader' , 'resize'], false) ? "100%" : "300px"};padding:25px 30px;border-radius:10px;display:flex;gap:16px;justify-content:center;align-items:center;cursor:pointer;background: #fff;flex-direction:row;gap:20px;border:2px solid #0B0A1D;`,
            class:"p4_tab"
        },
        [
            __c(
                "img",
                {
                    style:"height:50px;width:50px;",
                    src:`./assets/${src}.png`
                }
            ),
            __c(
                "p",
                {
                    style:SYD_VAR.page2Text2.get() + "color:#16143a;"
                },
                [
                    `${title}`
                ]
            ),
        ]
    )
}