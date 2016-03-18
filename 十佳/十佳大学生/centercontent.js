/**
 * Created by lifeng on 2015/10/14.
 */

var screenHeight = document.documentElement.clientHeight;
function mouseover(div){
    var intr = div.parentNode.nextElementSibling||div.parentNode.nextSibling;
    intr.style.display = "block";
}
function mouseout(div){
    var intr = div.parentNode.nextElementSibling||div.parentNode.nextSibling;
    intr.style.display = "none";
}
function intr_mouseover(intr){
    intr.style.display = "block";
}
function intr_mouseout(intr){
    intr.style.display = "none";
}
function RL_onclick(){
    document.getElementById("RankingList").style.display = "block";
}
function RL_hidden(){
    document.getElementById("RankingList").style.display = "none";
}