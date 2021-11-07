import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import { Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
      color: "black",
  },
  title: {
    fontSize: "1.38rem",
    color: "#5f6368",
    marginLeft: "5px",
    cursor: "pointer",
  },
  appBar: {
    backgroundColor: "white",
    color: "black",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
  },
  header__wrapper__right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: "15px",
    color: "#5f6368",
    cursor: "pointer",
  },
}));

const Header = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.headerWrapper}>
                        <Typography variant="h6" className={classes.title}>
                            Classroom
                        </Typography>
                    </div>
                    <div>
                        <Button>Sign In</Button>
                        <Button>Register</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;