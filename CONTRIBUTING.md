---
title: 'Hacktoberfest Contribution Guide'
description: 'Guide to contributing to the Coding Train website'
date: '10/03/2022'
---

# All Aboard The Coding Train for Hacktoberfest 2022

## What is Hacktoberfest?

> Hacktoberfest is DigitalOcean’s annual event that encourages people to contribute to open source throughout October. Much of modern tech infrastructure—including some of DigitalOcean’s own products—relies on open-source projects built and maintained by passionate people who often don’t have the staff or budgets to do much more than keep the project alive. Hacktoberfest is all about giving back to those projects, sharpening skills, and celebrating all things open source, especially the people that make open source so special.

## Getting Started

### Submit a Showcase Project!

- You can find more information about submitting a showcase in the [Passenger Showcase Guide](/guides/passenger-showcase-guide/).  

### Create a page for a Coding Challenge video! (https://github.com/CodingTrain/thecodingtrain.com/issues/155)

- Head to the [spreadsheet tracking challenges](https://docs.google.com/spreadsheets/d/1zt8KquMZN_j2-j4ezMsgeq-sRrgoCEAROwFS6LTS8oQ/edit#gid=1236591781) and sign up.
- For instructions, read the [Maintaining the website guide](/guides/maintain-weibsite-guide/) on how to create a challenge page on the new website.  
- Note: If you are unable to complete the page, please add a note and remove your name from the spreadsheet.

### Add Related Challenges! (https://github.com/CodingTrain/thecodingtrain.com/issues/262)

- The `"relatedChallenges"` property specifies a list of challenges to be featured as suggested on the video page. If it is an empty array and there are any coding challenges in the `"video"` section of the json file, those challenge(s) can be added to the field.
- You can find the JSON files for challenges in `/content/videos/challenges`.

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

### More!

* You can find more things to [work on listed in issues](https://github.com/CodingTrain/thecodingtrain.com/issues).

##  Questions?
- You can contact us at help@codingtrain.com
- You can also ask questions at https://discord.com/invite/hPuGy2g
