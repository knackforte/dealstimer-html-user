import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { validateAll } from 'indicative/validator';
import { LOGIN_API_URL } from './common/Constants';

import axios from 'axios';
import { isLogin } from './utils';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignInContainer = (props) => {
    const classes = useStyles();
    return <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
        </Typography>
            <form className={classes.form} onSubmit={props.submitted}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={props.changed}
                    helperText={props.errors.email ? props.errors.email : ""}
                    error={props.errors.email ? true : false}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={props.changed}
                    helperText={props.errors.password ? props.errors.password : ""}
                    error={props.errors.password ? true : false}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={props.btnDisabled}
                >
                    Sign In
        </Button>
                <Grid container>
                    <Grid item xs>
                        <Link to="Forgotpassword" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="Signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>;
}

class Signin extends Component {
    constructor (props) {
        super(props);
        if (isLogin() === "false") {
            this.props.history.push('/');
        } else {
            this.props.history.push('/dashboard');
        }
    }
    state = {
        email: "",
        password: "",
        errors: {},
        isButtonDisabled: false,
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const rules = {
            email: 'required|email',
            password: 'required|string|min:8',
        };

        const messages = {
            required: 'Make sure to enter the value',
            email: 'Please Enter valid email address',
            min: 'The value must be greater than eight characters.',
        }

        validateAll(data, rules, messages)
            .then(() => {

                this.setState({
                    isButtonDisabled: true
                });
                let config = {
                    headers: {
                        APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
                    }
                }
                axios.post(LOGIN_API_URL, {
                    email: this.state.email,
                    password: this.state.password,
                }, config)
                    .then(response => {
                        localStorage.setItem('isAuth', true);
                        this.props.history.push('dashboard');
                    })
                    .catch(e => {
                        alert("Invalid email or password");

                        this.setState({
                            isButtonDisabled: false
                        });
                    })
            })
            .catch((errors) => {
                const formattedErrors = {}
                errors.forEach(error => formattedErrors[error.field] = error.message)
                this.setState({ errors: formattedErrors })
            })
    }

    render() {
        return (
            <SignInContainer
                changed={this.handleInputChange}
                submitted={this.handleSubmit}
                errors={this.state.errors}
                btnDisabled={this.state.isButtonDisabled}
            />
        );
    }
}

export default Signin;