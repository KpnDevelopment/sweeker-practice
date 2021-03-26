import React, { Component } from 'react';
//import styles
import './Login';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
//import mui

// import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


// custom style


const mystyle = {
    // marginTop: "200px",
    justifyContent: 'center !important',
    textAlign: 'center !important',
    alignItems: 'center !important'
};
const nameStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: "30px",
    margin: "10rem 20rem"
}
const textField = {
    marginBottom: "20px",
}

// mui style


function Login() {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="login" style={mystyle} >


            <div className="name" style={nameStyle}>
                <TextField style={textField}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    id="standard-basic" type="text" label="Name" variant="outlined" />

                <OutlinedInput style={textField}
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />

                <Button style={{ marginBottom: "20px" }}
                    variant="contained"
                    color="primary"
                    startIcon={<KeyboardArrowRightIcon />}>
                    Login
                </Button>
                <a style={{ color: "#58a1f5" }} href="#">create a new account</a>
            </div>


        </div >
    );
}
export default Login;
