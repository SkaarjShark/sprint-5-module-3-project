function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const nav = document.createElement('nav')
    links.forEach(link => {
      const a = document.createElement('a')
      a.textContent = link.textContent
      a.title = link.title
      a.href = link.href
      nav.appendChild(a)
    })
    return nav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const container = document.createElement('div')
    container.classList.add("learner-card")
    // P Tags
    const name = document.createElement('p')
    name.textContent = learner.fullName
    const id = document.createElement('p')
    id.textContent = `Learner ID: ${learner.id}`
    const birth = document.createElement('p')
    birth.textContent = `Date of Birth: ${learner.dateOfBirth}`
    const fav = document.createElement('p')
    const favLanguage = languages.find(lang => lang.id === learner.favLanguage)
    fav.textContent = `Favorite Language: ${favLanguage.name}`
    // Appending the P tags to the div
    container.appendChild(name); container.appendChild(id)
    container.appendChild(birth); container.appendChild(fav)
    container.addEventListener("click", () => container.classList.add("active"))
    return container
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(learnerCard)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement("footer")
    // First Div's Children
    const p1 = document.createElement("p")
    p1.classList.add("company-name")
    p1.textContent = footerData.companyName
    const p2 = document.createElement("p")
    p2.classList.add("address")
    p2.textContent = footerData.address
    const p3 = document.createElement("p")
    p3.classList.add("contact-email")
    p3.textContent = "Email: "
    const aP = document.createElement("a")
    aP.href = footerData.contactEmail
    aP.textContent = footerData.contactEmail
    p3.appendChild(aP)
    // First Div
    const divA = document.createElement("div")
    divA.classList.add("company-info")
    divA.appendChild(p1); divA.appendChild(p2); divA.appendChild(p3)
    // console.log(divA)
    // Second Div's Children
    const a1 = document.createElement("a")
    a1.href = footerData.socialMedia.twitter
    a1.textContent = "Twitter"
    const a2 = document.createElement("a")
    a2.href = footerData.socialMedia.facebook
    a2.textContent = "Facebook"
    const a3 = document.createElement("a")
    a3.href = footerData.socialMedia.instagram
    a3.textContent = "Instagram"
    // Second Div
    const divB = document.createElement("div")
    divB.classList.add("social-media")
    divB.appendChild(a1); divB.appendChild(a2); divB.appendChild(a3)
    // Returning the footer
    footer.appendChild(divA); footer.appendChild(divB)
    const divC = document.createElement("div")
    divC.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY 2023` 
    footer.appendChild(divC)
    return footer
    // return document.createElement('footer')
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  const section = document.querySelector("section")
  section.addEventListener("click", evt => {
    if (evt.target === section) {
      const sectionDiv = document.querySelectorAll("section div")
      sectionDiv.forEach(div => div.classList.remove("active"))
    }
  })
  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
