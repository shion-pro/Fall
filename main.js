"use strict";

// do

// next do

// doing

// done

// ===== Define the movemenet of elements =====
function makeArr(startValue, stopValue, cardinality) {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
      arr.push(startValue + (step * i));
    }
    return arr;
}

function getScriptDir() {
    var root;
    var scripts = document.getElementsByTagName("script");
    var i = scripts.length;
    while (i--) {
        var match = scripts[i].src.match(/(^|.*\/)main\.js$/);
        if (match) {
            root = match[1];
            break;
        }
    }
    return root;
}

function getSeasonalInformation() {
    // === Winter ===
    var winterMovements = {"verticalMovement":{1:[], 2:[]}, "horizontalMovement":{1:[], 2:[]}};
    // = vertical =
    for (var i=0; i<4; i++) {
        winterMovements.verticalMovement[1].push([]);
        for (var j=0; j<500; j++) {
            winterMovements.verticalMovement[1][i].push(0.7);
        }
    }
    for (var i=0; i<4; i++) {
        for (var j=0; j<500; j++) {
        winterMovements.verticalMovement[2].push([]);
            winterMovements.verticalMovement[2][i].push(1);
        }
    }
    // = horizontal =
    for (var i=0; i<4; i++) {
        winterMovements.horizontalMovement[1].push([]);
        var linspaceArr = makeArr(Math.PI*(i/2), Math.PI*((i+4)/2), 500);
        for (let j=0; j<linspaceArr.length; j++) {
            winterMovements.horizontalMovement[1][i].push(Math.sin(linspaceArr[j])*7);
        }
    }
    for (var i=0; i<4; i++) {
        winterMovements.horizontalMovement[2].push([]);
        var linspaceArr = makeArr(Math.PI*(i/2), Math.PI*((i+4)/2), 500);
        for (let j=0; j<linspaceArr.length; j++) {
            winterMovements.horizontalMovement[2][i].push(Math.sin(linspaceArr[j]));
        }
    }
    // = inf =
    const winter_inf = {"ratio":0.8, "path":{1:`${fallDir}/pics/winter1.png`, 2:`${fallDir}/pics/winter2.png`}, "size":{1:10, 2:20}, "verticalMovement":winterMovements.verticalMovement, "horizontalMovement":winterMovements.horizontalMovement};

    // === Spring ===
    var springMovements = {"verticalMovement":{1:[], 2:[]}, "horizontalMovement":{1:[], 2:[]}};
    // = vertical =
    for (var i=0; i<4; i++) {
        springMovements.verticalMovement[1].push([]);
        for (var j=0; j<500; j++) {
            springMovements.verticalMovement[1][i].push(1);
        }
    }
    for (var i=0; i<4; i++) {
        for (var j=0; j<500; j++) {
        springMovements.verticalMovement[2].push([]);
            springMovements.verticalMovement[2][i].push(1.2);
        }
    }
    // = horizontal =
    for (var i=0; i<4; i++) {
        springMovements.horizontalMovement[1].push([]);
        var linspaceArr = makeArr(Math.PI*(i/2), Math.PI*((i+4)/2), 500);
        for (let j=0; j<linspaceArr.length; j++) {
            springMovements.horizontalMovement[1][i].push(Math.sin(linspaceArr[j])*7);
        }
    }
    for (var i=0; i<4; i++) {
        springMovements.horizontalMovement[2].push([]);
        var linspaceArr = makeArr(Math.PI*(i/2), Math.PI*((i+4)/2), 500);
        for (let j=0; j<linspaceArr.length; j++) {
            springMovements.horizontalMovement[2][i].push(Math.sin(linspaceArr[j])*7);
        }
    }
    // = inf =
    const spring_inf = {"ratio":0.7, "path":{1:`${fallDir}/pics/spring1.png`, 2:`${fallDir}/pics/spring2.png`}, "size":{1:15, 2:15}, "verticalMovement":springMovements.verticalMovement, "horizontalMovement":springMovements.horizontalMovement};

    // === Summer ===
    var summerMovements = {"verticalMovement":{1:[], 2:[]}, "horizontalMovement":{1:[], 2:[]}};
    // = vertical =
    for (var i=0; i<4; i++) {
        summerMovements.verticalMovement[1].push([]);
        for (var j=0; j<500; j++) {
            summerMovements.verticalMovement[1][i].push(1);
        }
    }
    for (var i=0; i<4; i++) {
        for (var j=0; j<500; j++) {
        summerMovements.verticalMovement[2].push([]);
            summerMovements.verticalMovement[2][i].push(1.2);
        }
    }
    // = horizontal =
    for (var i=0; i<4; i++) {
        summerMovements.horizontalMovement[1].push([]);
        var linspaceArr = makeArr(Math.PI*(i/2), Math.PI*((i+4)/2), 500);
        for (let j=0; j<linspaceArr.length; j++) {
            summerMovements.horizontalMovement[1][i].push(Math.sin(linspaceArr[j])*2);
        }
    }
    for (var i=0; i<4; i++) {
        summerMovements.horizontalMovement[2].push([]);
        var linspaceArr = makeArr(Math.PI*(i/2), Math.PI*((i+4)/2), 500);
        for (let j=0; j<linspaceArr.length; j++) {
            summerMovements.horizontalMovement[2][i].push(Math.sin(linspaceArr[j])*7);
        }
    }
    // = inf =
    const summer_inf = {"ratio":0.7, "path":{1:`${fallDir}/pics/summer1.png`, 2:`${fallDir}/pics/summer2.png`}, "size":{1:20, 2:15}, "verticalMovement":summerMovements.verticalMovement, "horizontalMovement":summerMovements.horizontalMovement};

    // === Autumn ===
    var autumnMovements = {"verticalMovement":{1:[], 2:[]}, "horizontalMovement":{1:[], 2:[]}};
    // = vertical =
    for (var i=0; i<4; i++) {
        autumnMovements.verticalMovement[1].push([]);
        for (var j=0; j<500; j++) {
            autumnMovements.verticalMovement[1][i].push(1);
        }
    }
    for (var i=0; i<4; i++) {
        for (var j=0; j<500; j++) {
        autumnMovements.verticalMovement[2].push([]);
            autumnMovements.verticalMovement[2][i].push(1.2);
        }
    }
    // = horizontal =
    for (var i=0; i<4; i++) {
        autumnMovements.horizontalMovement[1].push([]);
        var linspaceArr = makeArr(Math.PI*(i/2), Math.PI*((i+4)/2), 500);
        for (let j=0; j<linspaceArr.length; j++) {
            autumnMovements.horizontalMovement[1][i].push(Math.sin(linspaceArr[j])*7);
        }
    }
    for (var i=0; i<4; i++) {
        autumnMovements.horizontalMovement[2].push([]);
        var linspaceArr = makeArr(Math.PI*(i/2), Math.PI*((i+4)/2), 500);
        for (let j=0; j<linspaceArr.length; j++) {
            autumnMovements.horizontalMovement[2][i].push(Math.sin(linspaceArr[j])*7);
        }
    }
    // = inf =
    const autumn_inf = {"ratio":0.7, "path":{1:`${fallDir}/pics/autumn1.png`, 2:`${fallDir}/pics/autumn2.png`}, "size":{1:20, 2:20}, "verticalMovement":autumnMovements.verticalMovement, "horizontalMovement":autumnMovements.horizontalMovement};
    return [winter_inf, spring_inf, summer_inf, autumn_inf];
}

