// function disableEnter(event) {
//     debugger
//     var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
//     if (keyCode == 13) {
//         // 此处处理回车动作
//         n++;
//         var div = document.createElement('div');
//         div.setAttribute('id', `und` + n);
//         document.getElementById('undone').appendChild(div);
//         var radio = document.createElement('input');
//         radio.setAttribute('type', 'checkbox');
//         document.getElementById(`und` + n).appendChild(radio);
//         var input = document.createElement('input');
//         input.setAttribute('type', 'text');
//         input.setAttribute('class', 'down');
//         input.setAttribute('name', `und` + n);
//         input.value = document.getElementById('enter').value;
//         document.getElementById(`und` + n).appendChild(input);
//     }
// }
//得到class为那么的第一个元素
var getFirst = function(name) {
        return document.getElementsByClassName(name)[0];
    }
    // input enter加消息
var addEvent = function() {
        getFirst('enter-input').addEventListener('keydown', function(e) {
            var keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
            if (keyCode == 13) {
                // enter动作
                var newEvent = document.createElement('div');
                var button = document.createElement('input');
                button.setAttribute('type', 'checkbox');
                button.setAttribute('class', 'down-input');
                newEvent.appendChild(button);
                var input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.value = getFirst('enter-input').value;
                newEvent.appendChild(input);
                getFirst('undone-form').appendChild(newEvent);
                getFirst('enter-input').value = "";
            }
        });
    }
    //给class为undone的父元素添加事件代理， 点击 使子元素到done 并改变子元素的class名字
var toDown = function() {
    getFirst('undone-form').addEventListener('click', function(e) {
        if (e.target.className === "down-input") {
            console.log('1');
            getFirst('done-form').appendChild(e.target.parentNode);
            e.target.className = "up-input";
        }
    });
}
var toUp = function() {
    getFirst('done-form').addEventListener('click', function(e) {
        if (e.target.className === "up-input") {
            getFirst('undone-form').appendChild(e.target.parentNode);
            e.target.className = "down-input";
        }
    });
}
addEvent();
toDown();
toUp();




// 1 声明变量


// var undoneClass = 'undone';
// var doneClass = 'done';


// var input = xxxx;
// var undoneContainer = document.getElementsByClassName('undone')[0];
// var doneContainer = xxx;

// var doDone = function(e) {
//     xxx
// }

// var addTodo = function() {

// }

// undoneContainer.addEventListener(xxxx, doDone)
// input.addEventListener(xxx, addTodo)
