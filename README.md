
[![Author](https://img.shields.io/badge/author-9r3i-lightgrey.svg)](https://github.com/9r3i)
[![License](https://img.shields.io/github/license/9r3i/force-sample.svg)](https://github.com/9r3i/force-sample/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/9r3i/force-sample.svg)](https://github.com/9r3i/force-sample/network)
[![Stars](https://img.shields.io/github/stars/9r3i/force-sample.svg)](https://github.com/9r3i/force-sample/stargazers)
[![Issues](https://img.shields.io/github/issues/9r3i/force-sample.svg)](https://github.com/9r3i/force-sample/issues)
[![Release](https://img.shields.io/github/release/9r3i/force-sample.svg)](https://github.com/9r3i/force-sample/releases)
[![Donate](https://img.shields.io/badge/donate-paypal-orange.svg)](https://paypal.me/9r3i)


# force-sample
Sample of Force website app

# Result
See the result in [https://9r3i.github.io/force-sample/hariankapi.html](https://9r3i.github.io/force-sample/hariankapi.html)


# First thing first

Create an html file like ```index.html```, and put some primary tags on it, like: 
```html
<!DOCTYPE html>
<html lang="en-US" dir="ltr"><head>
</head><body>
</body></html>
```

Also add some meta http-equiv and viewport inside head tags like:
```html
  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
 ```

Next, you may put some title if you want to, or anything else such as meta keywords and description, etcetera.

```html
  <title>Harian Kapi</title>
  <meta name="keywords" content="Chocolate, Coffee, Tea" />
  <meta name="description" content="Harian Kapi for Coffee and Tea" />
  <meta name="robots" content="follow,index" />
  <meta name="author" content="9r3i" />
  <meta name="author-uri" content="https://github.com/9r3i" />
  <meta name="generator" content="\9r3i\Force\Website" />
  <meta name="generator-uri" content="https://github.com/9r3i/force-website" />
  <meta name="generator-version" content="2.1.0" />
```

And also icons.
```html
  <meta property="og:image" content="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-152.png" />
  <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-57.png" />
  <link rel="apple-touch-icon" type="image/png" sizes="60x60" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-60.png" />
  <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-72.png" />
  <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-76.png" />
  <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-114.png" />
  <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-120.png" />
  <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-144.png" />
  <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-152.png" />
  <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-180.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-96.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-192.png" />
  <link rel="shortcut icon" type="image/png" sizes="16x16" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-16.png" />
  <link rel="shortcut icon" type="image/png" sizes="32x32" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-32.png" />
  <link rel="shortcut icon" type="image/png" sizes="96x96" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-96.png" />
  <link rel="shortcut icon" type="image/png" sizes="192x192" href="https://9r3i.github.io/foxtrot-theme/foxtrot/icons/icon-192.png" />
```

And if you care about SEO, you might put anything else like this.
```html
<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Choco Berry",
      "image": "https://lh3.googleusercontent.com/p/AF1QipMilsuoURAN9nWFKnx98wVMW-8797ZK9fdhJU9f=s1890-w1026-h1890-rw",
      "description": "Chocolate with berry topping.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.1",
        "reviewCount": "151",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
</script>
```

This is gonna be enough but this is all up to you.


# Configuration (in one file)

It could be json object, a string of a config filename. Default filename will detect ```website.config.json```.

But here we are gonna put everything in one file, so that's gonna be an html tag, and tag name is ```script``` with type ```application/json```, put inside head tag, like:
```html
<script type="application/json"></script>
```

Don't forget to add some ID to get the element easier next time.
```html
<script type="application/json" id="website-config"></script>
```

What is in config object?

First, we need force.js file, put in force section.
```json
{
  "force": {
    "file": "https://9r3i.github.io/force/force.min.js",
    "cache": {
      "age": 2592e5,
      "description": "3 days in mili second = 3*24*60*60*1000",
      "default": 864e5
    }
  }
}
```
Using minimized version to load faster, and also put some cache parameter in ```force.cache.age``` for 3 days in mili second.

To store the force.js cache, we need a ```script``` tag, and ofcourse with an ID.
```html
<script type="text/javascript" id="force-script"></script>
```
With ID, it's gonna be easier to get the element, and put script on it.


# Data Config

Now we are gonna add some data configuration: host, base (for database name) and also driver (for database driver).
```json
{
  "data": {
    "host": "https://9r3i.web.id/api/force/",
    "base": "hariankapi",
    "driver": "ForceData"
  }
}
```

Merge with force section is gonna be like this,
```json
{
  "force": {
    "file": "https://9r3i.github.io/force/force.min.js",
    "cache": {
      "age": 2592e5,
      "description": "3 days in mili second = 3*24*60*60*1000",
      "default": 864e5
    }
  },
  "data": {
    "host": "https://9r3i.web.id/api/force/",
    "base": "hariankapi",
    "driver": "ForceData"
  }
}
```

And that's the config we need for data.


# Site Information

Next is about site info, like: ```site.name```, description, keywords, etc. Like this sample:
```json
{
  "site": {
    "name": "Harian Kapi",
    "description": "Harian Kapi for Coffee and Tea",
    "keywords": "Chocolate, Coffee, Tea",
    "robots": "follow, index",
    "date": {
      "year": "2022",
      "full": "2022-11-13 05:35:44"
    }
  }
}
```
Then merge with config before.


# Kitchen

This is the admin page, to manage the content or data control. I call it Kitchen. The config must be like this.
```json
{
  "kitchen": {
    "namespace": "kitchen",
    "host": "https://9r3i.github.io/force-kitchen",
    "key": "kitchen"
  }
}
```
If there is another kitchen system, you might be wanna try, go ahead. This kitchen is just default one.


# Theme

Now, time for set the theme. I had one for sample named "crispy". Put this in theme section.
```json
{
  "theme": {
    "namespace": "crispy",
    "host": "https://9r3i.github.io/fw-theme-crispy"
  }
}
```

And now you gotta merge this one as well.


# Plugins

Plugins are the necessary helper for any of website content management system. These are for ForceWebsite helper, especially for the theme and kitchen as well.

In this case, we need plugins:
  - ```social``` for sharing content
  - ```link``` for detecting url link in content
  - ```editor``` for rich text editor in Kitchen
  - ```crispies``` to help ```crispy``` theme to manage the custom content in front and back in Kitchen.
  
  
```json
{
  "plugins": [
    ["link",false,"https://9r3i.github.io/force-website-plugins"],
    ["social",[
        "sharer",
        "like",
        "qrcode"
      ],
      "https://9r3i.github.io/force-website-plugins"
    ],
    ["editor",false,
      "https://9r3i.github.io/force-kitchen-editor"
    ],
    ["crispies",false,
      "https://9r3i.github.io/fw-theme-crispy"
    ]
  ]
}
```

Merge the config, and we've done for configuration.


# Execute the Script

After we've done with configuration, now it's time to execute in script.

It's gonna need a ```script``` tag,
```html
<script type="text/javascript">
/* some script in next paragraph */
</script>
```

If you want to, you may put some error debugging on it, like this.
```js
window.addEventListener('error',function(e){
  var errorText = [
    e.message,
    'URL: ' + e.filename,
    'Line: ' + e.lineno + ', Column: ' + e.colno,
    'Stack: ' + (e.error && e.error.stack || '(no stack trace)')
  ].join('\n');
});
```
Put it in ```script``` tag,

Then next one is the final touch.
```js
(async function(n,h,c,f){
  var ftag=document.getElementById(f), // get config file element
  fname='force/virtual/force.js', // file name of virtual force.js
  fscript=localStorage.getItem(fname), // get force.js cache if it's already stored
  cnf=JSON.parse(document.getElementById(c).textContent); // parse config string into json object
  if(!fscript){ // if cache not stored yet
    fscript=await fetch(cnf.force.file).then(r=>r.text()); // load the force.js file
    localStorage.setItem(fname,fscript); // store the script for cache in virtual file
  }
  ftag.textContent=fscript; // put script in script element, it's gonna be executed immedietly
  const app=(new Force).app(n,h,cnf); // prepare the app
  await app.init(); // initialize the app
  console.log("A Force app has been loaded, namespace: "
    +app.namespace);
})(
  'website', // force app namespace; named: website
  'https://9r3i.github.io/force-website', // app host
  'website-config', // tag id of website config
  'force-script' // tag id of force script
);
```

Merge the script with another one before if you had one.


# Whole Content

The whole content of ```hariankapi.html``` is in [hariankapi.html](https://github.com/9r3i/force-sample/blob/master/hariankapi.html)


# Closing

That's all there is to it. Alhamdulillaah...


--Abu Ayyub