const fallDir = getScriptDir();

const [winter_inf, spring_inf, summer_inf, autumn_inf] = getSeasonalInformation();

var init = true;

var count = 0;

// ===== Main =====
function fallElement(elements, quantities) {
    if  (elements.length != quantities.length) {
        console.log('\u001b[31m' + "Fall_Module_ERR : elements.length does not match quantities.length");
        return;
    }
    for (let i=0; i<elements.length; i++) {
        if (quantities[i] === "low") {
            var element_quantity = 10;
        } else if (quantities[i] === "medium") {
            var element_quantity = 50;
        } else if (quantities[i] === "high") {
            var element_quantity = 100;
        } else {
            return;
        }
        const targetElement = $(elements[i]);
        const width = targetElement.width();
        const height = targetElement.height();
        if (targetElement.css("z-index") === "auto") {
            var zIndex = 999;
        } else {
            var zIndex = Number(targetElement.css("z-index"))+1;
        }
        const fallLayer = $("<div>", {class:"fall-layer"}).css("width", `${targetElement.width()}`).css("height", `${targetElement.height()}`).css("z-index", `${zIndex}`).css("overflow", "hidden").css("background-color", "transparent").css("position", "relative").css("top", `${-targetElement.height()}px`).css("margin-bottom", `${-targetElement.height()}px`).css("pointer-events", "none").css("user-select", "none").insertAfter(targetElement);
        const month = new Date().getMonth()+1;
        if (month == 12 || (month < 3)) {
            var inf = winter_inf;
        } else if (month >= 4 && month < 7) {
            var inf = spring_inf;
        } else if (month >= 7 && month < 10) {
            var inf = summer_inf;
        } else if (month >= 10 && month < 12) {
            var inf = autumn_inf;
        }
        // for debug
        // inf = autumn_inf;
        for (let j=0; j<element_quantity; j++) {
            if (Math.random() >= (1-inf.ratio)) {
                var type = 1;
            } else {
                var type = 2;
            }
            var positionX = Math.random()*width;
            var positionY = Math.random()*height - height - inf.size[type];
            $("<img>", {src:inf.path[type], class:"ele", originalX:`${positionX}`, picType:`${type}`, moveRoute:`${Math.floor(Math.random()*(inf.verticalMovement[1].length/2))}`}).css("width", `${inf.size[type]}px`).css("position","ralative").css("position", "absolute").css("top",`${positionY}px`).css("left",`${positionX}px`).css("user-select", "none").appendTo(fallLayer);
        }
        precipitateElement(inf, fallLayer);
        updateFallLayerSize(fallLayer);
    }
};

