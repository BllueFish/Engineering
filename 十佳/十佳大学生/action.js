/**
 * Created by lifeng on 2015/10/6.
 */
/*欢迎观看鄙人代码，希望大家多多指教。联系方式：2220867497
 づ￣ 3￣)づ  CFC团队欢迎您的加入！ 新群qq：397043572
 期待您的加入，能让CFC变的更好，能让您自己变的更好！

 我们不是码农，我们是生活的艺术家！*/

var zhichi = document.getElementsByClassName("zhichi");
for(var i=0; i<zhichi.length; i++){
    zhichi[i].count=0;
    zhichi[i].isSelected = false;
    zhichi[i].onclick = select;
}
function select(){
    this.count++;
    if(this.count % 2==0){
        this.isSelected = false;
        this.src = "images/button.png";
    }else{
        this.isSelected = true;
        this.src = "images/button1.png";
    }
}
function WEB(id, answer) {
    var idstr = id.join("-");
    var Jsonhttp = getXMLHttpRequest();
    Jsonhttp.onreadystatechange = function () {
        if (Jsonhttp.readyState == 4 && Jsonhttp.status == 200) {
            table = eval("(" + Jsonhttp.responseText + ")");
            switch (table.msg) {
                case "error-520":  document.getElementById("error").style.display = "block";
                    document.getElementById("e_content").innerHTML = "cfc love you 但是你好坏";
                    break;
                case "error-10":document.getElementById("error").style.display = "block";
                    document.getElementById("e_content").innerHTML = "不可以哦~你超过了今日的投票哦~";
                    break;
                case "error-1":document.getElementById("error").style.display = "block";
                    document.getElementById("e_content").innerHTML = "亲~同一个候选人一天只能投一票";
                    break;
                case "error-2": document.getElementById("error").style.display = "block";
                    document.getElementById("e_content").innerHTML ="亲~部分候选人您已经投过票";
                    break;
                case "error-stop": document.getElementById("error").style.display = "block";
                    document.getElementById("e_content").innerHTML ="哎呀~现在不是投票时间啦~";
                    break;
                case "outtime":document.getElementById("error").style.display = "block";
                    document.getElementById("e_content").innerHTML ="页面超时，请刷新";
                    break;
                case "ok":
                    document.getElementById("error").style.display = "block";
                    document.getElementById("e_content").innerHTML ="投票成功";
                    window.location = "/info.aspx";
                    break;
                case "validfail": document.getElementById("error").style.display = "block";
                    document.getElementById("e_content").innerHTML ="验证码答案错误";
                    break;
            }
        }
    }
    Jsonhttp.open("POST", "openAPI/web.aspx?action=vote", true);
    Jsonhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    Jsonhttp.send("ID=" + idstr + "&answer=" + answer);
}

function judgeSelected(){
    var ids=[];
    var selected = 0;
    var num = 0;
    for(var i = 0; i<zhichi.length; i++){
        if(zhichi[i].isSelected) {
            selected++;
            ids[num] = i+1;
            num++;
        }
    }
    if(selected < 8){
        document.getElementById("error").style.display = "block";
        document.getElementById("e_content").innerHTML = "您选择了"+selected+"位候选人，小于8人，不符合要求，请您重新选择。";
    }else if(selected > 10){
        var m = document.getElementById("error");
        document.getElementById("error").style.display = "block";
        document.getElementById("e_content").innerHTML = "您选择了"+selected+"位候选人，大于10人，不符合要求，请重新选择。";
    }
    var str = document.getElementById("code").value;
    if (str == '' || str == "请输入验证码") {
        document.getElementById("error").style.display = "block";
        document.getElementById("e_content").innerHTML = "验证码答案不能为空";
        return;
    }
    WEB(ids, str);
}

function hiden(){
    var m =document.getElementById("tips");
    m.style.display = "none";
}
function hiden1(){
    var m = document.getElementById("error");
    m.style.display = "none";
}