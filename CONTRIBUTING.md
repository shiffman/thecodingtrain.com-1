---
title: 'Hacktoberfest Contribution Guide'
description: 'Guide to contributing to the Coding Train website'
date: '10/03/2022'
---

# We are thrilled to announce that The Coding Train is participating in Hacktoberfest 2022!!

##  What is Hacktoberfest?

 >HACKTOBERFEST IS DIGITALOCEAN’S ANNUAL EVENT THAT ENCOURAGES PEOPLE TO CONTRIBUTE TO OPEN SOURCE THROUGHOUT OCTOBER. MUCH OF MODERN TECH INFRASTRUCTURE—INCLUDING SOME OF DIGITALOCEAN’S OWN PRODUCTS—RELIES ON OPEN-SOURCE PROJECTS BUILT AND MAINTAINED BY PASSIONATE PEOPLE WHO OFTEN DON’T HAVE THE STAFF OR BUDGETS TO DO MUCH MORE THAN KEEP THE PROJECT ALIVE. HACKTOBERFEST IS ALL ABOUT GIVING BACK TO THOSE PROJECTS, SHARPENING SKILLS, AND CELEBRATING ALL THINGS OPEN SOURCE, ESPECIALLY THE PEOPLE THAT MAKE OPEN SOURCE SO SPECIAL.

## How do you participate?

 - If you have 2 showcases accepted between October 1st and October 31st, you will be entered into a drawing to receive a Coding Train sticker pack.
 - Additionally, anyone who has four pull requests accepted on an issue with the Hacktoberfest label will be entered into drawing to receive a a laser etched Coding Train train whistle.

 - If you want to be eligible for Digital Ocean prizes, register at the official [Hacktoberfest website](https://hacktoberfest.com)
 
## Getting Started

### Interested in submitting a showcase?

- You can find more information about submitting a showcase in the [Passenger Showcase Guide](/guides/passenger-showcase-guide/).  

### Interested in porting a Coding Train challenge?

- Head to the [Google claiming spreadsheet](https://docs.google.com/spreadsheets/d/1zt8KquMZN_j2-j4ezMsgeq-sRrgoCEAROwFS6LTS8oQ/edit#gid=1236591781) and claim a challenge.
-  Read the [Maintaining the website guide](/guides/maintain-weibsite-guide/) for instructions on how to port a challenge.  
- Note:  If you are unable to complete the port, we would appreciate it if you dwould remove your name from the Google spreadsheet.

### Interested in updating the Related Challenges field?

- The `"relatedChallenges"` key specifies an array of challenges that relate to the new video. If it is an empty array and there are any coding challenges in the `"video"` section of the json file, those challenge(s) can be added to the field.
- Head to the [Google claiming spreadsheet](https://docs.google.com/spreadsheets/d/1zt8KquMZN_j2-j4ezMsgeq-sRrgoCEAROwFS6LTS8oQ/edit#gid=1236591781) and find a challenge that needs updated.
- You can find the json file for the challenge in the /content/videos/challenges folder.
- Checkout a new branch (applesoft-RC) and edit the Related Challenges field.  

```json
{
  "title": "AppleSoft Basic Fractal Tree",
  "description": "Take a trip back in time and let's learn all about GR (graphics) and HGR (high resolution graphics) in AppleSoft BASIC on a restored Apple II+ computer! Can we render a fractal tree?",
  "videoNumber": "174",
  "videoId": "UNkHditYGls",
  "nebulaSlug": "codingtrain-coding-challenge-174-fractal-tree-on-apple-ii",
  "date": "2022-09-12",
  "languages": ["BASIC"],
  "topics": ["fractal", "1980s", "AppleII", "bouncing ball"],
  "canContribute": true,
  "relatedChallenges": [ <-- update this field
    "77-recursion",
    "14-fractal-trees-recursive",
    "173-snake-applesoft-basic"
  ]
}
```
##  Have a question?  

- You can contact us at help@codingtrain.com
- You can also ask questions at https://discord.com/invite/hPuGy2g

## Please note that SPAM pull requests are not welcome and will be marked as spammy.