function precipitateElement(inf, fallLayer) {
    var startTime = performance.now();
    count += 1;
    const elements = fallLayer.find(".ele");
    elements.each(function(i, ele){
        var ele = $(ele);
        if (Number(ele.css("top").replace("px", "")) < fallLayer.height()) {
            var picType = Number(ele.attr("picType"));
            var moveRoute = Number(ele.attr("moveRoute"));
            ele.css("top", `${Number(ele.css("top").replace("px", "")) + inf.verticalMovement[picType][moveRoute][count%(inf.verticalMovement[picType][moveRoute].length)]}px`);
            ele.css("left", `${Number(ele.attr("originalX")) + (inf.horizontalMovement[picType][moveRoute][count%inf.horizontalMovement[picType][moveRoute].length])}px`);
        } else {
            ele.css("top", `${ele.height()*-1}px`);
            ele.css("left", `${Math.random()*Number(fallLayer.css("width").replace("px", ""))}px`);
        }
    });
    var endTime = performance.now();
    if ((endTime - startTime) < 15) {
        var intervalTime = 14 - (endTime - startTime);
    } else {
        var intervalTime = 0;
    }
    setTimeout(function(){
        precipitateElement(inf, fallLayer);
    }, intervalTime);
}

function updateFallLayerSize(fallLayer) {
    fallLayer.css("width", `${fallLayer.prev().css("width")}`);
    fallLayer.css("height", `${fallLayer.prev().css("height")}`);
    setTimeout(function(){
        updateFallLayerSize(fallLayer);
    }, 1000);
}