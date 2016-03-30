# stripped
stripped is a very stripped (heh) down boilerplate that i use for the majority of my project starts. it includes pretty much nothing but the (in my opinion) bare essentials for the majority of the projects i work on. if you've ever wanted a really basic, easy to setup front end boilerplate that isn't full of crap, this could be the best day of your life.

stripped includes the following, however feel free to remove / add as necessary for your project.

**solid sass environment**

a strong sass based front end environment which utilises a clean and tidy partial / module based setup and a bunch of clever variables and mixins, most noteworthy being david walsh' life changing (they literally changed my life) media query mixins https://davidwalsh.name/write-media-queries-sass mixins. to input a media query, simply use `@mobile {}`, `@tablet {}`, `@desktop {}` or... you get the idea... how exciting.

**basic grunt setup**

if you haven't used grunt yet, you should probably consider re-evaluating your life. stripped includes the bare essentials to get grunt watching and compiling your code, feel free to expand on this or sack it off and use codekit (i'm not gonna judge). If you are yet to check grunt out, more information can be found here - http://gruntjs.com/

**bootstraps grid system**

most people hate bootstrap right? well i like it's grid system okay. don't judge me, feel free to sack this off and use bourbon neat, susy, or any of the other cool hipster grid systems everyone's using nowadays. stripped implements bootstraps sass based grid system, so check that file out for some seriously tasty sass based wizardry that i wish i could write

if you are unfamiliar with bootsraps grid system, more information and a very easy to follow guide can be found here - http://getbootstrap.com/css/#grid it's good, honestly! i've tied the media query variables from _config.scss to this grid system, so it's unlikely you'll ever have to touch it :)

**a bunch of other cool shit**

there's a few other bit's i've included, some of these you may want to remove depending on your project:

- fontawesome included through a cdn
- jquery included through a cdn
- html5shiv and respond.js through a cdn

that's it...enjoy!
