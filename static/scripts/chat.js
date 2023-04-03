var coll = document.getElementsByClassName('collapsible')


for(let i=0; i< coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle("active")

        var content = document.getElementsByClassName('content')[0]
        // OR
        // var content = document.querySelector('.content')
        console.log(content);


        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }else {
            content.style.maxHeight = content.scrollHeight + 'px';
            console.log(content.scrollHeight)
        }
    })
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours //eg: 08
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let time = hours + ":" + minutes
    return time;
}

function firstBotMessage() {
    let firstMessage = "Hello, how may I help you?"
    let time = getTime();

    document.getElementById('botStarterMessage').innerHTML = '<div class="botText" style="margin-top:15px"><span>'+firstMessage+'</span> \n <p class="smalltime">'+time+'</p></div>'

    // $("#chat-timestamp").append(time);
    document.getElementById('userInput').scrollIntoView(false)

}

firstBotMessage();


function gethardResponse(userText){
    let botResponse = getBotResponse(userText)
    let time = getTime()
    
    if(botResponse == "Ask something else"){
        console.log("YES");
        let botHtml = '<div class="botText"><span>' + botResponse +'</span>\n'+
        '<div class="suggestBtns">'+
        '<button id="1" onclick="inpText(1)">How are you?</button>'+
        '<button id="4" onclick="inpText(4)">What day is today?</button>'+
        '<button id="2" onclick="inpText(2)">I need help</button>'+
        '<button id="3" onclick="inpText(3)">What is the time?</button>'+
        '</div>'+
        '<p class="smalltime">'+time+'</p></div>'
        
        $("#chatbox").append(botHtml);
        
        document.getElementById("chat-bar-bottom").scrollIntoView(true)
    }
    else {
        let botHtml = '<div class="botText"><span>' + botResponse +'</span>\n <p class="smalltime">'+time+'</p></div>'
        
        $("#chatbox").append(botHtml);
        
        document.getElementById("chat-bar-bottom").scrollIntoView(true)
    }
    
}

function inpText(val){
    let id2 = document.getElementById(val)
    let text2 = id2.innerText
    getResponse2(text2);
}

function getResponse2(text3) {
    let userText = text3
    let time = getTime()

    if (userText == '') {
        userText = ""
    }

    let userHtml = '<div class="userText"><span>' + userText +'</span>\n <p class="smalltime2">'+time+'</p></div>'

    $('#textInput').val("")
    $("#chatbox").append(userHtml)
    document.getElementById('chat-bar-bottom').scrollIntoView(true)

    setTimeout(() => {
        gethardResponse(userText)
    },1000)

}

function getResponse() {
    let userText = $('#textInput').val()
    let time = getTime()

    if (userText == '') {
        userText = ""
    }

    let userHtml = '<div class="userText"><span>' + userText +'</span>\n <p class="smalltime2">'+time+'</p></div>'

    $('#textInput').val("")
    $("#chatbox").append(userHtml)
    document.getElementById('chat-bar-bottom').scrollIntoView(true)

    setTimeout(() => {
        gethardResponse(userText)
    },1000)

}

function buttonSendText(sampleText) {
    let time = getTime()
    let userHtml = '<div class="userText"><span>' + sampleText +'</span>\n <p class="smalltime2">'+time+'</p></div>'

    $('#textInput').val("")
    $("#chatbox").append(userHtml)
    document.getElementById('chat-bar-bottom').scrollIntoView(true)
}


function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart Clicked !!")
}

// 13 means Enter
$('#textInput').keypress(function(e) {
    if(e.which == 13){
        getResponse()
    }
})