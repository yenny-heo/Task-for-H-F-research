# Task 2

## How to start

```
$ npm start
```

## Code Description

### App.js

- class App

> - state: Menu Lists
>
> ```
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
> return menu

- class Menu

> If Sub menu is exist, return sub menu.
>
> If not, return menu.

- class SubMenu

> If sub sub menu is exist, return sub sub menu.
>
> If not, return sub menu.

### App.css

- Variable

> --nav-color: Navigation bar color



### index.html

- Html code that works on website