import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';

const BarContainer = styled.div`
  && .MuiAppBar-colorPrimary {
    background-color: #3b5166 !important;
  }
`
const Ul = styled.ul`
  flex: 3;
  text-align: right;
`
const Li = styled.li`
  display: inline-block;
  padding: 8px;
  && a {
    color: #fff;
    font-weight: bold;
  }
`
const MyTitle = styled.div`
  && a {
    color: #fff;
    font-weight: bold;
  }
`
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <BarContainer>
          <AppBar>
            <Toolbar>
              <Typography variant="h6">
                <MyTitle>
                  <Link to={"/"}>
                    Phone Book
                  </Link>
                </MyTitle>
              </Typography>
              <Ul>
                <Li>
                  <Link to="/">
                    Contacts List
                  </Link>
                </Li>
                <Li className="">
                  <Link to="/add">
                    Add Contact
                  </Link>
                </Li>
              </Ul>
            </Toolbar>
          </AppBar>

        </BarContainer>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
