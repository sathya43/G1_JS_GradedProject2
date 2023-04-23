import { loadLeftColumnInfo, loadRightColumnInfo } from '/JS/resume.js'

var resume = []
var currFilteredArray = []
var currIndex = 0

fetch('/inputData/Data.json')
  .then((response) => response.json())
  .then((data) => {
    resume = JSON.parse(JSON.stringify(data))
    currFilteredArray = resume.resume
    setCurrArray(currFilteredArray, 0)
    loadFilteredResumes(currFilteredArray, 0)
  })
  .catch((error) => console.error(error))

function setCurrArray(currArray, index) {
  currFilteredArray = currArray
  currIndex = index
  resume = currArray
}

const inputElement = document.querySelector('.center-input')

inputElement.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    // Enter key pressed, do something...
    const inputValue = event.target.value.toLocaleLowerCase()

    const filteredResumes = resume.filter((resumeItem) => {
      let appliedPosition =
        resumeItem['basics']['AppliedFor'].toLocaleLowerCase()

      let keys = resumeItem.skills.keywords.map((item) => {
        return item.toLocaleLowerCase()
      })
      if (keys.includes(inputValue) || inputValue == appliedPosition) {
        return true
      } else {
        return false
      }
    })

    currFilteredArray = filteredResumes
    currIndex = 0

    console.log(currFilteredArray)

    if (currFilteredArray.length == 0) {
      /*If no input is entered to search and submitted we will see all resumes */
      if (!inputValue) {
        currFilteredArray = resume
        setResultsDisplayElements()
        loadFilteredResumes(currFilteredArray, 0)
      } else {
        noResultFound()
      }
    } else {
      setResultsDisplayElements()
      loadFilteredResumes(currFilteredArray, 0)
    }
  }
})

function noResultFound() {
  let resume = document.querySelector('.resume')
  resume.classList.remove('isVisible')
  resume.classList.add('notVisible')

  let notFoundContainer = document.querySelector('#not-found-error-message')
  notFoundContainer.classList.add('isVisible')
  notFoundContainer.classList.remove('notVisible')
}

function setResultsDisplayElements() {
  let resume = document.querySelector('.resume')
  resume.classList.add('isVisible')
  resume.classList.remove('notVisible')

  let notFoundContainer = document.querySelector('#not-found-error-message')
  notFoundContainer.classList.remove('isVisible')
  notFoundContainer.classList.add('notVisible')
}

function loadFilteredResumes(filteredResumes, index) {
  removeAllElements()
  buttonsDisplayBasedOnIndex(filteredResumes, index)
  loadLeftColumnInfo(index, filteredResumes)
  loadRightColumnInfo(index, filteredResumes)
}

function buttonsDisplayBasedOnIndex(filteredResumes, index) {
  let leftBtn = document.querySelector('.left-btn')
  let rightBtn = document.querySelector('.right-btn')

  if (filteredResumes.length > 1) {
    rightBtn.classList.remove('notVisible')
    rightBtn.classList.add('isVisible')
  }

  if (index > 0) {
    leftBtn.classList.remove('notVisible')
    leftBtn.classList.add('isVisible')
  }

  if (index == 0) {
    leftBtn.classList.remove('isVisible')
    leftBtn.classList.add('notVisible')
  }
  if (index == filteredResumes.length - 1) {
    rightBtn.classList.remove('isVisible')
    rightBtn.classList.add('notVisible')
  }
  if (index > 0 && index < filteredResumes.length - 1) {
    leftBtn.classList.remove('notVisible')
    leftBtn.classList.add('isVisible')

    rightBtn.classList.remove('notVisible')
    rightBtn.classList.add('isVisible')
  }
}

function removeAllElements() {
  let leftColoumnEle = document.querySelector('.personal-info')
  let rightColumnEle = document.querySelector('.right-column')

  leftColoumnEle.innerHTML = ''
  rightColumnEle.innerHTML = ''
}

const nextBtn = document.querySelector('.right-btn')

nextBtn.addEventListener('click', () => {
  if (currIndex <= currFilteredArray.length - 1) {
    currIndex += 1
  }
  loadFilteredResumes(currFilteredArray, currIndex)
})

const prevBtn = document.querySelector('.left-btn')

prevBtn.addEventListener('click', () => {
  if (currIndex >= 1) {
    currIndex -= 1
  }
  loadFilteredResumes(currFilteredArray, currIndex)
})
