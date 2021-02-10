# Edingo RPC
* Easy for use program, the interface is written in electron.
* Ability to save / load settings.
* Ability to add buttons to your profile!

# Usage:
## Windows
1. Download the latest version `edingo` from [releases](https://github.com/Sigma-cc/edingo-rpc/releases) (app-win32-x64.rar)
2. Unpack the `app-win32-x64.rar` then run `edingo.exe`.
    - Go to your [applications](https://discordapp.com/developers/applications/me).
    - Make a new application `The name of the app will be the main name for the rich presence`.
    - Copy `application id`, for  `Application ID` field in program.

## Linux / Windows
1. Install all required components
    - Download / Clone this repository.
    - [Install node.js if you don't have it.](https://nodejs.org/en/download/)
    - In the folder where you cloned the files, open the console, then write `npm install` for install all required modules.

2. Create Rich Presence application with discord
    - Go to your [applications](https://discordapp.com/developers/applications/me).
    - Make a new application `The name of the app will be the main name for the rich presence`.
    - Copy `application id`, for  `Application ID` field in program.

3. After installing the modules and creating, run the program by write `npm start` to console.

# Fields:
```
State (string) - the 'state' section of the rich game data.
Details (string) - the 'details' section of the rich game data.
```
Time is indicated in unix -> [Time calculator](https://www.unixtimestamp.com/index.php)
```
Start Time (Int64) - the time at which the game started.
End Time (Int64) - the time at which the game will end.
```
You can add assets to your application using this link, then specify the asset in the program.
`https://discord.com/developers/applications/`**Your Application ID**`/rich-presence/assets`
```
Large Image Asset (string) - the large image.
Small Image Asset (string) - the small image.
```
```
Large Image Text (string) - the large image tooltip.
Small Image Text (string) - the small image tooltip.
```
```
Button Label (string) - label of the button.
Button Link (string) - link of the button.
```

# Preview:
## Menu Preview:
![](./img/menu.png)

## Customization Preview:
![](./img/preview.gif)
