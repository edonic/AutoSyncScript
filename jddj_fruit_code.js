/*
京东到家果园任务脚本,支持qx,loon,shadowrocket,surge,nodejs
用抓包抓 https://daojia.jd.com/html/index.html 页面cookie填写到下面,暂时不知cookie有效期
抓多账号直接清除浏览器缓存再登录新账号,千万别点退出登录,否则cookie失效
cookie只要里面的deviceid_pdj_jd=xxx-xxx-xxx;o2o_m_h5_sid=xxx-xxx-xxx关键信息,填写整个cookie也是可以的
手机设备在boxjs里填写cookie,nodejs在jddj_cookie.js文件里填写cookie
boxjs订阅地址:https://gitee.com/passerby-b/javascript/raw/master/JD/passerby-b.boxjs.json
TG群:https://t.me/passerbyb2021

[task_local]
10 0,8,11,17 * * * https://raw.githubusercontent.com/passerby-b/JDDJ/main/jddj_fruit.js

================Loon==============
[Script]
cron "10 0,8,11,17 * * *" script-path=https://raw.githubusercontent.com/passerby-b/JDDJ/main/jddj_fruit.js,tag=京东到家果园任务

*/


eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([4acdf-hj-mo-qsu-wyzA-WYZ]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1H $=k API("jddj_fruit");j 1W=\'\',d=\'\',1p=\'\';j 1w=\'30.\'+q.u(q.28()*(2r-29)+29);j 1x=\'114.\'+q.u(q.28()*(2r-29)+29);j 1X=q.u(q.28()*(1500-1e)+1e);j 1y=[],1i=\'\';1q=0,1I=0,1M=\'\',1N=\'\';!(y()=>{f(1y.1r==0){f($.1J.1K){delete 2d.cache[2s];1y=2d(2s)}z{j 1Y=$.2t(\'#jddj_cookies\');f(!!1Y){f(1Y.2e(\',\')<0){1y.push(1Y)}z{1y=1Y.1L(\',\')}}}}f(1y.1r==0){g.h(\'\\r\\n请先填写1Z\');1g}f(!$.1J.1K){20=$.2t(\'#jddj_isNotify\')}z{1i=2d(\'./1O\')}1E(j i=0;i<1y.1r;i++){g.h(\'\\r\\n★★★★★开始执行第\'+(i+1)+\'个账号,共\'+1y.1r+\'个账号★★★★★\');1W=1y[i];1q=0,1I=0;f(!1W.2f())2u;j 2g={};j 2v=1W.1L(\';\');2v.forEach(a=>{f(a.2e(\'=\')>-1)2g[a.1L(\'=\')[0].2f()]=a.1L(\'=\')[1].2f()});d=2g.deviceid_pdj_jd;p 2w();p $.1j(1e);p 2h(0);p $.1j(1e);j 19=p 2i();f(19.11==1){$.1i(\'第\'+(i+1)+\'个账号1Z过期\',\'请访问B://C.D.A/1P/H.1P抓取1Z\',{1Q:\'B://C.D.A/1P/H.1P\'});f($.1J.1K&&\'\'+20+\'\'==\'F\'){p 1i.1O(\'第\'+(i+1)+\'个账号1Z过期\',\'请访问B://C.D.A/1P/H.1P抓取1Z\')}2u}p 2x();p $.1j(1e);p 2y(19);p $.1j(1e);p 2z();p $.1j(1e);p 2A();p $.1j(1e);1N=\'\';19=p 2i();1E(j H=0;H<19.l.1F.1r;H++){j 21=19.l.1F[H];f(21.1s==\'23eee1c043c01bc\'){1M+=\'@\'+21.uniqueId+\',\';g.h(\'\\n好友互助码:\'+1M);1N=\',助力\'+21.finishNum+\'/\'+21.totalNum;break}}p 2h(2);p $.1j(1e)}f((k v().getUTCHours()+8)%24<8){$.1i(\'京东到家果园互助码:\',\'\',1M);f($.1J.1K){1i.1O(\'京东到家果园互助码:\',1M)}}})().1f(y(e)=>{g.h(\'\',\'❌失败! 原因:\'+e+\'!\',\'\');f($.1J.1K&&\'\'+20+\'\'==\'F\'){1i.1O(\'京东到家果园\',\'❌失败! 原因:\'+e+\'!\')}}).2B(()=>{$.done()});y 1k 2w(){1g k 1t(y w=>{1h{j s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&L=H5&M=N&O=&P=8.7.6&jdDevice=&Q=mine%2FgetUserAccountInfo&m=%R%22refPageSource%22:%22%22,%22fromSource%22:2,%22pageSource%22:%2D%22,%22ref%22:%22%22,%22ctp%22:%2D%22%S&jda=&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');$.G.V(s).I(o=>{j 4=W.Y(o.m);f(4.11==0){1h{1p=4.l.userInfo.userBaseInfo.nickName;g.h("●●●"+1p+"●●●")}1f(E){1p=\'昵称获取失败\'}}});w()}1f(E){g.h(\'\\n【个人信息】:\'+E);w()}})}y 1k 2i(){1g k 1t(y w=>{1h{j s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2Flist&14=F&m=%R%1m%22%3A%2E%22%2C%1n%22%1o%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+\'&T=\'+d+\'&U=\'+d,\'\');$.G.V(s).I(o=>{j 4=W.Y(o.m);w(4)})}1f(E){g.h(\'\\n【任务列表】:\'+E);w({})}})}y 1k 2A(){1g k 1t(y w=>{1h{j s=J(\'B://C.D.A/K?12=\'+q.u(k v()),\'Q=2a%2Fwatering&14=F&2F=2G&m=%R%22waterTime%22%1o%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+\'&T=\'+d+\'&U=\'+d);j 2j=1,2k=0;do{2k++;g.h(\'\\n**********开始执行第\'+2k+\'次浇水**********\');$.G.2H(s).I(o=>{j 4=W.Y(o.m);g.h(\'\\n【浇水】:\'+4.c);2j=4.11;f(4.11==0)1I++});p $.1j(1e)}while(2j==0);w()}1f(E){g.h(\'\\n【浇水】:\'+E);w()}})}y 1k 2I(){1g k 1t(y w=>{1h{j s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=signin%2FuserSigninNew&14=F&m=%R%22channel%22%3A%22daojiaguoyuan%22%2C%2J%22%3A\'+1X+\'%2C%2K%22%3A\'+1x+\'%2C%2L%22%3A\'+1w+\'%2C%22ifCic%22%3A0%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+\'&T=\'+d+\'&U=\'+d,\'\');$.G.V(s).I(o=>{j 4=W.Y(o.m);g.h(\'\\n【到家签到】:\'+4.c);w()})}1f(E){g.h(\'\\n【到家签到领水滴】:\'+E);w()}})}y 1k 2x(){1g k 1t(y w=>{1h{j 1R;j s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=2a%2FgetWaterBottleInfo&14=F&m=%R%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{1H 4=W.Y(o.m);f(4.11==0){1R=4.l.1R;g.h(\'\\n【收玻璃瓶水滴】:水瓶中有:\'+4.l.yesterdayAccumulate+\'水滴\')}z{g.h(\'\\n【收玻璃瓶水滴】:水瓶信息错误\')}});f(1R==0){s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=2a%2FreceiveWaterBottle&14=F&m=%R%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{g.h(o.m);1H 4=W.Y(o.m);f(4.11==0){g.h(\'\\n【收玻璃瓶水滴】:水瓶收取成功\')}z{g.h(\'\\n【收玻璃瓶水滴】:水瓶收取错误\')}})}z f(1R==1){g.h(\'\\n【收玻璃瓶水滴】:水瓶已经收取过\')}z f(1R==-2){g.h(\'\\n【收玻璃瓶水滴】:收取时间未到\')}z{g.h(\'\\n【收玻璃瓶水滴】:水瓶状态错误或暂不可收取:\')}w()}1f(E){g.h(\'\\n【收玻璃瓶水滴】:\'+E);w()}})}y 1k 2z(){1g k 1t(y w=>{1h{j 2b=[],1G=\'\';p $.G.V({1Q:\'B://gitee.A/passerby-b/javascript/raw/master/test/sharecode.js\'}).I(o=>{1G=o.m});1h{p $.G.V({1Q:\'G://107.172.97.176:8080/queryJddjCode\'}).I(o=>{1G+=o.m})}1f(E){}f(!!1G){1G=1G.substr(0,1G.1r-1);2b=1G.1L(\',\')}j 2l=2b[q.u(q.28()*(2b.1r-1)+0)];j s=J(\'B://C.D.A/K?1w=\'+1w+\'&1x=\'+1x+\'&2M=\'+1w+\'&2N=\'+1x+\'&2O=\'+1X+\'&T=\'+d+\'&U=\'+d+\'&O=2P&mpChannel=2P&Z=5.0.0&L=mini&P=5.0.0&M=N&16=17&xcxVersion=9.2.0&14=F&business=djgyzhuli&Q=1l%2c&m=%R%1m%22%3A%2E%22%2C%1u%22%3A1201%2C%1v%22%3A%2223eee1c043c01bc%22%2C%1n%22%3A5%2C%22assistTargetPin%22%3A%22\'+2l.1L(\'@\')[0]+\'%22%2C%22uniqueId%22%3A%22\'+2l.1L(\'@\')[1]+\'%22%S\',\'\');$.G.V(s).I(o=>{j 4=W.Y(o.m);g.h(\'\\n【助力】:\'+4.c);w()})}1f(E){g.h(\'\\n【助力】:\'+E);w()}})}y 1k _runTask(19){1g k 1t(y w=>{1h{1E(j H=0;H<19.l.1F.1r;H++){1H a=19.l.1F[H];f(a.1d==2Q||a.1d==2R){j s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2m&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1d+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{1S 4=W.Y(o.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.l.1D}z{c=4.c}g.h(\'\\n领取任务【\'+a.1c+\'】:\'+c)})}f(a.1T>-1){1E(j t=0;t<2n(a.1T);t++){p $.1j(1e);g.h(\'计时:\'+(t+1)+\'秒...\')}};s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2c&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1d+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{1S 4=W.Y(o.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.l.1D}z{c=4.c}g.h(\'\\n任务完成【\'+a.1c+\'】:\'+c)});s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2o&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1d+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{1S 4=W.Y(o.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.l.1D}z{c=4.c}g.h(\'\\n领取奖励【\'+a.1c+\'】:\'+c)})}w()}1f(E){g.h(\'\\n【执行任务】:\'+E);w()}})}1H 2S=[2Q,2R,2T,1105,1103,0,1101];y 1k 2y(19){1g k 1t(y w=>{1h{1E(j H=0;H<19.l.1F.1r;H++){1H a=19.l.1F[H];f(a.1U==3||a.1U==2){g.h(\'\\n【\'+a.1c+\'】: 任务已完成,跳过做任务\')}z f(a.1d==502){p 2I()}z f(2S.includes(a.1d)){f(a.1U==0){j s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2m&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1d+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{j 4=W.Y(o.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.l.1D}z{c=4.c}g.h(\'\\n领取任务【\'+a.1c+\'】:\'+c)});f(a.1T>-1){1E(j t=0;t<2n(a.1T);t++){p $.1j(1e);g.h(\'计时:\'+(t+1)+\'秒...\')}}}z{g.h(\'\\n【\'+a.1c+\'】: 任务已领取或不需要领取\')};f(a.1d!=0){s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2c&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1d+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{j 4=W.Y(o.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.l.1D;a.1U=2}z{c=4.c}g.h(\'\\n任务完成【\'+a.1c+\'】:\'+c)})}}z{g.h(\'\\n【\'+a.1c+\'】: 脚本无法执行此任务或任务不需要主动完成\')}f(a.1U==2||a.taskTypes==2T){s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2o&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1d+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{j 4=W.Y(o.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.l.1D}z{c=4.c}g.h(\'\\n领取奖励【\'+a.1c+\'】:\'+c)})}z f(a.1U==3){g.h(\'\\n【\'+a.1c+\'】: 奖励已领取,跳过领奖励\')}z{g.h(\'\\n【\'+a.1c+\'】: 任务未完成,跳过领奖励\')}}w()}1f(E){g.h(\'\\n【执行任务】:\'+E);w()}})}y 1k runTask2(19){1g k 1t(y w=>{1h{1E(j H=0;H<19.l.1F.1r;H++){1H a=19.l.1F[H];f(a.1c.2e(\'限时\')>-1){j s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2m&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1d+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{1S 4=W.Y(o.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.l.1D}z{c=4.c}g.h(\'\\n领取任务【\'+a.1c+\'】:\'+c)});f(a.1T>-1){1E(j t=0;t<2n(a.1T);t++){p $.1j(1e);g.h(\'计时:\'+(t+1)+\'秒...\')}};s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2c&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1d+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{1S 4=W.Y(o.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.l.1D}z{c=4.c}g.h(\'\\n任务完成【\'+a.1c+\'】:\'+c)});s=J(\'B://C.D.A/K?12=\'+q.u(k v())+\'&Q=1l%2o&14=F&m=%R%1m%22%3A%22\'+a.1z+\'%22%2C%1v%22%3A%22\'+1A(a.1s)+\'%22%2C%1u%22%3A\'+a.1d+\'%2C%1n%22%1o%2C%1B%22%1C%S&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d,\'\');p $.G.V(s).I(o=>{1S 4=W.Y(o.m),c=\'\';f(4.11==0){c=4.c+\',奖励:\'+4.l.1D}z{c=4.c}g.h(\'\\n领取奖励【\'+a.1c+\'】:\'+c)})}}w()}1f(E){g.h(\'\\n【执行任务】:\'+E);w()}})}y 1k 2h(2p){1g k 1t(y w=>{1h{j s=J(\'B://C.D.A:443/K?12=\'+q.u(k v()),\'Q=2a%2FinitFruit&14=F&2F=2G&m=%R%2J%22%3A\'+1X+\'%2C%2K%22%3A\'+1x+\'%2C%2L%22%3A\'+1w+\'%S&1w=\'+1w+\'&1x=\'+1x+\'&2M=\'+1w+\'&2N=\'+1x+\'&2O=\'+1X+\'&O=1a&Z=6.6.0&L=h5&P=6.6.0&M=N&16=17&13=\'+d+q.u(k v())+\'&T=\'+d+\'&U=\'+d);p $.G.2H(s).I(y o=>{j 4=W.Y(o.m);f(4.11==0){f(2p==0){1q=4.l.23.25;1M+=4.l.18.userPin}f(2p==2){1q=(1I*10)+4.l.23.25-1q;f(1q<0)1q=0;f(4.l.18.26==0){g.h(\'\\n京东到家果园【\'+1p+\'】:\'+4.l.18.1V+\'已成熟,快去收取!\');$.1i(\'京东到家果园\',\'【\'+1p+\'】\',\'京东到家果园\'+4.l.18.1V+\'已成熟,快去收取!\');f($.1J.1K&&\'\'+20+\'\'==\'F\'){p 1i.1O(\'京东到家果园【\'+1p+\'】\',\'京东到家果园\'+4.l.18.1V+\'已成熟,快去收取!\')}}f(4.l.18.26>0){j 27=\'次\';f(4.l.18.growingStage==5)27=\'%\';g.h(\'\\n京东到家果园【\'+1p+\'】:\'+4.l.18.1V+\',本次领取\'+1q+\'滴水,浇水\'+1I+\'次,还需浇水\'+4.l.18.26+27+4.l.18.2q+\',还剩\'+4.l.23.25+\'滴水\'+1N);$.1i(\'京东到家果园\',\'【\'+1p+\'】\',\'【果树信息】:\'+4.l.18.1V+\',本次领取\'+1q+\'滴水,浇水\'+1I+\'次,还需浇水\'+4.l.18.26+27+4.l.18.2q+\',还剩\'+4.l.23.25+\'滴水\'+1N);f($.1J.1K&&\'\'+20+\'\'==\'F\'){p 1i.1O(\'京东到家果园【\'+1p+\'】\',\'【果树信息】:\'+4.l.18.1V+\',本次领取\'+1q+\'滴水,浇水\'+1I+\'次,还需浇水\'+4.l.18.26+27+4.l.18.2q+\',还剩\'+4.l.23.25+\'滴水\'+1N)}}}}w()})}1f(E){g.h(\'\\n【果树信息】:\'+E);w()}2B{treeInfoTimes=F}})}1k J(1Q,m){j s={1Q:1Q,headers:{\'Host\':\'C.D.A\',\'Content-Type\':\'application/x-www-form-urlencoded;\',\'Origin\':\'B://C.D.A\',\'Cookie\':1W,\'Connection\':\'keep-alive\',\'2U\':\'*/*\',\'User-Agent\':\'Mozilla/5.0 (2V; CPU 2V OS 14_1 2X Mac OS X) AppleWebKit/605.1.15 (KHTML, 2X Gecko) Mobile/15E148________appName=jdLocal&Z=iOS&commonParams={"sharePackageVersion":"2"}&djAppVersion=8.7.5&supportDJSHWK\',\'2U-Language\':\'zh-cn\'},m:m};1g s}',[],184,'||||data||||||item||msg|deviceid||if|console|log||let|new|result|body||response|await|Math||option||round|Date|resolve||async|else|com|https|daojia|jd|error|true|http|index|then|urlTask|client|platCode|appName|paidaojia|channel|appVersion|functionId|7B|7D|deviceToken|deviceId|get|JSON||parse|platform||code|_jdrandom|traceId|isNeedDealError||deviceModel|appmodel|activityInfoResponse|tslist|ios||taskTitle|taskType|1000|catch|return|try|notify|wait|function|task|22modelId|22plateCode|3A1|nickname|waterNum|length|taskId|Promise|22taskType|22taskId|lat|lng|cookies|modelId|encodeURIComponent|22subNode|3Anull|awardValue|for|taskInfoList|codestr|const|waterTimes|env|isNode|split|shareCode|hzstr|sendNotify|html|url|receiveStatus|var|browseTime|status|fruitName|thiscookie|cityid|ckstr|cookie|isNotify|element||userResponse||waterBalance|curStageLeftProcess|unit|random|10000|fruit|scodes|2Ffinished|require|indexOf|trim|jsonlist|treeInfo|taskList|waterStatus|waterCount|scode|2Freceived|parseInt|2FsendPrize|step|stageName|99999|ckPath|read|continue|params|userinfo|waterBottle|runTask|zhuLi|water|finally||22myinfo|22M10007|method|POST|post|sign|22cityId|22longitude|22latitude|lat_pos|lng_pos|city_id|wx_xcx|307|901|do_tasks|1102|Accept|iPhone||like'.split('|'),0,{}))
/*********************************** API *************************************/
function ENV() { const e = "undefined" != typeof $task, t = "undefined" != typeof $loon, s = "undefined" != typeof $httpClient && !t, i = "function" == typeof require && "undefined" != typeof $jsbox; return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !i, isJSBox: i, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule } } function HTTP(e = { baseURL: "" }) { const { isQX: t, isLoon: s, isSurge: i, isScriptable: n, isNode: o } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/; const u = {}; return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function (u, l) { l = "string" == typeof l ? { url: l } : l; const h = e.baseURL; h && !r.test(l.url || "") && (l.url = h ? h + l.url : l.url); const a = (l = { ...e, ...l }).timeout, c = { onRequest: () => { }, onResponse: e => e, onTimeout: () => { }, ...l.events }; let f, d; if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l }); else if (s || i || o) f = new Promise((e, t) => { (o ? require("request") : $httpClient)[u.toLowerCase()](l, (s, i, n) => { s ? t(s) : e({ statusCode: i.status || i.statusCode, headers: i.headers, body: n }) }) }); else if (n) { const e = new Request(l.url); e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) }) } const p = a ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${a} ms`)), a) }) : null; return (p ? Promise.race([p, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e)) })(l, u))), u } function API(e = "untitled", t = !1) { const { isQX: s, isLoon: i, isSurge: n, isNode: o, isJSBox: r, isScriptable: u } = ENV(); return new class { constructor(e, t) { this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (o) { return { fs: require("fs") } } return null })(), this.initCache(); Promise.prototype.delay = function (e) { return this.then(function (t) { return ((e, t) => new Promise(function (s) { setTimeout(s.bind(null, t), e) }))(e, t) }) } } initCache() { if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (i || n) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), o) { let e = "root.json"; this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {}) } } persistCache() { const e = JSON.stringify(this.cache, null, 2); s && $prefs.setValueForKey(e, this.name), (i || n) && $persistentStore.write(e, this.name), o && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e))) } write(e, t) { if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) { if (t = t.substr(1), n || i) return $persistentStore.write(e, t); if (s) return $prefs.setValueForKey(e, t); o && (this.root[t] = e) } else this.cache[t] = e; this.persistCache() } read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), n || i ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : o ? this.root[e] : void 0) } delete(e) { if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) { if (e = e.substr(1), n || i) return $persistentStore.write(null, e); if (s) return $prefs.removeValueForKey(e); o && delete this.root[e] } else delete this.cache[e]; this.persistCache() } notify(e, t = "", l = "", h = {}) { const a = h["open-url"], c = h["media-url"]; if (s && $notify(e, t, l, h), n && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: a }), i) { let s = {}; a && (s.openUrl = a), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s) } if (o || u) { const s = l + (a ? `\n点击跳转: ${a}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) } } log(e) { this.debug && console.log(`[${this.name}] LOG: ${this.stringify(e)}`) } info(e) { console.log(`[${this.name}] INFO: ${this.stringify(e)}`) } error(e) { console.log(`[${this.name}] ERROR: ${this.stringify(e)}`) } wait(e) { return new Promise(t => setTimeout(t, e)) } done(e = {}) { console.log('done!'); s || i || n ? $done(e) : o && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body) } stringify(e) { if ("string" == typeof e || e instanceof String) return e; try { return JSON.stringify(e, null, 2) } catch (e) { return "[object Object]" } } }(e, t) }
/*****************************************************************************/
