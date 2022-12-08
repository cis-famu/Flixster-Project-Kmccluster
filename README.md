# CA06 - Flixster Part 2

**Overview**: This project builds off last week's project to view information from The Movie Database API. **Copy your files from last week into this project.** The user can click on any list element in order to see more details about the movie selected.

**Submission Instructions**:
Once you've completed the required user stories for your project, take the following steps to get your project ready to submit.

1. Push Code to Github Repository
	- If this week's assignment is starting a new project, you will have to create a new Github repo. However, if the week's assignment is a continuation of the last week's project, you will NOT create a new project. Copy the project files into the new repository folder and make an initial commit.

2. Create a README Template
	- Every submission must be accompanied by a README.md using the readme template provided with the assignment to demonstrate which required and optional tasks you've completed.
	- In your project repository, add a README.md file in the root directory that contains the contents of the README template for that assignment.
	- If the assignment is a continuation of the same project from a previous week, add the new template to the end of the previous README instead of creating a new file.
	- Make sure to check off the user stories you've completed.

3. GIF Walkthrough
	- Your README.md must contain a GIF walkthrough using a recording program of your choice. It should demonstrating how it works with the user stories completed.
	- We recommend [Kap](https://getkap.co/) for macOS, [ScreenToGif](https://www.screentogif.com/) for Windows, and [peek](https://github.com/phw/peek) for Linux.
	- [Imgur](https://imgur.com/upload) is a great service for hosting the GIF walkthrough and then linking to it from the README.
	- When using Imgur, you can right-click on the gif and choose "Copy Image Address" to get the correct address. Make sure the address has a `.gif` extension. If you end up with a url that has a `.gifv` extension, removing the `v` and changing this to `.gif` will ensure the gif renders on GitHub.
	
	![Kapture 2022-12-07 at 20 04 37](https://user-images.githubusercontent.com/77177362/206330947-b737978a-2b21-4ffe-ab39-0b8e8001b98c.gif)


4. Make sure you've pushed all your latest code up to GitHub
	- To check this, you can browse your repository on GitHub on your favorite browser to make sure some of your latest changes are present there.

#### MockUp
You may choose any design libary of your liking. Here are some suggestions:
 - [Bootstrap](https://getbootstrap.com/) `npm i bootstrap --save`
 - [Material UI](https://material-ui.com) `npm i @material-ui/core --save`
 - [Materialize](https://materializecss.com/) `npm install materialize-css@next --save`

The mockup below uses the 3rd on the list.

[Flixster Part 2](https://imgur.com/UtTSErC)

### Required Stories

- Expose details of the movie (vote average, overview, poster, and video) on a separate page. ***(8 points)***
	- You need to use the [StarRating library](https://www.npmjs.com/package/stars-rating)
	- You will need to make an additional API call to get the video
- Show the movie trailer above the detailed description and allow the autoplay option. ***(2 points)***

### Strech Stories

- Change the star color based on the rating. ***(2 points)**
	- Ratings below 6.0 should be red
	- Ratings between 6.1 - 8.0 should be yellow
	- Ratings above 8.0 shoule be green
- Display the list of generes for the movie in tags. ***(3 points)***
- Show a list of similar movies (posters) ***(3 points)***
