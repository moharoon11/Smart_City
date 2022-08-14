let title = document.querySelector("#title")
let textArea = document.getElementById("textarea")
let addQuestion = document.getElementById("add-question")
let problemContainer = document.getElementsByClassName("problem-container")[0]


addQuestion.addEventListener(('click'), addingQuestion)



function addingQuestion(){
    let div = document.createElement('div')
    div.style.border = "3px solid black"
    div.style.borderRadius = "7px"
    div.style.marginBottom = "16px"
    div.style.marginTop = "16px"
    problemContainer.append(div)
    let heading = document.createElement('h1')
    heading.style.fontSize = "25px"
    heading.innerText = title.value
    let para = document.createElement('p')
    para.style.fontSize = "19px"
    para.innerText = textArea.value

    div.append(heading)
    div.append(para)
}

let answerTitle = document.getElementById("answer-title")
let answerTextarea = document.getElementById("answer-textarea")
let addAnswer = document.getElementById("add-answer")
let answerContainer = document.getElementsByClassName("answer-container")[0]
addAnswer.addEventListener('click', addingAnswer)



function addingAnswer(){
  let div = document.createElement('div')
  div.style.border = "2px solid black"
  div.style.borderRadius = "7px"
  div.style.marginBottom = "16px"
  div.style.marginTop = "16px"
  answerContainer.append(div)
  let heading =  document.createElement("h1")
  heading.style.fontSize = "25px"
  heading.innerText = answerTitle.value
  
  let para = document.createElement("p")
  para.style.fontSize = "19px"
  para.innerText = answerTextarea.value

  div.append(heading)
  div.append(para)

  
}



