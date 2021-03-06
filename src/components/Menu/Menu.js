import React from "react";
import {Route,Link} from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import '../../App.css';

const menus=[
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "Live Event",
        to: "/events",
        exact: true
    },
    {
        name: "Charities",
        to: "/charities",
        exact: true
    },
    {
        name: "About us",
        to: "/about",
        exact: true
    }
];

const MenuLink=({label,to,activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            axact={activeOnlyWhenExact}
            children={({match}) => {
                var active=match? "active":"";
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};
class Menu extends React.Component {
    onClick=(e) => {
        localStorage.removeItem('user')
    }
    render() {
        return (
            <nav className="navbar navbar-inverse mg-0">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a
                            className="navbar-brand"
                            href="/"
                        >
                            Give now
                                                            </a>
                    </div>
                    <ul className="nav navbar-nav">
                        {this.showMenus(
                            menus
                        )}
                    </ul>
                    <div className={(localStorage.getItem('user')!=null? 'hidden':'')}>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a
                                    href="#signup"
                                    data-toggle="modal"
                                >
                                    <span className="glyphicon glyphicon-user"></span>
                                    Signup
                                                                      </a>
                                <Signup />
                            </li>
                            <li className={(localStorage.getItem('user')!=null? ' d-none':'')}>
                                <a
                                    href="#login"
                                    data-toggle="modal"
                                >
                                    <span className="glyphicon glyphicon-log-in "></span>
                                    Login
                            </a>
                                <Login />
                            </li>
                        </ul>
                    </div>
                    <div className={(localStorage.getItem('user')==null? 'hidden':'')}>
                        <ul className="nav navbar-nav navbar-right">
                            <li className={(localStorage.getItem('user')!=null? ' d-none':'')}>
                                <a
                                    href="/"
                                    data-toggle="dropdown"
                                >
                                    <span className="glyphicon glyphicon-user "></span>{localStorage.getItem('user')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/me">Profile</a></li>
                                    <li><a href="/checkout">Cart</a></li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    onClick={this.onClick}
                                >
                                    <span className="glyphicon glyphicon-log-out "></span>Logout
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
    showMenus=(menus) => {
        var result=null;
        if(menus.length>0) {
            result=menus.map((menu,index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={
                            menu.axact
                        }
                    />
                );
            });
        }
        return result;
    };
}

export default Menu;
