const menuId = "myMenu";

function callback1(){
  console.log('my first callback');
};

function callback2(){
  console.log('my second callback');
};

//primary menu
chrome.contextMenus.create({
  id : menuId,
  title : "Menu Name",
  contexts : ["all"]
});

//sub-menu
chrome.contextMenus.create({
  id : "myMenuSub1",
  parentId : menuId,
  title : "An Action",
  contexts : ["all"]
}, callback1);

//sub-menu
chrome.contextMenus.create({
  id : "myMenuSub2",
  parentId : menuId,
  title : "Another Action",
  contexts : ["all"]
}, callback2);