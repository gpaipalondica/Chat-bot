function getBotResponse(input) {

    console.log("Input text:",input)
    input = input.toLowerCase()
    console.log("Input now:",input)

    let d = new Date
    
    if(input == "hello"){
        return "Hello there! How are you doing?";
    } 
    else if(input == "bye"){
        return "Have a nice day!";
    } 
    else if(input == "i need help"){
        return "Sure. What do you need?";
    } 
    else if(input == "i'm doing good" || input == "i'm doing fine"){
        return "That's nice to hear";
    } 
    else if(input == "how are you?"){
        return "I'm good. Thanks for asking!";
    } 
    else if(input == "what is the time?" || input == "time"){
        return "Current time is "+d.toTimeString();
    } 
    else if(input == "what day is today?" || input == "time"){
        return "Today is "+d.toLocaleDateString('en-US', {weekday: 'long'});
    } 
    else {
        return "Ask something else" 
    }
}