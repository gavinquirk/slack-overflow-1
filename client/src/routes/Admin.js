// ---------- This file holds the jsx for the admin page ----------
//  -----------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BackspaceIcon from '@material-ui/icons/Backspace';
import FaceIcon from '@material-ui/icons/Face';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import InboxIcon from '@material-ui/icons/Inbox';
import EjectIcon from '@material-ui/icons/Eject';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ReorderIcon from '@material-ui/icons/Reorder';

// import DraftsIcon from '@material-ui/icons/Drafts';
// import Nav from '../components/Nav/Nav'


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

function Admin(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>Admin Page</Typography>
                </Toolbar>
            </AppBar>
            {/* <Nav position="absolute"/> */}
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />


                <List component="a">
                    <ListItem button>
                        <ListItemIcon><FaceIcon /></ListItemIcon>
                        <ListItemText primary="Admin Help" />
                    </ListItem>
                </List>
                <Divider />
                <List component="a">
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Messages" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><ReportProblemIcon /></ListItemIcon>
                        <ListItemText primary="Flagged Posts" />
                    </ListItem>
                </List>
                <Divider />
                <List component="a">
                    <ListItem button>
                        <ListItemIcon><BackspaceIcon /></ListItemIcon>
                        <ListItemText primary="Remove Post" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon><PermIdentityIcon /></ListItemIcon>
                        <ListItemText primary="Add New User" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon><EjectIcon /></ListItemIcon>
                        <ListItemText primary="Remove User" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon><ReorderIcon /></ListItemIcon>
                        <ListItemText primary="Add Category" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Remove Category" />
                    </ListItem>

                </List>

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography noWrap>{'Here is where selected actions will be displayed'}</Typography>
            </main>
        </div>
    );
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin);