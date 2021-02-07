# Edingo RPC
* Easy for use program, the interface is written in electron.
* Ability to save / load settings.
* Ability to add buttons to your profile!

# Usage:
1. Install all required components
    - Download / Clone this repository.
    - [Install node.js if you don't have it.](https://nodejs.org/en/download/)
    - In the folder where you cloned the files, open the console, then write `npm install` for install all required modules.

2. Create Rich Presence application with discord
    - Go to your [applications](https://discordapp.com/developers/applications/me).
    - Make a new application `The name of the app will be the main name for the rich presence`.

# Running:
After installing the modules and creating, run the program by write `npm start` to console.

# Preview:
![](./etc/preview.gif)

# Fields:
<p>State `(string)` - the 'state' section of the rich game data.</p>
<p>Details `(string)` - the 'details' section of the rich game data.</p>

Time is indicated in unix -> [Time calculator](https://www.unixtimestamp.com/index.php)
<p>Start Time `(Int64)` - the time at which the game started.</p>
<p>End Time `(Int64)` - the time at which the game will end.</p>

<p>You can add assets to your application using this link.</p>
`https://discord.com/developers/applications/`**Your Application ID**`/rich-presence/assets`
<p>Large Image Asset `(string)` - the large image.</p>
<p>Small Image Asset `(string)` - the small image.</p>

<p>Large Image Text `(string)` - the large image tooltip.</p>
<p>Small Image Text `(string)` - the small image tooltip.</p>

<p>Button Label `(string)` - label of the button.</p>
<p>Button Link `(string)` - link of the button.</p>
