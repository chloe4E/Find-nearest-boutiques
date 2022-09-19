# Boutique finder

<br>

## Description

Following the provided [brief](https://github.com/Trouva/product-technical-tests/blob/master/challenges/Engineer.front_end.lvl1.md), I chose to develop the application with React, to use Axios to manage my API calls and Boostrap for a clean and rapid styling.

It took me approximatively 4 hours to develop this project. <br>
I started with connecting to the two APIs as this was the base of the project. <br>
Once this was achieved, I thought about the structure of the App and implemented it. <br>Afterwards I worked on the function to compute the distance between the boutiques and the location of the user. I reached a working prototype which I refactored slightly.<br>
Finally I minimally styled the App with Boostrap. <br>
As this is a PoC, the App is not deployed and runs in development mode.
<br>

<br>

## How to run it ?

Change folder to web-app/nearest-boutiques
If running for the first time, install dependencies with:

`npm i`

then start the app (development mode) with:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## API's

[Link to Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)
<br>

[Link to Boutique API](https://4149o8lffa.execute-api.eu-west-1.amazonaws.com/challenge/boutiques)
<br>

## Packages

- react-boostrap
- react-strap
- axios
  <br>

## What would I do differently if I had more time

- I lost a lot of time with the BoutiqueCard component as I struggled to use my props correctly.
- I would try to use a store for the data to avoid props drilling for the location of the user.
- I would try to use Typescript.

## Links

### Contributors

Chloé Faurie - <chloe4E> - <https://www.linkedin.com/in/chlo%C3%A9-faurie/>
