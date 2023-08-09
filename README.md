## Introduction

"Odd or Even" is the second project developed as part of the Full Stack Diploma course at Code Institute. 

It is inspired by the marble game featured in the popular TV series "Squid Game." 

This game involves players competing against an AI simulating the tense gameplay of the marble game from "Squid Game" in a strategic game of odds and evens using virtual marbles. <br> The game is live and can be found [HERE](https://salmod91.github.io/project-2-odd-even/)

![Responsive Screenshot](/assets/images/readme-images/responsive-screenshot.PNG)

## Content Table
- [Introduction](#introduction)
- [UX](#ux)
  - [Site Purpose](#site-purpose)
  - [Site Goal](#site-goal)
  - [Audience](#audience)
  - [Communication](#communication)
  - [Current User Goals](#current-user-goals)
  - [New User Goals](#new-user-goals)
- [Design](#design)
- [Color Scheme](#color-scheme)
- [Typography](#typography)
- [Imagery](#imagery)
- [Features](#features)
  - [Buttons](#buttons)
  - [Menu](#menu)
  - [Rules](#rules)
  - [Footer](#footer)
  - [Game Section](#game-section)
  - [Future Features](#future-features)
- [Testing](#testing)
  - [Testing Table](#testing-table)
  - [Validator Testing](#validator-testing)
  - [Lighthouse](#lighthouse)
  - [Unfixed Bugs](#unfixed-bugs)
- [Thought Process](#thought-process)
  - [Initial Thoughts](#initial-thoughts)
  - [First Approach](#first-approach)
  - [Images](#images)
  - [Semantics?](#semantics-what-are-they)
  - [Media Queries](#media-queries)
  - [Validator](#validator)
  - [General Design](#general-design)
  - [Wireframes](#wire-frames)
- [Technologies Used](#technologies-used)
  - [Main Languages Used](#main-languages-used)
  - [Frameworks, Libraries, Programs](#frameworks-libraries-and-programs-used)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)

## UX

### Site Purpose:

The purpose of this project is to create an engaging and interactive web application inspired by the marble game featured in the popular TV series "Squid Game." By recreating the Odd-Even Marbles Game, the project provides users with a virtual gaming experience that allows them to immerse themselves in the strategic gameplay depicted in the show.

This project also holds a special place in my journey as a software developer. It is born from a childhood dream of creating my own game, and the opportunity to develop this project brings me closer to realizing that dream.

### Site Goal:

**Gameplay Recreation:** The primary objective is to faithfully recreate the strategic and suspenseful gameplay of the marble game portrayed in the "Squid Game" TV series. Users should be able to engage in the same decision-making and anticipation seen in the show's marble scenes.

**Interactive Gaming Experience:** The project's goal is to provide users with an interactive and enjoyable gaming experience. Players should be able to immerse themselves in the game's mechanics, make strategic decisions regarding OE choices and wagers, and engage with different game elements.

**Nostalgia and Engagement:** By recreating and incorporating elements from a popular TV series, the project aims to resonate with users on a nostalgic level.

Through achieving these objectives, the Odd-Even Marbles Game project aspires to provide an engaging, interactive, and nostalgic gaming experience while demonstrating technical competency in software development.

### Audience:

**Fans of "Squid Game":** Users who were captivated by the suspenseful scenes involving the marble game in the TV series will find this project intriguing. The recreation of the game's mechanics and atmosphere offers fans a chance to immerse themselves in the show's world.

**Gaming Enthusiasts:** Users who appreciate decision-making and interactive content.

**Casual Gamers:** Individuals looking for a casual and entertaining online experience will find the Odd-Even Marbles Game accessible and enjoyable. The simple yet strategic gameplay provides a relaxing way to pass the time.

### Communication:

The "Odd or Even" project prioritizes effective communication through its design and interface:

- **Minimal Necessary Information:** This project avoids overwhelming users with excessive visual input. The user interface provides only the necessary details, ensuring a clean and focused design.

- **Clear Interactive Elements:** The use of clear and distinct buttons encourages user interactivity. Actions are facilitated through buttons that are easily identifiable and provide immediate visual feedback upon activation.

- **Structured Layout:** The overall tight layout is carefully structured to prevent user distractions. By guiding the user's focus and preventing unnecessary wandering, the design enhances user engagement and gameplay immersion.

- **Responsive Design:** The project's responsive design ensures a consistent experience across different devices and screen sizes. Whether users are playing on a desktop, tablet, or smartphone, the interface remains user-friendly and accessible.

### Current User Goals:
- **Entertainment and Engagement:** To keep the users entertained and engaged by capturing the excitement and suspense depicted in the "Squid Game" TV series. 

### New user goals:
- **Understanding the Gameplay:** New users aim to quickly grasp the rules and mechanics of the game. "Odd or Even" addresses this goal by prominently featuring a "Rules" button on the landing page, ensuring that new users can quickly familiarize themselves with the gameplay. Additionally, during gameplay, users will have access to the rules of their current role, allowing them to reference the rules as they make decisions.
- **Enjoying Visuals:** New users appreciate visually appealing elements that contribute to the game's atmosphere. They want to enjoy the images, buttons, and overall design that enhance the immersive experience.

- **Clear and Informative Presentation:** New users appreciate the thoughtful design of the gameplay, which provides both visual and text-based information to keep them informed about the unfolding events. The combination of visual cues and text descriptions ensures that users have a clear understanding of the decisions they're making and the outcomes that follow.

## Design:

### Colour Scheme:
**Odd and Even:** The project's colour scheme revolves around two main colours: pink and green. These colours have been thoughtfully chosen to represent the central themes of the game and draw inspiration from the series "Squid Game":
- Pink Colour (<span style="color:#f44786;">#f44786</span>): Symbolizing "Odd". This vibrant pink colour is used throughout the project to capture the essence of the guards in the series. Symbolizing danger, tension, and daring decisions, it aligns perfectly with the role of the guesser in the game. It is employed to highlight moments of uncertainty and unfavourable outcomes, such as when the player loses marbles or when the computer wins marbles.

- Green Colour (<span style="color:#249f9c;">#249f9c</span>): Symbolizing "Even". This serene green colour  is used throughout the project to capture the essence of the players in the series. Reflecting resilience and strategic thinking, it encapsulates the spirit of the players. This colour is utilized to represent even-related concepts and the hider role. Furthermore, it signifies positive outcomes, such as when the player wins marbles or the computer loses marbles. 

The contrast between pink and green enhances the visual storytelling of danger and safety, odd and even, inherent in the game.

- Sandy Colour (<span style="color:#eccca2;">#eccca2</span>): The use of this sandy hue is a deliberate choice to simulate the sandy atmosphere that is integral to scenes in the series. It adds an additional layer of immersion by evoking the settings of the marbles game scenes in "Squid Game" and enhances the visual continuity of the project.

![Colour Palette](/assets/images/readme-images/colour-palette.PNG)

### Typography:
- **Shape of Things:** This font has been selected for its resemblance to the font used in the series "Squid Game." While the official "Squid Game" font was considered, it was ultimately avoided due to readability concerns. "Shape of Things" strikes a balance between stylistic similarity and readability. It offers a similar aesthetic to the series' font while ensuring that text remains clear and easy to read, especially in longer passages. This font choice is primarily used for the title.

- **Azonix:** This font is an excellent fusion of the gaming style often seen in similar projects and the aesthetics of the "Squid Game" font. Azonix is predominantly used for buttons, giving them a dynamic and interactive appearance. The font's boldness and distinctiveness contribute to creating an engaging and intuitive interface for users to interact with the game's various elements.

- **Sans-Serif:** For all other textual elements, a sans-serif font has been carefully selected. This choice is motivated by the need for optimal readability, particularly in areas where clear communication is essential. For instance, in sections like rules and text information that explain the gameplay to users, a sans-serif font ensures that the content is easily digestible and comprehensible. By using a sans-serif font, the project prioritizes delivering information seamlessly and promoting user understanding.

- **Sans-Serif:** For all other textual elements, a sans-serif font has been selected. This choice is motivated by the need for optimal readability, particularly in areas where clear communication is essential as in sections like rules and text information that explain the gameplay to users. A sans-serif font ensures that the content is easily comprehensible. By using a sans-serif font, the project prioritizes user understanding.

The combination of "Shape of Things," "Azonix," and the sans-serif font contributes to a user-centred typography approach within the "Odd or Even" game. This combination upholds the thematic consistency and also ensures a balance between visual aesthetics and effective communication.

### Imagery:

The selection of images for this project involved the use of royalty-free images.

Some of them were modified by me through the use of Paint (this emphasizes my complete lack of talent in design :D).

The body background is designed to immerse players in the atmosphere of the show. It depicts the location in which the Marbles Game takes place which dynamically changes to a sandy background on screens with greater dimensions. 


## Features 

### Buttons:
Buttons play a crucial role in enhancing user interaction and engagement within the "Odd or Even" project:

- **Consistent Styling:** All buttons within the project share a consistent styling approach ensuring an intuitive user interface. This consistency promotes user familiarity.

- **Colour Split:** Notably, the colours used for the buttons in the menu have been divided to underscore the fundamental concept of "odd" and "even." This intentional colour differentiation provides users with visual cues that align with the core gameplay theme.

- **Hover Functionality:** Buttons within the project exhibit a subtle hover effect. When users hover their cursor over a button, the button's white appearance subtly changes to a greyish colour, offering a visual indication of interactivity. This effect enhances the user's understanding that they can interact with the buttons.

- **Point Cursor:** As the hover functionality is subtle, a point cursor has been implemented for all buttons. When users hover over a button, the cursor changes to a hand icon signifying that the element is clickable. This cue ulteriorly reinforces the user's expectation of interaction.

- **Box Shadow Feedback:** To amplify the sense of interaction and confirm user actions, buttons exhibit a box shadow that on interaction simulated the holding down of a button. This tactile visual feedback assures users that their interaction has been confirmed. This feature enhances the user's sense of control and provides a (hopefully) gratifying confirmation of their choices.

### Menu:

- **Rules Button:** The menu prominently features a "Rules" button that invites users to familiarize themselves with the gameplay instructions. Upon clicking the button, the rules section is rendered visible, providing users with a clear understanding of the game rules.

- **Game Title:** Positioned between the "Rules" button and the "Start Game" button, the game title serves as a visual centrepiece. Its placement captures users' attention while reinforcing the thematic choice of the colour scheme.

- **Start Game Button:** At the bottom of the menu, a "Start Game" button awaits user interaction. Upon clicking this button, the menu section transitions into the game section, the player's starting turn is randomly determined and initiates the gameplay experience.

- **Sandish Background:** A sandish background has been selected to capture the essence of the "Squid Game" show environment involved in the Marbles Game scenes. The sandy hues evoke the settings and scenarios depicted in the show, creating a cohesive visual connection between the game and its source of inspiration.

- **Consideration for Real Sand:** The initial concept involved utilizing actual sand as the background. However, this approach was ultimately reconsidered due to the potential information overload it might impose on users.

![Menu Preview](/assets/images/readme-images/menu-preview.PNG)

### Rules:

The rules section employs a deliberate design choice by featuring a white background. This design decision was chosen with the intention to provide users with a clear and focused space to engage with the game's rules as the rules on their own can be overwhelming.

![Rules Preview](/assets/images/readme-images/rules-preview.PNG)

### Footer:

As a side note: i am adding the Footer section early as when starting the game the footer will be rendered invisible and it is not present in the game section once the "Start Game" button is pressed. 

The footer displays a message emphasizing the education nature of this project.

A GitHub icon is featured within the footer section, linking to the developer's GitHub Profile.

The GitHub icon incorporates a playful element by changing colour upon hovering to the serene green colour symbolizing it being a safe space (or is it?!?). 

Once pressed it reveals its true colour, the Odd colour, the colour of danger! (cue Plot Twist music). You actually entered a dangerous area!!!

![Footer Preview](/assets/images/readme-images/footer-preview.PNG)

![It's a Trap!](/assets/images/readme-images/trap-preview.PNG)

### Game Section: 

![Game Section Preview](/assets/images/readme-images/game-section-preview.PNG)

- **Cartoon Style:** The game section features a cartoonish style designed to captivate the user's attention through easily digestible visuals. It injects a sense of playfulness which also contributes to the user-friendly interface by presenting information which are visually appealing and easily understandable.

- **See Through Background:** The background of the game section is slightly transparent to allow the view of the body background which depicts a scenario in the "Squid Game" show where the Marbles Game takes place.

- **Role Rules Button:** Positioned in the top left corner, the "Role Rules" button plays a pivotal role in guiding players through their respective roles. Upon clicking this button, users can access detailed rules specific to their current role, whether as a guesser or a hider. This feature ensures that players remain informed about their current role. This button changes dynamically based on the players current role.

![Guesser Rule Button](/assets/images/readme-images/guesser-preview.PNG)
![Hider Rule Button](/assets/images/readme-images/hider-preview.PNG)

- **Role Rules Section:** The role rules section serves as a resource for players offering a reminder of the rules specifically about the current role of the player. This section maintains a consistent design style with the game rules featured in the menu section ensuring user familiarity.  To ensure seamless gameplay progression, a script has been implemented that automatically closes the rules section if the game advances while the rules section is open, avoiding the user's visual cues to be impaired by it.

![Guesser Rules Section](/assets/images/readme-images/guesser-rules-preview.PNG)
![Hider Rules Section](/assets/images/readme-images/hider-rules-preview.PNG)

- **Quit Button:** The "Quit" button is  positioned in the top right corner, drawing inspiration from the familiar "close windows" button often found in Windows PC interfaces. This placement allows users to easily locate and interact with the button, resulting in a seamless transition that closes the game section and returns them to the menu.

![Quit Button](/assets/images/readme-images/quit-button-preview.PNG)

- **Bubble Speech Images:**  Bubble speech images add a dynamic visual element to the gameplay. These images provide users with a visual cue regarding the OE choice made by either the player or the computer. This enhances the user's understanding of the ongoing game decisions and contributes to a clearer understanding of the game flow. By featuring bubble speech images that correspond to the OE choices, this project offers interactive feedback that helps users track the game's progress. This feature aids in the player's understanding of the game flow and creates a more interactive and engaging gameplay atmosphere.

![Bubble Speech Image](/assets/images/readme-images/bubble-speech-preview.PNG)

- **Hand Images:** Together with the bubble speech images, hand images serve as a visual feedback mechanism, providing players with a representation of the ongoing gameplay. Through these images, users gain a cleared understanding of the current state of the game, enhancing their engagement and immersion.

![Hand Images Preview](/assets/images/readme-images/hand-image-preview.PNG)
![Hand Marble Image Preview](/assets/images/readme-images/hand-image-marble-preview.PNG)

- **Pouch:** Pouch images are used in scorekeeping allowing the player to monitor their game score. Despite the challenge in precisely centering numbers within the pouches, they still effectively serve as a visual indication of the player's score. The alignment discrepancy between single-digit and two-digit numbers is acknowledged and while there is room for improvement, the pouch images fulfils their purpose by providing players with a clear representation of their score.

![Pouch Preview](/assets/images/readme-images/pouch-preview.PNG)

- **Textual Information:** Positioned at the bottom of the game section, a dedicated text box serves as an essential hub of information, providing players with real-time updates on the game's progression. This dynamic box conveys details such as the player's current role, available choices, and the outcomes resulting from those choices. The colours change dynamically depending on the player's role and situation.

![Player Status Preview](/assets/images/readme-images/player-status-preview.PNG)
![Player Status Preview 2](/assets/images/readme-images/player-status-preview-2.PNG)
![Player Win Preview](/assets/images/readme-images/player-win-preview.PNG)
![Player Loss Preview](/assets/images/readme-images/player-loss-preview.PNG)


### Future Features:

- **Insertion of Player Name:** The ability to insert the user's name at the game start.

- **End of game image:** An image at the end of the game depending on the player's victory or defeat.

- **Multiplayer:** The possibility of playing against another live player.

## Testing 

### Testing Table:


**TEST** | **ACTION** | **EXPECTATION** | **RESULT** 
----------|----------|----------|----------
Menu Section | Size down from 1920px to 320px max-width using Dev Tools on Chrome, Firefox and Edge. On safari it was not possible to test it because of a lack of devices | Elements look good down to 320px | Works as expected
Menu Section | Rules section sizes down from 1920px to 320px max-width using Dev Tools on Chrome, Firefox and Edge. On safari it was not possible to test it because of a lack of devices | Elements look good down to 320px | Works as expected
Menu Section | All buttons in the menu section | Each button responds and executes its functions, hover and active rules apply | Works as expected
Menu Section | Footer sizes down from 1920px to 320px max-width using Dev Tools on Chrome, Firefox and Edge. On safari it was not possible to test it because of a lack of devices | Elements look good down to 320px | Works as expected
Menu Section | Footer GitHub Icon | Correctly opens the GitHub profile, correctly opens in a new tab, hover function rules are applied, colour change on click, colour reset after quitting the game section | Works as expected | Game Section | Size down from 1920px to 320px max-width using Dev Tools on Chrome, Firefox and Edge. On safari it was not possible to test it because of a lack of devices | Elements look good down to 320px | Works as expected
Game Section | Size down from 1920px to 320px max-width using Dev Tools on Chrome, Firefox and Edge. On safari it was not possible to test it because of a lack of devices | Elements look good down to 320px | Works as expected 
Game Section | Role rules section sizes down from 1920px to 320px max-width using Dev Tools on Chrome, Firefox and Edge. On safari it was not possible to test it because of a lack of devices. | Elements look good down to 320px | Works as expected
Game Section | All buttons in the game section | Each button responds and executes its functions, hover and active rules apply | Works as expected
Game Section | Role rules buttons | Displays the correct button depending on the player's turn, the displayed button hides when the turn ends | Works as expected
Game Section | Role rules section | The role rules section should close when the game progresses | Works as expected
Game Section | Quit button | Quit button clears all images, clears timeouts, renders the menu section visible | Works as expected
Game Section | Speech Bubbles | Speech Bubbles are displayed on the correct side, display the correct message, are cleared when not needed | Works as expected
Game Section | Hand Images | Hand images are displayed during the correct turns, the display the correct amount of marbles chosen by player and computer | Works as expected
Game Section | Score | Score correctly updates, changing the score through HTML Dev Tool doesn't affect the scripted score, game correctly closes when the player has 0 or 20 marbles, score does not go below 0 or above 20 | Works as expected
Game Section | Information Section | Correctly shows the player's turn, correctly depicts the OE choices, correctly depicts the wager/hider choices, correctly depicts the outcome | Works as expected
Game Section | Next Turn button | Becomes visible at the end of the turn, ends and switches player turn, hides after use | Works as expected
Game Section | Wager/Hider Buttons | Correctly gives the player a choice depending on the marbles the player has left, the player can never wager/hide more marbles than left | Works as expected
Game Section | Computer hide/wager | Computer never wagers/hides more marbles than it has left | Works as expected
Game Section | Computer logic | Computer always chooses odd in case the player has 1 marble left, computer never wagers more marbles than the player has left, computer never hides more marbles than it has left | Works as expected

### Validator Testing:

- HTML
  - No errors were returned when passing through the official [W3C validator]
  ![HTML Validator](/assets/images/readme-images/html-validator.PNG)

- CSS
  - No errors were found when passing through the official (Jigsaw) validator 
  ![CSS Validator](/assets/images/readme-images/css-validator.PNG)

- JS
  - No errors were found when passing through JSHint
  ![JS Validator](/assets/images/readme-images/js-validator.PNG)

### Lighthouse:
- The page has a good rating on desktop devices in Lighthouse.
![Lighthouse Desktop](/assets/images/readme-images/lighthouse-desktop.PNG)

- The page has a good rating on mobile devices in Lighthouse.
![Lighthouse Mobile](/assets/images/readme-images/lighthouse-mobile.PNG)

### Unfixed Bugs

- On Apple mobile devices, the role buttons and quit button texts are not centred. As i dont have any Apple devices it is not possible for me to find a solution on Safari.


## Thought Process

### Initial Thoughts
In this section, I will provide an informal account of my thought process during the initial stages of the project. While the following description may deviate slightly from formal conventions, it aims to convey honesty and authenticity in capturing my genuine experience.

Fresh out of the JavaScript course, I absolutely had no clue about what I just learned. I didn't feel confident at all, but I was excited about the idea of being able to create a game, which was a childhood dream back in the days when I was 13 that I shared with my best friend.

### First Approach
Having no clue on how to approach this project I focused first on creating a mental image of how the computer logic should be like. This came to me easily thanks to the experience I gathered playing games during my life. <br>

I had no idea about any programs like Lucid Chart, so I simply started drawing down my thought process on Paint. I ask for forgiveness in advance about my wireframes, since they look like drawn by a child. <br>

My initial idea was to create a main function with all functions responsible for the game flow in it, such as functions to show and hide buttons, functions responsible for the comparison of the OE choices and so on. <br>

The idea was to have a while loop going with the score as an argument saying that as long the player doesn't have 20 or 0 marbles to keep looping through the game functions... Needless to say that I broke my PC :D 

I realized that JS does not wait for the functions to be finished, it looped through all of them at the same time. I found myself googling about how to make it wait for other functions to finish executing and ended up in the rabbit hole called "Asynchronous functions". Not only that, but I wasted a full day trying to implement it through explanations on YouTube, but I just couldn't make it work, so I had to find a different solution. I was grumpy all day long, fearing that I hit a brick wall too hard to smash with my head alone (this is how we Aries people solve problems)<br>

Eventually I came up with a solution in which involved creating buttons that call functions on "click" in order to progress the game, this way JS is forced to wait the user's input before executing the next functions necessary for the game to progress. The game flow ended up as I initially planned, but the code had become WAY messier than I wanted. 

It was smooth sailing from there. I never did hit a speed bump again through this project except when having to deal with design ideas as i completely and utterly lack any talent related to design. <br>

One time I fixed a problem without knowing how, but if you try to prove that I didn't know what I was doing, then it is your word against mine :D

### Images
Since the beginning, I was planning on having images and some sort of animation to give the player a visual cue as well as a text cue of what was happening. I ended up spending a full day looking for the right images. <br> 

In the beginning, I used my beautiful Paint skills to at least try to have the script in place for the hand images. If you check the earlier commits you'll be delighted by my drawing skills, I am sure!

I ended up modifying all the images on my own, either through paint or free editing websites. 

The hands looked hideous being pink on a sandy background, it felt almost like they blended together. Thankfully, a friend of mine had the brilliant idea to use black outlines for the hands which did fit with the solid black borders of the buttons and the text box. You may think that such a solution should come natural but you underestimate my lack of skills in the design department. I can't for the love of me picture anything in my mind but I found out that my logical thinking is not bad. It took me only a few days to code the logic of the game and the computer behaviour but it took me longer than 2 weeks to design and style the whole thing :D

### Semantics? What are they??
My HTML document does not exactly follow a semantic structure. It lacks a header since I decided to have the h1 game title in the middle of the document, it lacks specific sections you'd find in other websites like the nav section. I could have added a navigation bar linking to the game and the rules in different pages, but I wanted to create and practice the DOM manipulation through JS. A footer has been added in the end for the only purpose to create a funny icon that switches colour on "click" :D

### Media Queries
The implementation of media queries was not as tough as the first time. Having had experience with the first project, I created the HTML and CSS structure in a way that would have been easier in the end to resize. The addition of images made this difficult, so I was forced to create 2 types of media queries, once for a width with lower height and once for higher heights for devices such as tablets. Following a research I couldn't find any devices that have a width of 320px which are taller than 600px so I didn't bother to create a rule for it. If you try to test my project with a screen width of 320px and a height taller than 600px it becomes a mess. This is easily remedied through copy-pasting the media queries of the max-width: 359px and adding a min-height: 641px (tested).

### Validator 
Thankfully and surprisingly the validator gave me no errors except a few warnings in JS which I resolved. 

### General Design
Every element has been meticulously chosen randomly. Inconsistency was the core element behind every decision.

Jokes aside, I am not entirely proud about my design choices. The "Squid Game" atmosphere was the plan but eventually I stopped giving it the proper care being content with the first elements I found. The sandy coloured background was supposed to be temporary but eventually i ended up using it. The rules section white background helps with readability but I left it white, the default colour, as I was tired of trying to design. I just wanted to hop onto the Python lessons asap and start the next project. 

### Inner Look
As with the first Project, I want to note again that the visual design elements led to frustration and procrastination. In contrast, the logic of JS excited me like nothing did until now. I found myself starting working on it at 8:00 and without realizing it, it was already 18:00. I enjoyed it so much that during these days I didn't even realize that I skipped lunch. I guess the saying "if you do what you like, you'll never work one day in your life" is true. I enjoyed developing the game and project script so much that I can comfortably see myself keep doing this in the future.


### Wireframes

Initially, having had experiences with games, I had a clear vision of what I wanted to accomplish and the logic behind the game flow. <br>
I used Paint to create a mock-up for myself, being oblivious to the fact that there are programs/websites like Lucid Chart. So now you get to enjoy my beautiful art!

The Piggy Bank has been scrapped as I didn't feel like keep working on the design. It was supposed to envelope the Rules button. <br> Tony Manzi already created a Piggy for me, and I felt guilty about wasting his time.
![WireFrame 1](/assets/images/readme-images/menu-wireframe.png)

At least it deserves to be shown in the README file. <b3>

Sidenote: Tony Manzi is so talented that he managed to do this in 10 minutes.
![Piggy Bank](/assets/images/readme-images/piggybank.png)
![WireFrame 2](/assets/images/readme-images/game-screen.png)

The first sketches about the game logic.

![Game Logic 1](/assets/images/readme-images/game-logic-1.png)
![Game Logic 2](/assets/images/readme-images/game-logic-2.png)

My first logic about how turns were supposed to be. 
Note: the while loop broke my PC, so I never used it ever again :D
![Turn Logic](/assets/images/readme-images/turn-logic.png)

I have no idea what I was thinking here.
![No Idea What I Was Thinking](/assets/images/readme-images/i-have-no-idea-what-it-was-for.png)

I had more sketches done with Paint afterwards that helped me create the JS file, but I forgot that I needed them for the README in the Wireframe section and I deleted them.

## Technologies Used

### Main Languages Used
- HTML5
- CSS3
- JS

### Frameworks, Libraries, and Programs Used
- Fonts have been downloaded from dafont.com
- Gitpod
- GitHub - To store my repository for submission
- Am I Responsive - used to take a screenshot showcasing the responsiveness of the website. (https://ui.dev/amiresponsive)
- Responsive Tool - used to test the responsiveness down to every pixel. (http://responsivetesttool.com/)
- Paint - Used to modify basically every image and to create the initial mock-up of the project.

## Deployment 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found [HERE](https://salmod91.github.io/project-2-odd-even/)

## Credits

### Content
The entirety of the project, including its conceptualization, codebase, and user interface, has been created by my personal endeavour.

### Media
- [Background](https://www.besthdwallpaper.com/squid-game/squid-game-marble-playground-dt_en-US-81205.html)
- [Sand Background](https://unsplash.com/photos/TlrVTwdg7LA)
- [Bubble Speech](https://www.pngegg.com/en/png-zatxe)
- [Hand Images](https://www.freepik.com/free-vector/human-hands-background-set-isolated-icons-with-various-finger-hand-gestures-white-skin-vector-illustration_26760975.htm#page=2&query=cartoon%20hands&position=1&from_view=search&track=ais)
- [Pouch](https://clipart-library.com/clipart/n735161.htm)
- [Marble](https://clipart-library.com/clipart/marbles-cliparts_9.htm)