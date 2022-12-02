var konami = new Array(11);
konami[0] = "arrowup";
konami[1] = "arrowup";
konami[2] = "arrowdown";
konami[3] = "arrowdown";
konami[4] = "arrowleft";
konami[5] = "arrowright";
konami[6] = "arrowleft";
konami[7] = "arrowright";
konami[8] = "b";
konami[9] = "a";
konami[10] = "enter";
var tableInput = new Array();
var count = 0;
var countKonami = 0;
var solvInput = new Array(17);
solvInput[0] = "arrowup";
solvInput[1] = "arrowleft";
solvInput[2] = "arrowup";
solvInput[3] = "arrowleft";
solvInput[4] = "arrowup";
solvInput[5] = "arrowright";
solvInput[6] = "arrowdown";
solvInput[7] = "arrowright";
solvInput[8] = "arrowup";
solvInput[9] = "arrowleft";
solvInput[10] = "arrowup";
solvInput[11] = "arrowleft";
solvInput[12] = "arrowup";
solvInput[13] = "arrowright";
solvInput[14] = "arrowup";
solvInput[15] = "arrowleft";
solvInput[16] = "arrowup";

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let buffer = [];
    let lastKeyTime = Date.now();

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        const currentTime = Date.now();

        if (currentTime - lastKeyTime > 2000) {
            buffer = [];
        }

        buffer.push(key);
        lastKeyTime = currentTime;

        console.log(buffer);

        if(buffer.length>=2) {
            console.log("a");
            if(buffer[0] == "arrowup" && buffer[1] == "arrowup") {
                console.log("bbb");
                if(buffer.length==11) {
                    console.log("Konami")
                    tableInput = buffer;
                    console.log("aaa:", tableInput);
                    console.log("konami: ", konami)
                    for(y = 0; y<tableInput.length; y+=1) {
                        if(tableInput[y] == konami[y]) {
                            countKonami+=1;
                            console.log(countKonami);
                        }
                    }
                    if(countKonami==11) {
                        window.location.href = "rickroll.html";
                    }   
                    countKonami = 0;
                }
            }
            
        }

        if(buffer.length == 17) {
            tableInput = buffer;
            console.log("int ", tableInput);
            console.log("solv", solvInput);
            var y = 0;
            console.log(y, tableInput);
            for(y = 0; y<tableInput.length; y+=1) {
                if(tableInput[y] == solvInput[y]) {
                    count+=1;
                    console.log("count:", count);
                }
            }
            if(count==17) {
                alert("bravo!");
            }
            count = 0;
        }
    });
});

