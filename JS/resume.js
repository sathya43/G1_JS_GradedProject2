function loadLeftColumnInfo(index, resumeArray) {
  let currResume = resumeArray[index]

  let applicantName = document.getElementById('applicant-name')
  applicantName.innerHTML = currResume['basics']['name']

  let appliedRole = document.getElementById('applied-position')
  appliedRole.innerHTML = `Applied For: ${currResume.basics.AppliedFor}`

  let personalInfo = document.querySelector('.personal-info')

  /* Load Personal Information */
  const peronalInformation = document.createElement('div')
  peronalInformation.innerHTML = 'Technical Information'
  peronalInformation.classList.add('personal-info-item')
  personalInfo.appendChild(peronalInformation)

  const phoneNo = document.createElement('div')
  phoneNo.innerHTML = currResume.basics.phone
  phoneNo.classList.add('personal-info-item-content')
  personalInfo.appendChild(phoneNo)

  const email = document.createElement('div')
  email.innerHTML = currResume.basics.email
  email.classList.add('personal-info-item-content')
  personalInfo.appendChild(email)

  const anchorDiv = document.createElement('div')
  const anchor = document.createElement('a')
  anchor.href = currResume.basics.profiles.url
  anchor.textContent = currResume.basics.profiles.network
  anchorDiv.appendChild(anchor)
  anchorDiv.classList.add('personal-info-item-content')
  personalInfo.appendChild(anchorDiv)

  /*Load technical skills */
  const techSkills = document.createElement('div')
  techSkills.innerHTML = 'Technincal Skills'
  techSkills.classList.add('personal-info-item')
  personalInfo.appendChild(techSkills)

  const keywords = currResume.skills.keywords

  keywords.forEach((item) => {
    const skill = document.createElement('div')
    skill.innerHTML = item
    skill.classList.add('personal-info-item-content')
    personalInfo.appendChild(skill)
  })

  /* Load Hobbies */
  const hobbies = document.createElement('div')
  hobbies.innerHTML = 'Hobbies'
  hobbies.classList.add('personal-info-item')
  personalInfo.appendChild(hobbies)

  const hobbiesArray = currResume.interests.hobbies

  hobbiesArray.forEach((item) => {
    const hobby = document.createElement('div')
    hobby.innerHTML = item
    hobby.classList.add('personal-info-item-content')
    personalInfo.appendChild(hobby)
  })
}

