import React from 'react';
import logo from './../../logo.png';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

export default function Header({ backButton }) {
    const history = useHistory();

    return (
        <div className={`header ${backButton ? 'bottom-border' : ''}`}>
            {
                backButton ? (
                    <IconButton onClick={() => history.replace(backButton)}>
                        <ArrowBackIosIcon
                            fontSize="large"
                            className="header__icon header__backButton"
                        />
                    </IconButton>
                ) : (
                        <Link to="/profile">
                            <IconButton>
                                <PersonIcon className="header__icon" fontSize="large" />
                            </IconButton>
                        </Link>
                    )
            }

            <Link to="/">
                <img
                    className="header__logo"
                    src={logo}
                    alt="header__img"
                />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}
