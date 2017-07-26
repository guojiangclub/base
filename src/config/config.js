/**
 * Created by lcfevr on 16/7/18.
 */



let config = {
    env: process.env.NODE_ENV,
    PROJECT:process.env.NODE_ENV == 'development' ? globalConfigs.GLOBAL.PROJECT : window.globalConfigs.GLOBAL.PROJECT,
    VERSION:process.env.NODE_ENV == 'development' ? globalConfigs.GLOBAL.VERSION : window.globalConfigs.GLOBAL.VERSION,
    doc_title:'',
    baseUrl:process.env.NODE_ENV == 'development' ? globalConfigs.GLOBAL.baseUrl : window.globalConfigs.GLOBAL.baseUrl,
    isIPad: /ipad/i.test(window.navigator.userAgent),
    isIphone: /iphone|ipad|ipod/i.test(window.navigator.userAgent),
    isWechat: /MicroMessenger/i.test(window.navigator.userAgent),
    isUCBrowser: /UCWEB|UCBrowser/i.test(window.navigator.userAgent)
};

export default config;
