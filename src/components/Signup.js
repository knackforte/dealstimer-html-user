import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Storefront from '@material-ui/icons/Storefront';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { validateAll } from 'indicative/validator';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import VendorSignup from './VendorSignup';
import UserSignup from './UserSignup';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(1, 0, 2)
    },
    topBar: {
        background: 'red'
    }
}));

function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

const SignUpContainer = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example">
                <Tab icon={< Storefront />} label="Vendor SignUp" />
                <Tab icon={< PersonPinIcon />} label="User signup" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <VendorSignup />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UserSignup />
            </TabPanel>
        </Paper>
    </Container>;
}
class Signup extends Component {
    render() {
        return (
            <SignUpContainer />
        );
    }
}
export default Signup;