function loadRightColumnInfo(index, resumeArray) {
  /*Load the work experience related details*/
  let rightColumn = document.querySelector('.right-column')
  let currResume = resumeArray[index]

  let work = currResume.work

  const workSectionTitle = document.createElement('h2')
  workSectionTitle.innerHTML = 'Work Experience in previous company'
  workSectionTitle.classList.add('section-title')
  rightColumn.appendChild(workSectionTitle)

  const workSectionContent = document.createElement('div')
  workSectionContent.classList.add('section-content')

  const companyName = document.createElement('p')
  companyName.innerHTML = `<strong> Company Name: </strong> ${work['Company Name']}`
  workSectionContent.appendChild(companyName)

  const position = document.createElement('p')
  position.innerHTML = `<strong> Position: </strong> ${work['Position']}`
  workSectionContent.appendChild(position)

  const startDate = document.createElement('p')
  startDate.innerHTML = `<strong> Start Date: </strong> ${work['Start Date']}`
  workSectionContent.appendChild(startDate)

  const endDate = document.createElement('p')
  endDate.innerHTML = `<strong> End Date: </strong> ${work['End Date']}`
  workSectionContent.appendChild(endDate)

  const summary = document.createElement('p')
  summary.innerHTML = `<strong> Summary: </strong> ${work['Summary']}.`
  workSectionContent.appendChild(summary)

  rightColumn.appendChild(workSectionContent)

  /*Load the projects*/
  let project = currResume.projects

  const projectSectionTitle = document.createElement('h2')
  projectSectionTitle.innerHTML = 'Projects'
  projectSectionTitle.classList.add('section-title')
  rightColumn.appendChild(projectSectionTitle)

  const projectSectionContent = document.createElement('div')
  projectSectionContent.classList.add('section-content')

  const projectDetails = document.createElement('p')
  projectDetails.innerHTML = `<strong> ${project.name}: </strong> ${project.description} `
  projectSectionContent.appendChild(projectDetails)
  rightColumn.appendChild(projectSectionContent)

  /* Load Education */
  let education = currResume.education

  const educationSectionTitle = document.createElement('h2')
  educationSectionTitle.innerHTML = 'Education'
  educationSectionTitle.classList.add('section-title')
  rightColumn.appendChild(educationSectionTitle)

  const educationSectionContent = document.createElement('div')
  educationSectionContent.classList.add('section-content')

  const ul1 = document.createElement('ul')

  const uGdetails = document.createElement('li')
  uGdetails.innerHTML = `<strong> UG: </strong> ${education['UG']['institute']}, ${education['UG']['course']},
    Start Date: ${education['UG']['Start Date']},
    Completion Date: ${education['UG']['End Date']},
    CGPA: ${education['UG']['cgpa']}`
  ul1.appendChild(uGdetails)

  const sscDetails = document.createElement('li')
  sscDetails.innerHTML = `<strong> Secondary School: </strong> ${education['Senior Secondary']['institute']}, CGPA: ${education['Senior Secondary']['cgpa']}`
  ul1.appendChild(sscDetails)

  const highSchoolDetails = document.createElement('li')
  highSchoolDetails.innerHTML = `<strong>High School: </strong> ${education['High School']['institute']}, CGPA: ${education['High School']['cgpa']}`
  ul1.appendChild(highSchoolDetails)

  educationSectionContent.appendChild(ul1)
  rightColumn.appendChild(educationSectionContent)

  /* Load internship Details*/

  let internDetails = currResume.Internship

  const internSectionTitle = document.createElement('h2')
  internSectionTitle.innerHTML = 'Internship'
  internSectionTitle.classList.add('section-title')
  rightColumn.appendChild(internSectionTitle)

  const internSectionContent = document.createElement('div')
  internSectionContent.classList.add('section-content')

  const ul2 = document.createElement('ul')

  const internCompanyName = document.createElement('li')
  internCompanyName.innerHTML = `<strong> Company Name: </strong> ${internDetails['Company Name']}`
  ul2.appendChild(internCompanyName)

  const internPosition = document.createElement('li')
  internPosition.innerHTML = `<strong> Position: </strong> ${internDetails['Position']}`
  ul2.appendChild(internPosition)

  const internStartDate = document.createElement('li')
  internStartDate.innerHTML = `<strong> Start Date: </strong> ${internDetails['Start Date']}`
  ul2.appendChild(internStartDate)

  const internEndDate = document.createElement('li')
  internEndDate.innerHTML = `<strong> End Date: </strong> ${internDetails['End Date']}`
  ul2.appendChild(internEndDate)

  const internSummary = document.createElement('li')
  internSummary.innerHTML = `<strong> Summary: </strong> ${internDetails['Summary']}.`
  ul2.appendChild(internSummary)

  internSectionContent.appendChild(ul2)
  rightColumn.appendChild(internSectionContent)

  /*Loading the acievement details*/

  let achievements = currResume.achievements

  const achievementTitle = document.createElement('h2')
  achievementTitle.innerHTML = 'Achievements'
  achievementTitle.classList.add('section-title')
  rightColumn.appendChild(achievementTitle)

  const achievementSectionContent = document.createElement('div')
  achievementSectionContent.classList.add('section-content')

  const ul3 = document.createElement('ul')

  const achievementSummary = document.createElement('li')
  achievementSummary.innerHTML = `<strong> Summary: </strong> ${achievements['Summary']}.`
  ul3.appendChild(achievementSummary)

  achievementSectionContent.appendChild(ul3)
  rightColumn.appendChild(achievementSectionContent)
}

export { loadLeftColumnInfo, loadRightColumnInfo }
