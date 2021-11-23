ModelRailroadScenes

Code Louisville FEWD Capstone Project Fall 2021

Developer: Chris Broughton Email: cbroughton67@gmail.com

This website was developed as the capstone project for the Code Louisville / Bellermine University FEWD course Fall 2021. The intent is to demonstrate skills learned during the course, and to fulfill a set of requirements set forth by the instructors.

Project requirements included in this project:

- More than 5 Github commits (12 as of this writing)
- Readme file (which you are reading at this very moment)
- Main.css contains the following:
    - Multiple selectors, including at least one (or more) for Element, ID, Class, and Descendent selectors
    - Two media queries - one for screens larger than 660px and one for screens smaller than 660px
    - No inline CSS was used in this project - everything is in a separate CSS file (main.css)

Media Queries - screen, navigation, and footer layout change appropriately based on the screen size determined by the media queries. 

Comments - general comments have been included within the project to explain what's happening at various points

CSS Features    - Navigation menu expands for screens larger than 660px
                - Navigation menu contracts / stacks for screens smaller than 660px
                - Flexbox is used to change screen layout based on screen size. Screens larger than 660px
                  will appear in a two-column layout, and screens smaller than 660px will appear in a single-
                  column layout. 
                - A modal window displaying a video "easter egg" is included (click the "pornhub" footer icon)
                  Clicking the window will make it close. Note: The video can only autoplay when muted on Chrome
                  and Safari, hence, no sound. :-(
Javascript Features
                - Clicking the "pornhub" footer icon calls a JS function to display a model window where a video will
                  autoplay.
                - The footer copyright year defaults to 2020 for situations where JS is disabled. Otherwise, a JS
                  funcion call updates the copyright year to the current year. 

