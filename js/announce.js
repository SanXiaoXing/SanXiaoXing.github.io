function todis(){function e(){let e="light"===document.documentElement.getAttribute("data-theme")?"#4C4948":"rgba(255,255,255,0.7)";if(document.getElementById("posts-chart")&&postsOption)try{let a=postsOption;a.title.textStyle.color=e,a.xAxis.nameTextStyle.color=e,a.yAxis.nameTextStyle.color=e,a.xAxis.axisLabel.color=e,a.yAxis.axisLabel.color=e,a.xAxis.axisLine.lineStyle.color=e,a.yAxis.axisLine.lineStyle.color=e,a.series[0].markLine.data[0].label.color=e,postsChart.setOption(a)}catch(e){console.log(e)}if(document.getElementById("tags-chart")&&tagsOption)try{let a=tagsOption;a.title.textStyle.color=e,a.xAxis.nameTextStyle.color=e,a.yAxis.nameTextStyle.color=e,a.xAxis.axisLabel.color=e,a.yAxis.axisLabel.color=e,a.xAxis.axisLine.lineStyle.color=e,a.yAxis.axisLine.lineStyle.color=e,a.series[0].markLine.data[0].label.color=e,tagsChart.setOption(a)}catch(e){console.log(e)}if(document.getElementById("categories-chart")&&categoriesOption)try{let a=categoriesOption;a.title.textStyle.color=e,a.legend.textStyle.color=e,categoryParentFlag||(a.series[0].label.color=e),categoriesChart.setOption(a)}catch(e){console.log(e)}}$.ajax({type:"get",url:"https://apis.map.qq.com/ws/location/v1/ip",data:{key:"T3EBZ-TJ7LI-YRBG2-5ZLUR-KD3OS-U6BJO",output:"jsonp"},dataType:"jsonp",success:function(e){ipLoacation=e,function(){let e,a,t=function(e,a,t,o){const{sin:s,cos:n,asin:c,PI:i,hypot:r}=Math;let l=(e,a)=>(e*=i/180,{x:n(a*=i/180)*n(e),y:n(a)*s(e),z:s(a)}),p=l(e,a),b=l(t,o),u=2*c(r(p.x-b.x,p.y-b.y,p.z-b.z)/2)*6371;return Math.round(u)}(116.222355,39.733378,ipLoacation.result.location.lng,ipLoacation.result.location.lat),o=ipLoacation.result.ad_info.nation;switch(ipLoacation.result.ad_info.nation){case"日本":e="よろしく，一起去看樱花吗";break;case"美国":e="Make America Great Again!";break;case"英国":e="想同你一起夜乘伦敦眼";break;case"俄罗斯":e="干了这瓶伏特加！";break;case"法国":e="C'est La Vie";break;case"德国":e="Die Zeit verging im Fluge.";break;case"澳大利亚":e="一起去大堡礁吧！";break;case"加拿大":e="拾起一片枫叶赠予你";break;case"中国":switch(o=ipLoacation.result.ad_info.province+" "+ipLoacation.result.ad_info.city,ipLoacation.result.ad_info.province){case"北京市":e="北京,欢迎你~~~";break;case"天津市":e="讲段相声吧。";break;case"重庆市":e="高德地图:已到达重庆，下面交给百度地图导航。";break;case"河北省":e="山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";break;case"河南省":e="河南的老表，我在北漂，你那好吗？";break;case"山西省":e="展开坐具长三尺，已占山河五百余。";break;case"内蒙古自治区":e="天苍苍，野茫茫，风吹草低见牛羊。";break;case"辽宁省":e="我想吃烤鸡架！";break;case"吉林省":e="状元阁就是东北烧烤之王。";break;case"黑龙江省":e="很喜欢哈尔滨大剧院。";break;case"上海市":e="众所周知，中国只有两个城市。";break;case"江苏省":switch(ipLoacation.result.ad_info.city){case"南京市":e="欢迎来自安徽省南京市的小伙伴。";break;case"苏州市":e="上有天堂，下有苏杭。";break;default:e="散装是必须要散装的。"}break;case"浙江省":e="东风渐绿西湖柳，雁已还人未南归。";break;case"安徽省":e="蚌埠住了，芜湖起飞。";break;case"福建省":e="井邑白云间，岩城远带山。";break;case"江西省":e="落霞与孤鹜齐飞，秋水共长天一色。";break;case"山东省":e="遥望齐州九点烟，一泓海水杯中泻。";break;case"湖北省":e="来碗热干面！";break;case"湖南省":e="74751，长沙斯塔克。";break;case"广东省":e="老板来两斤福建人。";break;case"广西壮族自治区":e="桂林山水甲天下。";break;case"海南省":e="朝观日出逐白浪，夕看云起收霞光。";break;case"四川省":e="康康川妹子。";break;case"贵州省":e="茅台，学生，再塞200。";break;case"云南省":e="玉龙飞舞云缠绕，万仞冰川直耸天。";break;case"西藏自治区":e="躺在茫茫草原上，仰望蓝天。";break;case"陕西省":e="来份臊子面加馍。";break;case"甘肃省":e="羌笛何须怨杨柳，春风不度玉门关。";break;case"青海省":e="牛肉干和老酸奶都好好吃。";break;case"宁夏回族自治区":e="大漠孤烟直，长河落日圆。";break;case"新疆维吾尔自治区":e="驼铃古道丝绸路，胡马犹闻唐汉风。";break;case"台湾省":e="我在这头，大陆在那头。";break;case"香港特别行政区":e="永定贼有残留地鬼嚎，迎击光非岁玉。";break;case"澳门特别行政区":e="性感荷官，在线发牌。";break;default:e="社会主义大法好。"}break;default:e="带我去你的国家逛逛吧。"}let s=new Date;a=s.getHours()>=5&&s.getHours()<11?"<span>上午好</span>，一日之计在于晨":s.getHours()>=1&&s.getHours()<13?"<span>中午好</span>，该摸鱼吃午饭了":s.getHours()>=13&&s.getHours()<15?"<span>下午好</span>，懒懒地睡个午觉吧！":s.getHours()>=15&&s.getHours()<16?"<span>三点几啦</span>，饮茶先啦！":s.getHours()>=16&&s.getHours()<19?"<span>夕阳无限好！</span>":s.getHours()>=19&&s.getHours()<24?"<span>晚上好</span>，夜生活嗨起来！":"夜深了，早点休息，少熬夜",document.getElementsByClassName("announcement_content")[0].innerHTML=`欢迎来自 <span style="color: #4D64F0; font-weight: bold; font-family: KaiTi_GB2312;">${o}</span> 的朋友。\n                <br>${a}<br>\n        你距离<span style="color: #F3C05D; font-weight: bold;">SanXiaoXing </span> 约有 <span style="color: #4D64F0; font-weight: bold; font-family: DFKai-SB;">${t}</span> 公里 ! <br>\n        ${e}\n        <br><a href = "alipayqr://platformapi/startapp?saId=10000007&qrcode=K19614055k5f8n1q7ocjwya3R00"><img src="https://cdn.jsdelivr.net/gh/SanXiaoXing/Image@main/alipay_LucyMoney.jpg"></a>`}()}}),document.querySelector(".rightMenu-item:has(.fa-moon)").addEventListener("click",(function(){setTimeout(e,100)})),document.getElementById("con-mode").addEventListener("click",(function(){setTimeout(e,100)}))}document.addEventListener("pjax:complete",todis),document.addEventListener("DOMContentLoaded",todis);