/**
 * Created by lifeng on 2015/10/23.
 */

var page_content = [
    '<div class="default"> <img alt="" src="images/张越.png" width="280"/><div class="vote"><p style="margin-top:25px;">车辆工程学院</p> </div> </div>',
    '<div class="jianjie"> <div class="aboutself"><span class="thename">张越</span>，女，1993年1月生，汉族，中共党员，重庆理工大学车辆工程学院10级能源与动力工程专业学生，曾任校学生会副主席、院团总支组织部长、年级学生会副主席、班级团支书。 </div> <div class="rongru"> <span>获奖情况:</span><br/> 2010重庆理工大学校庆“优秀志愿者”<br/> 2011重庆理工大学“优秀共青团干部”<br/> 2011重庆理工大学军训“优秀学员”<br/> 2011重庆汽车学院“开拓杯”一等奖<br/> </div> </div>',

    '<div class="default"> <img alt="" src="images/刘世程.png" width="280"/><div class="vote"><p style="margin-top:25px;">材料科学与工程学院</p></div></div>',
    '<div class="jianjie"><div class="aboutself"><span class="thename">刘世程</span> ，男，1990年12月，中共党员，辽宁大连人。曾任重庆理工大学校学生会主席、材料科学与工程学院学生会副主席、雷锋精神研究会会长兼雷锋团支部书记、学生党支部组织委员等职。 </div> <div class="rongru"> <span>获奖情况:</span><br/> 2012全国第八届“挑战杯”大赛铜奖<br/> 2013重庆市“优秀学生干部”<br/> 2011重庆市“精神文明建设先进个人”<br/> 2013重庆理工大学“优秀学生会主席”<br/> </div> </div>',

    '<div class="default"> <img alt="" src="images/鲁天琪.png" width="280"/>  <div class="vote"> <p style="margin-top:25px;">电子信息与自动化学院</p> </div> </div>',
    '<div class="jianjie"> <div class="aboutself"> <span class="thename">鲁天琪</span> ，男，1992年4月生，汉族，中共党员，辽宁盘锦人，重庆理工大学电子信息与自动化学院10级电子信息工程专业学生，曾任电子信息与自动化学院团总支组织部部长、学生会心理健康部部长，并担任团支部书记一职。 </div> <div class="rongru"> <span>获奖情况:</span><br/> 2012全国大学生数学建模重庆市二等奖<br/> 2013全国大学生数学建模重庆市二等奖<br/> 2013重庆理工大学"十佳学生科技标兵"<br/> 2013重庆理工大学“三好学生”<br/> </div> </div>',

    ' <div class="default"> <img alt="" src="images/姜彬.png" width="280"/><div class="vote"> <p style="margin-top:25px;">药学与生物工程学院</p></div></div>',
    ' <div class="jianjie"> <div class="aboutself"> <span class="thename">姜彬</span> ，男，1990年9月生，汉族，中共党员，重庆理工大学药学与生物工程学院10级生物医学工程专业学生，曾任学院学生会体育部部长、青年志愿者协会副会长，现任110100401班班长。 </div> <div class="rongru"><span>获奖情况:</span><br/> 2012国家励志奖学金<br/> 2012重庆市“优秀学生干部”<br/> 2013重庆市“先进班集体标兵”<br/> 2013重庆理工"青春榜样积极分子" <br/> </div> </div>',

    '<div class="default"><img alt="" src="images/杨云梅.png" width="280"/><div class="vote"> <p style="margin-top:25px;">光电信息学院</p> </div> </div>',
    '<div class="jianjie"> <div class="aboutself"> <span class="thename">杨云梅</span> ，女，1991年2月生，汉族，中共党员，重庆理工大学光电信息学院10级电子信息科学与技术专业学生，曾任光电信息学院团总支副书记。 </div> <div class="rongru"> <span>获奖情况:</span><br/> 2011国家励志奖学金<br/> 2012国家励志奖学金<br/> 2011重庆市“优秀文明寝室”称号<br/> 2012重庆理工大学"自立自强先进个人"<br/> </div> </div>',

    ' <div class="default"><img alt="" src="images/杨正清.png" width="280"/> <div class="vote"> <p style="margin-top:25px;">会计学院</p> </div> </div>',
    '<div class="jianjie"><div class="aboutself"> <span class="thename">杨正清</span> ，男，1992年4月生，汉族，中共党员，重庆理工大学会计学院10级财务管理专业学生，曾任会计学院学生会主席、会计学院暑期“三下乡”服务团团长、会计学院20周年院庆导演组总协调等职务。 </div> <div class="rongru"> <span>获奖情况:</span><br/> 2012重庆市“三下乡”先进个人<br/> 2013重庆理工大学“优秀学生会主席” <br/> 2011重庆理工第七届学子百家讲坛冠军<br/> 2011重理工第二届大学生中文辩论冠军<br/> </div> </div>',

    '<div class="default">  <img alt="" src="images/沈越非.png" width="280"/><p style="margin-top:25px;">管理学院</p> </div> </div>',
    '<div class="jianjie"> <div class="aboutself"> <span class="thename">沈越非</span> ，男，1991年5月生，汉族，中共党员，现为重庆理工大学管理学院10级工商管理专业本科生，曾任重庆理工大学管理学院学生会主席。 </div> <div class="rongru"> <span>获奖情况:</span><br/> 2012国家奖学金<br/> 2011重庆市“三好学生” <br/> 2011第三届全国大学生创业重庆三等奖<br/> 2012重庆市“优秀共青团员”<br/> </div> </div>',

    '<div class="default"><img alt="" src="images/梁修明.png" width="280"/><div class="vote"> <p style="margin-top:25px;">经济与贸易学院</p></div> </div>',
    '<div class="jianjie"> <div class="aboutself"> <span class="thename">梁修明</span>  ，男，1988年4月生，汉族，中共党员，重庆理工大学经济与贸易学院10级劳动与社会保障专业学生，现为新华社半月谈社情民意调查中心特聘民情观察员，曾任共青团重庆理工大学委员会宣传部（现团委传媒中心）部长兼校学生会新闻部部长等职。 </div> <div class="rongru"> <span>获奖情况:</span><br/> 2013新华社半月谈问卷调研二等奖<br/> 2013“中国大学生自强之星”提名奖 <br/> 2013中国大学生新东方自强奖学金<br/> 2013重庆理工大学“优秀学生干部”<br/> </div> </div>',

    ' <div class="default"> <img alt="" src="images/郝一帆.png" width="280"/>  <div class="vote"> <p style="margin-top:25px;">语言学院</p> </div> </div>',
    ' <div class="jianjie"> <div class="aboutself"> <span class="thename">郝一帆</span> ，女，1991年9月生，汉族，中共党员，重庆理工大学语言学院10级商务英语专业学生，曾任重庆理工大学语言学院团总支副书记。 </div> <div class="rongru"> <span>获奖情况:</span><br/> 2013重庆理工大学“优秀学生干部”<br/> 2012校创先争优活动“优秀共产党员” <br/> 2012重理工"共青团工作积极分子"<br/> 2011重理工"开拓杯"竞赛三等奖<br/> </div> </div>',

    '<div class="default"> <img alt="" src="images/郑彬.png" width="280"/> <div class="vote"> <p style="margin-top:25px;">应用技术学院</p> </div> </div>',
    ' <div class="jianjie"> <div class="aboutself"> <span class="thename">郑彬</span>  ，男，1991年8月生，汉族，中共党员，现为重庆理工大学应用技术学院10级机械设计制造及其自动化专业、人力资源管理第二专业学生，曾任院科协科技研究社机械分社副社长、院办公室干事，班长。</div> <div class="rongru"> <span>获奖情况:</span><br/> 2012国家发明专利一项<br/> 2013国家奖学金<br/> 2012五届全国机械创新设计重庆三等奖<br/> 2012三届"统一杯"大学生创业二等奖<br/> </div> </div>',

    '<div id="stu_name" style="background-image: url(images/bg_cfc.png);background-repeat: no-repeat; width:400px; height: 250px; margin-top: 160px;"> </div>',
];
var start_page = 0;