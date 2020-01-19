var Counter = 0,
    firstAns = document.getElementsByClassName('fa'),
    secondAns = document.querySelectorAll('.sa'),
    thirdAns = document.querySelectorAll('.ta');

function checkFirstQuestion(n) {
    firstAns[0].style.backgroundColor = "#C85858"; 
    secondAns[0].style.backgroundColor = "#C85858";
    thirdAns[0].style.backgroundColor = "#5BC660";
    if(n == 3){
        Counter++;
    }
    firstAns[0].disabled = true;
    secondAns[0].disabled = true;
    thirdAns[0].disabled = true;
    console.log(Counter);
}

function checkSecondQuestion(n) {
    firstAns[1].style.backgroundColor = "#C85858";
    secondAns[1].style.backgroundColor = "#5BC660";
    thirdAns[1].style.backgroundColor = "#C85858";
    if(n == 2){
        Counter++;
    }
    firstAns[1].disabled = true;
    secondAns[1].disabled = true;
    thirdAns[1].disabled = true;
    console.log(Counter);
}

function checkThirdQuestion(n) {
    firstAns[2].style.backgroundColor = "#C85858";
    secondAns[2].style.backgroundColor = "#C85858";
    thirdAns[2].style.backgroundColor = "#5BC660";
    if(n == 1){
        Counter++;
    }
    firstAns[2].disabled = true;
    secondAns[2].disabled = true;
    thirdAns[2].disabled = true;
    console.log(Counter);
}

function checkFourthQuestion(n) {
    firstAns[3].style.backgroundColor = "#C85858";
    secondAns[3].style.backgroundColor = "#C85858";
    thirdAns[3].style.backgroundColor = "#5BC660";
    if(n == 3){
        Counter++;
    }
    firstAns[3].disabled = true;
    secondAns[3].disabled = true;
    thirdAns[3].disabled = true;
    console.log(Counter);
}

function checkFifthQuestion(n) {
    firstAns[4].style.backgroundColor = "#5BC660";
    secondAns[4].style.backgroundColor = "#C85858";
    thirdAns[4].style.backgroundColor = "#C85858";
    if(n == 1){
        Counter++;
    }
    firstAns[4].disabled = true;
    secondAns[4].disabled = true;
    thirdAns[4].disabled = true;
    console.log(Counter);
}

function checkSixthQuestion(n) {
    firstAns[5].style.backgroundColor = "#5BC660";
    secondAns[5].style.backgroundColor = "#C85858";
    thirdAns[5].style.backgroundColor = "#C85858";
    if(n == 1){
        Counter++;
    }
    firstAns[5].disabled = true;
    secondAns[5].disabled = true;
    thirdAns[5].disabled = true;
    console.log(Counter);
}

function checkSeventhQuestion(n) {
    firstAns[6].style.backgroundColor = "#C85858";
    secondAns[6].style.backgroundColor = "#5BC660";
    thirdAns[6].style.backgroundColor = "#C85858";
    if(n == 2){
        Counter++;
    }
    firstAns[6].disabled = true;
    secondAns[6].disabled = true;
    thirdAns[6].disabled = true;
    console.log(Counter);
}

function checkEighthQuestion(n) {
    firstAns[7].style.backgroundColor = "#C85858";
    secondAns[7].style.backgroundColor = "#C85858";
    thirdAns[7].style.backgroundColor = "#5BC660";
    if(n == 3){
        Counter++;
    }
    firstAns[7].disabled = true;
    secondAns[7].disabled = true;
    thirdAns[7].disabled = true;
    console.log(Counter);
}

function checkNinthQuestion(n) {
    firstAns[8].style.backgroundColor = "#5BC660";
    secondAns[8].style.backgroundColor = "#C85858";
    thirdAns[8].style.backgroundColor = "#C85858";
    if(n == 1){
        Counter++;
    }
    firstAns[8].disabled = true;
    secondAns[8].disabled = true;
    thirdAns[8].disabled = true;
    console.log(Counter);
}

function checkTenthQuestion(n) {
    firstAns[9].style.backgroundColor = "#C85858";
    secondAns[9].style.backgroundColor = "#C85858";
    thirdAns[9].style.backgroundColor = "#5BC660";
    if(n == 3){
        Counter++;
    }
    firstAns[9].disabled = true;
    secondAns[9].disabled = true;
    thirdAns[9].disabled = true;
    console.log(Counter);
}



function QuestionReady() {

    if (window.getComputedStyle(document.getElementById('ninth')).display == "block") {
        document.getElementById('ninth').style.display = "none";
        document.getElementById('tenth').style.display = "block";
      }

    if (window.getComputedStyle(document.getElementById('eighth')).display == "block") {
        document.getElementById('eighth').style.display = "none";
        document.getElementById('ninth').style.display = "block";
      }

    if (window.getComputedStyle(document.getElementById('seventh')).display == "block") {
        document.getElementById('seventh').style.display = "none";
        document.getElementById('eighth').style.display = "block";
      }

    if (window.getComputedStyle(document.getElementById('sixth')).display == "block") {
        document.getElementById('sixth').style.display = "none";
        document.getElementById('seventh').style.display = "block";
      }

    if (window.getComputedStyle(document.getElementById('fifth')).display == "block") {
        document.getElementById('fifth').style.display = "none";
        document.getElementById('sixth').style.display = "block";
      }

    if (window.getComputedStyle(document.getElementById('fourth')).display == "block") {
        document.getElementById('fourth').style.display = "none";
        document.getElementById('fifth').style.display = "block";
      }

    if (window.getComputedStyle(document.getElementById('third')).display == "block") {
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "block";
      }

    if (window.getComputedStyle(document.getElementById('second')).display == "block") {
      document.getElementById('second').style.display = "none";
      document.getElementById('third').style.display = "block";
    }
    if (window.getComputedStyle(document.getElementById('first')).display == "block") {
      document.getElementById('first').style.display = "none";
      document.getElementById('second').style.display = "block";
    }

  }

function complete() {
    document.getElementById('tenth').style.display = "none";
    document.getElementById('checkResult').style.display = "block";
    document.getElementById('CounterText').innerHTML = Counter;
    if(Counter<=6) {
        document.getElementById('comment').innerHTML = "Don't worry, Alex;)";
    }
    if((Counter>6)&&(Counter<10)) {
        document.getElementById('comment').innerHTML = "Not bad, but try again)";
    }
    if(Counter==10) {
        document.getElementById('comment').innerHTML = "Nice work!";
    }
}



