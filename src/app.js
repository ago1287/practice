const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://en.wikipedia.org/wiki/New_York_City#/media/File:West_side_of_Manhattan_from_Hudson_Commons_(95103p).jpg",
                alt: "Photo of the Empire State building during daytime",
                credit: "Christopher Czermak"
            },
            {
                text: "Austin",
                image: "https://unsplash.com/photos/HCcmfL-l08I",
                alt: "Time-lapse photography car lights on bridge",
                credit: "Carlos Alfonso"
            },
            {
                text: "Portland",
                image: "https://unsplash.com/photos/6iFihNnzqyo",
                alt: "High-rise buildings",
                credit: "Elena Kuchko"
            },
            {
                text: "New Orleans",
                image: "https://unsplash.com/photos/jQwv5FnpksM",
                alt: "Road with people and house",
                credit: "João Francisco"
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Pizza",
                image: "https://unsplash.com/photos/SU1LFoeEUkk",
                alt: "Pepperoni Pizza",
                credit: "Alan Hardman"
            },
            {
                text: "Sandwich",
                image: "https://unsplash.com/photos/Gg5-K-mJwuQ",
                alt: "ham sandwich on white surface",
                credit: "Easters Collective"
            },
            {
                text: "Pasta",
                image: "https://unsplash.com/photos/PLyJqEJVre0",
                alt: "Pasta in tomato sauce",
                credit: "Mgg Vitchakorn"
            },
            {
                text: "Hamburger",
                image: "https://unsplash.com/photos/pu6b4yIlQF4",
                alt: "hamburger",
                credit: "sk"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home:",
        answers: [
            {
                text: "Traditional",
                image: "https://unsplash.com/photos/Yqhik5dmw50",
                alt: "focus photography of building windows",
                credit: "Burgess Milner"   
            },
            {
                text: "Modern",
                image: "https://unsplash.com/photos/3cl6impBd_8",
                alt: "low angle view of building",
                credit: "Amir Hosseini"   
            },
            {
                text: "House",
                image: "https://unsplash.com/photos/IYfp2Ixe9nM",
                alt: "trees beside white house",
                credit: "Phil Hearing" 
            },
            {
                text: "Mountains",
                image: "https://unsplash.com/photos/44Xot_6mFHY",
                alt: "brown wooden cabin in front of forest",
                credit: "eulauretta"
            }
        ]
    }
]

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)
        
        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick)
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)
            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.credit)
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')

            answerBlock.append(answerImage, answerTitle, answerInfo)
            answersBlock.append(answerBlock)
        })
        questionDisplay.append(answersBlock)
    })
}
populateQuestions()

const handleClick = () => {
    console.log('clicked')
}