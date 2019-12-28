import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    menu: [
      {
        name: "Yeeun Heo", link: "/"
      },
      {
        name: "Pizza", link: "/",
        subMenu: [
          { name: "Bulgogi", link: "/",
          subMenu: [
            { name: "Review", link: "/" },
            { name: "Price", link: "/" },
          ]
        },
          {
            name: "Combo", link: "/",
            subMenu: [
              { name: "Review", link: "/" },
              { name: "Price", link: "/" },
            ]
          },
          { name: "Pepperoni", link: "/" },
          { name: "Cheese", link: "/" }
        ]
      },
      {
        name: "Cat is cute", link: "/",
        subMenu: [
          { name: "Cheeze tabby", link: "/" },
          { name: "Mackerel Tabby", link: "/" },
          { name: "Tuxedo", link: "/" },
          { name: "Spot", link: "/" },
          { name: "Chaos", link: "/" },
          { name: "Black", link: "/" },
          { name: "Tricolor", link: "/" }
        ]
      },
      {
        name: "Korea", link: "/",
        subMenu: [
          {
            name: "Seoul", link: "/",
            subMenu: [
              { name: "HongDae", link: "/" },
              { name: "GangNam", link: "/" },
              { name: "YeoUiDo", link: "/" },
            ]
          },
          { name: "Incheon", link: "/" },
          { name: "Daejeon", link: "/" },
          { name: "Daegu", link: "/" },
          { name: "Busan", link: "/" }
        ]
      },
      {
        name: "Colors", link: "/",
        subMenu: [
          { name: "Red", link: "/" },
          { name: "Blue", link: "/" },
          { name: "Green", link: "/" },
          { name: "Yellow", link: "/" },
          { name: "Magenta", link: "/" }
        ]
      },
      {
        name: "Hobby", link: "/",
        subMenu: [
          { name: "Music", link: "/" },
          { name: "Game", link: "/" },
          { name: "Movie", link: "/" },
          { name: "Book", link: "/" }
        ]
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="NavBar">
          <div className="container">
            <div className="logo">
              <a href="/">
                <img className="logoImg" src="./logo.png" alt="logo"></img>
              </a>
            </div>
            <div className="menu">
              <ul className="menuContainer">
                {this.state.menu.map((menu, i) => {
                  return (<Menu menu={menu} key={i}></Menu>);
                })}
              </ul>
            </div>
          </div>

        </header>
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    const { menu } = this.props;
    return (
      <div className="menuContainer2">
        {menu.subMenu ?
          //if subMenu exist
          <li className="parentMenu menuHasChild">
            <a className="menuBtn" href={menu.link}>{menu.name}</a>
            <div className="subMenu_inner">
              <ul className="subMenuContainer">
                {menu.subMenu.map((sub, j) => {
                  return (<SubMenu sub={sub} key={j}></SubMenu>)
                })}
              </ul>
            </div>
          </li> :
          //if subMenu do not exist
          <li className="parentMenu">
            <a className="menuBtn" href={menu.link}>{menu.name}</a>
          </li>
        }
      </div>
    );
  }
}


class SubMenu extends React.Component {
  render() {
    const { sub } = this.props;
    return (
      <div className="subMenuContainer2">
        {sub.subMenu ?
          //if sub sub menu exist
          <li className="subMenu subHasChild">
            <a className="subBtn" href={sub.link}>{sub.name}</a>
            <div className="subSubMenu_inner">
              <ul className="subSubMenuContainer">
                {sub.subMenu.map((ssub, i) => {
                  return <SubSubMenu name={ssub.name} link={ssub.link} key={i}></SubSubMenu>
                })}
              </ul>
            </div>
          </li> :
          //if sub sub menu do not exist
          <li className="subMenu">
            <a className="subBtn" href={sub.link}>
              {sub.name}
            </a>
          </li>
        }
      </div>
    );
  }
}

class SubSubMenu extends React.Component {
  render() {
    return (
      <li className="subSubMenu">
        <a className="subSubBtn" href={this.props.link}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

export default App;
