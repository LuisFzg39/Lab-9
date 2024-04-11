function sendMessage() {

    var messageInput = document.getElementById("messageInput")
    var message = messageInput.value.trim()
  
    if (message !== "") {

      var messageElement = document.createElement("div")
      messageElement.textContent = message
  
        if (isEven(document.querySelectorAll(".message").length)) {

            messageElement.style.backgroundColor = "#1979dfda"
            messageElement.style.color = "white"
            messageElement.style.fontSize = "25px"
            messageElement.style.margin = "15px"
            messageElement.style.padding = "12px"
            messageElement.style.borderRadius = "10px"
            
            
        } else {

            messageElement.style.backgroundColor = "#dc3545"
            messageElement.style.color = "#fff"
            
        }
  
        document.getElementById("messages").appendChild(messageElement)
        messageInput.value = ""
 
    } 
   
}

function sendMessage2() {

    var messageInput2 = document.getElementById("messageInput2")
    var message2 = messageInput2.value.trim()

    if (message2 !== "") {

        var messageElement2 = document.createElement("div")
        messageElement2.textContent = message2
    
        if (isEven(document.querySelectorAll(".message2").length)) {

          messageElement2.style.backgroundColor = "#dd2b2bd9"
          messageElement2.style.color = "white"
          messageElement2.style.fontSize = "25px"
          messageElement2.style.margin = "15px"
          messageElement2.style.padding = "12px"
          messageElement2.style.borderRadius = "10px"

        } else {

          messageElement2.style.backgroundColor = "#dc3545"
          messageElement2.style.color = "#fff"

        }
    
        document.getElementById("messages").appendChild(messageElement2)
        messageInput2.value = ""
    
    } 


}
  
function isEven(n) {
    return n % 2 === 0
}
  