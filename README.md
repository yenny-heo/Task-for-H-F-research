# Task for Hackers/Founders

## How to start

```
$ npm install
$ npm start
```

## Architecture

### App.js

**: Including Top navigation bar & Main page**

### App.css

- Variable

> --nav-color: Navigation bar color

### NavBar.js

**: Top navigation bar**

- class App

> - state: Menu Lists
>
> ```javascript
> state = {
>     menu: [
>       {
>         name: "Menu", link: "/",
>         subMenu: [
>           {
>             name: "SubMenu", link: "/",
>             subMenu: [
>               { name: "SubSubMenu", link: "/" },
>               ...
>             ]
>           },
>           ...
>           ]
>        },
>        ...
>      ]
>    }
> ```
>
> Put menu and link at "menu" array
>
> Put sub menu and link at "subMenu" item in "menu" array
>
> Put sub sub menu and link at "subMenu" item in "subMenu" array
>
> 
>
> Return menu.

- class Menu

> If Sub menu is exist, Return sub menu.
>
> If not, Only return menu.

- class SubMenu

> If sub sub menu is exist, Return sub sub menu.
>
> If not, Only return sub menu.

### Main.js

**: Main page**

- Class Main

> - State: News Lists (4 news)
>
> ```javascript
> state = {
>         news: [
>             {
>                 img: "News Image Link",
>                 title: "News Title",
>                 link: "/"
>             },
>             {
>                 img: "News Image Link",
>                 title: "News Title",
>                 link: "/"
>             },
>             {
>                 img: "News Image Link",
>                 title: "News Title",
>                 link: "/"
>             },
>             {
>                 img: "News Image Link",
>                 title: "News Title",
>                 link: "/"
>             }
>         ]
>     }
> ```
>
> Put News title, link and Image link at "news" array.
>
>  
>
> Return Main Image and News.

- Class News

> Return 4 News.

### index.html

- Html code that works on website