import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { validateAll } from 'indicative/validator';
import { DropzoneArea } from 'material-ui-dropzone'
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
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
        marginTop: theme.spacing(3),
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
    const gender = [
        {
            value: 'male',
            label: 'Male'
        }, {
            value: 'female',
            label: 'Female'
        }
    ]
    const classes = useStyles();
    return (
        <div className={classes.paper}>

            <form className={classes.form} onSubmit={props.submitted}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            autoComplete="first_name"
                            name="first_name"
                            variant="outlined"
                            fullWidth
                            id="first_name"
                            label="First Name(Required)"
                            autoFocus
                            onChange={props.changed}
                            helperText={props.errors.first_name ? props.errors.first_name : ""}
                            error={props.errors.first_name ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            autoComplete="last_name"
                            name="last_name"
                            variant="outlined"
                            fullWidth
                            id="last_name"
                            label="Last Name(Required)"
                            onChange={props.changed}
                            helperText={props.errors.last_name ? props.errors.last_name : ""}
                            error={props.errors.last_name ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="username"
                            label="User Name(Required)"
                            name="username"
                            type="text"
                            onChange={props.changed}
                            helperText={props.errors.username ? props.errors.username : ""}
                            error={props.errors.username ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Email Address(Required)"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={props.changed}
                            error={props.errors.email ? true : false}
                            helperText={props.errors.email ? props.errors.email : ""}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="password"
                            label="Password(Required)"
                            name="password"
                            type="password"
                            onChange={props.changed}
                            error={props.errors.password ? true : false}
                            helperText={props.errors.password ? props.errors.password : ""}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="password_confirmation"
                            label="Confirm Password(Required)"
                            name="password_confirmation"
                            type="password"
                            onChange={props.changed}
                            error={props.errors.password_confirmation ? true : false}
                            helperText={props.errors.password_confirmation ? props.errors.password_confirmation : ""}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="cell_no"
                            label="Phone No."
                            name="cell_no"
                            type="text"
                            onChange={props.changed}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="outlined-select-currency-native"
                            select
                            label="Select Gender"
                            name="gender"
                            onChange={props.changed}
                            SelectProps={{
                                native: true
                            }}
                            variant="outlined">
                            {gender.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            type="text"
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={12}>
                        <DropzoneArea
                            dropzoneText='Add Profile Picture'
                            acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                            onChange={props.fileChanged}
                            filesLimit={1}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography style={{ paddingTop: "20px" }} className="" variant="h5" gutterBottom>
                            Store Details
                            </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="store_name"
                            label="Store Name(Required)"
                            name="store_name"
                            type="text"
                            error={props.errors.store_name ? true : false}
                            helperText={props.errors.store_name ? props.errors.store_name : ""}
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="store_url"
                            label="Store Url"
                            name="store_url"
                            type="text"
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="country"
                            label="Country"
                            name="country"
                            type="text"
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="state"
                            label="State"
                            name="state"
                            type="text"
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="city"
                            label="City"
                            name="city"
                            type="text"
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="zip"
                            label="Zip"
                            name="zip"
                            type="text"
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="longitude"
                            label="longitude"
                            name="longitude"
                            type="text"
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="latitude"
                            label="Latitude"
                            name="latitude"
                            type="text"
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="street_address"
                            label="Street Address"
                            name="street_address"
                            type="text"
                            onChange={props.changed} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={< Checkbox color="primary" id="i_agree" name="i_agree" required />}
                            label="I agree to the Terms and Conditions." />
                        {/* <input type="file" onChange={props.;} /> */}
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
class VendorSignup extends Component {
    state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        cell_no: "",
        address: "",
        gender: "",
        store_name: "",
        store_url: "",
        country: "",
        state: "",
        city: "",
        zip: "",
        longitude: "",
        latitude: "",
        street_address: "",
        errors: {},
        isButtonDisabled: false,
        picture: []
    }
    handleFileChange = (picture) => {
        this.setState({
            picture: picture
        });
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        console.log(data);
        const rules = {
            first_name: 'required|string',
            last_name: 'required|string',
            username: 'required|string',
            email: 'required|email',
            password: 'required|string|min:8|confirmed',
            password_confirmation: 'required|string',
            store_name: 'required|string'
        };

        const messages = {
            required: 'The field is required',
            email: 'Please Enter valid email address',
            min: 'The value must be greater than eight characters.',
            confirmed: 'Confirm password does not match'
        }

        validateAll(data, rules, messages)
            .then(() => {
                this.setState({
                    isButtonDisabled: true
                });
                let config = {
                    headers: {
                        APP_KEY: '$2y$10$bmMnWMBdvUmNWDSu9DwhH0sT.Yx4syv81fz3WDPRBO3pMSj8CthVRQGa',
                        'Content-Type': 'multipart/form-data; charset=utf-8; boundary="another cool boundary";'
                    }
                }
                let formData = new FormData();
                formData.append('email', this.state.email);
                formData.append('password', this.state.password);
                formData.append('password_confirmation', this.state.password_confirmation);
                formData.append('first_name', this.state.first_name);
                formData.append('last_name', this.state.last_name);
                formData.append('username', this.state.username);
                formData.append('cell_no', this.state.cell_no);
                formData.append('address', this.state.address);
                formData.append('gender', this.state.gender);
                formData.append('store_name', this.state.store_name);
                formData.append('store_url', this.state.store_url);
                formData.append('country', this.state.country);
                formData.append('city', this.state.city);
                formData.append('zip', this.state.zip);
                formData.append('longitude', this.state.longitude);
                formData.append('latitude', this.state.latitude);
                formData.append('street_address', this.state.street_address);
                formData.append('picture', this.state.picture[0]);
                formData.append('role', "vendor");
                axios.post('http://127.0.0.1:8000/api/user', formData, config)
                    .then(response => {
                        localStorage.setItem('isAuth', true);
                        this.props.history.push('/dashboard');
                        //this.props.history.push('/Dashboard');
                    })
                    .catch(e => {
                        alert(e.response.data);
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
            <SignUpContainer
                fileChanged={this.handleFileChange}
                changed={this.handleInputChange}
                submitted={this.handleSubmit}
                errors={this.state.errors}
                btnDisabled={this.state.isButtonDisabled}
            />
        );
    }
}
export default VendorSignup;