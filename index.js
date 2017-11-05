function getFirstSelector(selector){
  return document.querySelector(selector);
}


function  nestedTarget(){

  return document.querySelector('#nested .target');
}


function deepestChild(){
  return document.querySelector('#grand-node div div div div');

}


function increaseRankBy(n){
    var rankedLists=document.querySelectorAll(".ranked-list");
    for(let i=0;i<rankedLists.length;i++){
      var list=rankedLists[i];
      Array.from(list.childNodes).forEach(function(value){
        value.innerHTML(parseInt(value.innerHTML())+n);
      }
      );
    }
}
