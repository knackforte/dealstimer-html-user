import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { validateAll } from 'indicative/validator';
import axios from 'axios';

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
        margin: theme.spacing(1, 0, 2),
        width: '200px',
        height: '56px',
    },
    submitButtonGrid: {
        textAlign: "center",
    }
}));

const SignUpContainer = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <form className={classes.form} onSubmit={props.submitted}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            autoComplete="fname"
                            name="first_name"
                            variant="outlined"
                            fullWidth
                            id="fullName"
                            label="First Name(Required)"
                            autoFocus
                            onChange={props.changed}
                            helperText={props.errors.first_name
                                ? props.errors.first_name
                                : ""}
                            error={props.errors.first_name
                                ? true
                                : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            autoComplete="fname"
                            name="last_name"
                            variant="outlined"
                            fullWidth
                            id="fullName"
                            label="Last Name(Required)"
                            onChange={props.changed}
                            helperText={props.errors.last_name
                                ? props.errors.last_name
                                : ""}
                            error={props.errors.last_name
                                ? true
                                : false} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={props.changed}
                            helperText={props.errors.email
                                ? props.errors.email
                                : ""}
                            error={props.errors.email
                                ? true
                                : false} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={props.changed}
                            helperText={props.errors.password
                                ? props.errors.password
                                : ""}
                            error={props.errors.password
                                ? true
                                : false} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="password_confirmation"
                            label="Repeat Password"
                            type="password"
                            id="password_confirmation"
                            autoComplete="false"
                            onChange={props.changed}
                            helperText={props.errors.password_confirmation
                                ? props.errors.password_confirmation
                                : ""}
                            error={props.errors.password_confirmation
                                ? true
                                : false} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={< Checkbox color="primary" id="i_agree" name="i_agree" required />}
                            label="I agree to the Terms and Conditions." />
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.submitButtonGrid}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={props.btnDisabled}>
                        Sign Up
                    </Button>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link to="/" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>

    );
}
class UserSignup extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        errors: {},
        isButtonDisabled: false
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const rules = {
            first_name: 'required|string',
            last_name: 'required|string',
            email: 'required|email',
            password: 'required|string|min:8|confirmed',
            password_confirmation: 'required|string|min:8'
        };

        const messages = {
            required: 'Make sure to enter the value',
            email: 'Please Enter valid email address',
            min: 'The value must be greater than eight characters.'
        }

        validateAll(data, rules, messages).then(() => {
            this.setState({ isButtonDisabled: true });
            let config = {
                headers: {
                    APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa'
                }
            }
            console.log(this.state);
            axios.post('http://clientdemo.knackforte.com/apidealstimer/public/api/user', {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
                role: "user"
            }, config).then(response => {
                localStorage.setItem('isAuth', true);
                window.location.href = "/Dashboard";
                //this.props.history.push('/Dashboard');
            }).catch(e => {
                alert("Error while Signing up!");
                this.setState({ isButtonDisabled: false });
            })
        }).catch((errors) => {
            const formattedErrors = {}
            errors.forEach(error => formattedErrors[error.field] = error.message)
            this.setState({ errors: formattedErrors })
        })
    }
    render() {
        return (<SignUpContainer
            changed={this.handleInputChange}
            submitted={this.handleSubmit}
            errors={this.state.errors}
            btnDisabled={this.state.isButtonDisabled} />);
    }
}
export default UserSignup;