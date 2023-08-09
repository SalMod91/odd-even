## Introduction

The "Odd or Even" is the second project developed as part of the Full Stack Diploma course at Codeinstitute. 

It is inspired by the marble game featured in the popular TV series "Squid Game." 

This game involves players competing against an AI simulating the tense gameplay of the marble game from "Squid Game" in a strategic game of odds and evens using virtual marbles.

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
- [Thought Of Process](#thought-of-process)
  - [Initial Thoughts](#initial-thoughts)
  - [First Writing](#first-writing)
  - [Images](#images)
  - [Mentor Support](#mentor-support)
  - [Footer](#footer)
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

This project also holds a special place in my journey as a Software Developer. It is born from a childhood dream of creating my own game, and the opportunity to develop this project brings me closer to realizing that dream.

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

- **Minimal Necessary Information:** This project avoids overwhelming users with excessive visual input. The user interface provides only the necessary details ensuring a clean and focused design.

- **Clear Interactive Elements:** The use of clear and distinct buttons encourages user interactivity. Actions are facilitated through buttons that are easily identifiable and provide immediate visual feedback upon activation.

- **Structured Layout:** The overall tight layout is carefully structured to prevent user distractions. By guiding the user's focus and preventing unnecessary wandering, the design enhances user engagement and gameplay immersion.

- **Responsive Design:** The project's responsive design ensures a consistent experience across different devices and screen sizes. Whether users are playing on a desktop, tablet, or smartphone, the interface remains user-friendly and accessible.

### Current User Goals:
- **Entertainment and Engagement:** To keep the users entertained and engaged capturing the excitement and suspense depicted in the "Squid Game" TV series. 

### New user Goals:
- **Understanding the Gameplay:** New users aim to quickly grasp the rules and mechanics of the game. "Odd or Even" adresses this goal by prominently featuring a "Rules" button on the landing page ensuring that new users can quickly familiarize themselves with the gameplay. Additionally, during gameplay, users will have access to the rules of their current role allowing them to reference the rules as they make decisions.
- **Enjoying Visuals:** New users appreciate visually appealing elements that contribute to the game's atmosphere. They want to enjoy the images, buttons, and overall design that enhance the immersive experience.

- **Clear and Informative Presentation:** New users appreciate the thoughtful design of the gameplay, which provides both visual and text-based information to keep them informed about the unfolding events. The combination of visual cues and text descriptions ensures that users have a clear understanding of the decisions they're making and the outcomes that follow.


## Design:

### Colour Scheme:
**Odd and Even:** The project's color scheme revolves around two main colors: pink and green. These colors have been thoughtfully chosen to represent the central themes of the game and draw inspiration from the series "Squid Game":
- Pink Color (<span style="color:#f44786;">#f44786</span>): Symbolizing "Odd". This vibrant pink color is used throughout the project to capture the essence of the guards in the series. Symbolizing danger, tension, and daring decisions, it aligns perfectly with the role of the guesser in the game. It is employed to highlight moments of uncertainty and unfavorable outcomes, such as when the player loses marbles or when the computer wins marbles.

- Green Color (<span style="color:#249f9c;">#249f9c</span>): Symbolizing "Even". This serene green color  is used throughout the project to capture the essence of the players in the series. Reflecting resilience and strategic thinking, it encapsulates the spirit of the players. This color is utilized to represent even-related concepts and the hider role. Furthermore, it signifies positive outcomes, such as when the player wins marbles or the computer loses marbles. 

The contrast between pink and green enhances the visual storytelling of danger and safety, odd and even, inherent in the game.

- Sandy Color (<span style="color:#eccca2;">#eccca2</span>): The use of this sandy hue is a deliberate choice to simulate the sandy atmosphere that is integral to scenes in the series. It adds an additional layer of immersion by evoking the settings of the marbles game scenes in "Squid Game" and enhances the visual continuity of the project.

![Colour Palette](/assets/images/readme-images/colour-palette.PNG)

### Typography:
- **Shape of Things:** This font has been selected for its resemblance to the font used in the series "Squid Game." While the official "Squid Game" font was considered, it was ultimately avoided due to readability concerns. "Shape of Things" strikes a balance between stylistic similarity and readability. It offers a similar aesthetic to the series' font while ensuring that text remains clear and easy to read, especially in longer passages. This font choice is primarily used for the title.

- **Azonix:** This font is an excellent fusion of the gaming style often seen in similar projects and the aesthetics of the "Squid Game" font. Azonix is predominantly used for buttons, giving them a dynamic and interactive appearance. The font's boldness and distinctiveness contribute to creating an engaging and intuitive interface for users to interact with the game's various elements.

- **Sans-Serif:** For all other textual elements, a sans-serif font has been carefully selected. This choice is motivated by the need for optimal readability, particularly in areas where clear communication is essential. For instance, in sections like rules and text information that explain the gameplay to users, a sans-serif font ensures that the content is easily digestible and comprehensible. By using a sans-serif font, the project prioritizes delivering information seamlessly and promoting user understanding.

- **Sans-Serif:** For all other textual elements, a sans-serif font has been selected. This choice is motivated by the need for optimal readability, particularly in areas where clear communication is essential as in sections like rules and text information that explain the gameplay to users. A sans-serif font ensures that the content is easily comprehensible. By using a sans-serif font, the project prioritizes user understanding.

The combination of "Shape of Things," "Azonix," and the sans-serif font contributes to a user-centered typography approach within the "Odd or Even" game. This combination upholds the thematic consistency and also ensures a balance between visual aesthetics and effective communication.

### Imagery:

The selection of images for this project involved the use of royalty-free images.

Some of them were modified by me through the use of Paint (this emphasizes my complete lack of talent in design :D).

The body background is designed to immerse players in the atmosphere of the show. It depicts the location in wich the Marbles Game takes place wich dynamically changes to a sandy background on screens with greated dimensions. 


## Features 

### Buttons:
Buttons play a crucial role in enhancing user interaction and engagement within the "Odd or Even" project:

- **Consistent Styling:** All buttons within the project share a consistent styling approach ensuring an intuitive user interface. This consistency promotes user familiarity.

- **Color Split:** Notably, the colors used for the buttons in the menu have been divided to underscore the fundamental concept of "odd" and "even." This intentional color differentiation provides users with visual cues that align with the core gameplay theme.

- **Hover Functionality:** Buttons within the project exhibit a subtle hover effect. When users hover their cursor over a button, the button's white appearance subtly changes to a greyish colour, offering a visual indication of interactivity. This effect enhances the user's understanding that they can interact with the buttons.

- **Point Cursor:** As the hover functionality is subtle, a point cursor has been implemented for all buttons. When users hover over a button, the cursor changes to a hand icon signifying that the element is clickable. This cue ulteriorly reinforces the user's expectation of interaction.

- **Box Shadow Feedback:** To amplify the sense of interaction and confirm user actions, buttons exhibit a box shadow that on interaction simulated the holding down of a button. This tactile visual feedback assures users that their interaction has been confirmed. This feature enhances the user's sense of control and provides a (hopefully) gratifying confirmation of their choices.

### Menu:

- **Rules Button:** The menu prominently features a "Rules" button that invites users to familiarize themselves with the gameplay instructions. Upon clicking the button, the rules section is rendered visible, providing users with a clear understanding of the game rules.

- **Game Title:** Positioned between the "Rules" button and the "Start Game" button, the game title serves as a visual centerpiece. Its placement captures users' attention while reinforcing the thematic choice of the colour scheme.

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

A GitHub icon is featured withing the footer section, linking to the developer's Github Profile.

The GitHub icon incorporates a playful element by changing colour upon hovering to the serene green colour symbolizing it being a safe space (or is it?!?). 

Once pressed it reveals its true color, the Odd colour, the colour of danger! (cue Plot Twist music). You actually entered a dangerous area!!!

![Footer Preview](/assets/images/readme-images/footer-preview.PNG)

![It's a Trap!](/assets/images/readme-images/trap-preview.PNG)

### Game Section: 

![Game Section Preview](/assets/images/readme-images/game-section-preview.PNG)

- **Cartoon Style:** The game section features a cartoonish style designed to captivate the user's attention through easily digestable visuals. It injects a sense of playfulness wich also contributes to the user-friendly interface by presenting information wich are visually appealing and easily understandable.

- **See Through Background:** The background of the game section is slightly transparent to allow the view of the body background wich depicts a scenario in the "Squid Game" show where the Marbles Game takes place.

- **Role Rules Button:** Positioned in the top left corner, the "Role Rules" button plays a pivotal role in guiding players through their respective roles. Upon clicking this button, users can access detailed rules specific to their current role, whether as a guesser or a hider. This feature ensures that players remain informed about their current role. This button changes dynamically based on the players current role.

![Guesser Rule Button](/assets/images/readme-images/guesser-preview.PNG)
![Hider Rule Button](/assets/images/readme-images/hider-preview.PNG)

- **Role Rules Section:** The role rules section serves as resource for player offering a reminder of the rules specifically about the current role of the player. This section maintains a consistent design style with the game rules featured in the menu section ensuring user familiarity.  To ensure seamless gameplay progression, a script has been implemented that automatically closes the rules section if the game advances while the rules section is open, avoiding the user's visual cues to be impaired by it.

![Guesser Rules Section](/assets/images/readme-images/guesser-rules-preview.PNG)
![Hider Rules Section](/assets/images/readme-images/hider-rules-preview.PNG)

- **Quit Button:** The "Quit" button is  positioned in the top right corner, drawing inspiration from the familiar "close windows" button often found in Windows PC interfaces. This placement allows users to easily locate and interact with the button, resulting in a seamless transition that closes the game section and returns them to the menu.

![Quit Button](/assets/images/readme-images/quit-button-preview.PNG)

- **Bubble Speech Images:**  Bubble speech images add a dynamic visual element to the gameplay. These images provide users with a visual cue regarding the OE choice made by either the player or the computer. This enhances the user's understanding of the ongoing game decisions and contributes to a clearer understanding of the game flow. By featuring bubble speech images that correspond to the OE choices, this project offers interactive feedback that helps users track the game's progress. This feature aids in the player's understanding of the game flow and creates a more interactive and engaging gameplay atmosphere.

![Bubble Speech Image](/assets/images/readme-images/bubble-speech-preview.PNG)

- **Hand Images:** Together with the bubble speech images, hand images serve as a visual feedback mechanism, providing players with a representation of the ongoing gameplay. Through these images, users gain a cleared understanding of the current state of the game, enhancing their engagement and immersion.

![Hand Images Preview](/assets/images/readme-images/hand-image-preview.PNG)
![Hand Marble Image Preview](/assets/images/readme-images/hand-image-marble-preview.PNG)

- **Pouch:** Pouch images are used in scorekeeping allowing the player to monitor their game score. Despite the challenge in precisely centering numbers withing the pouches, they still effectively serve as a visual indication of the player's score. The alignment discrepancy between single-digit and two-digit numbers is aknowledged and while there is room for improvement, the pouch images fulfill their purpose by providing players with a clear representation of their score.

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
