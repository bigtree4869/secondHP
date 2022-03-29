var hiroki = document.getElementById('kitamura').getElementsByTagName('a');
var yuuj = document.getElementById('asami').getElementsByTagName('div');

function changeTab() {
    var targetid = this.href.substring(this.href.indexOf ('#')+1,this.href.length);
    for (var i = 0;i<yuuj.length;i++){
        if(yuuj[i].id != targetid){
            yuuj[i].style.display = "none";
        }
        else{
            yuuj[i].style.display = "block";
        }
    }
    for(var i = 0;i<hiroki.length;i++){
        hiroki[i].style.zIndex = "0";

    }
    this.style.zIndex = "10";
    return false;
}
for(var i = 0;i<hiroki.length;i++){
    hiroki[i].onclick = changeTab;
}
hiroki[0].onclick();
