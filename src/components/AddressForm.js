import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import { Paper } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import Topbar from "./Topbar";
import Button from '@material-ui/core/Button';
import url from './const/url';
import axios from 'axios';

const styles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
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
      margin: theme.spacing(3, 0, 2),
    },
  });

class AddressForm extends Component {
    state = {
        firstname:"",
        lastname:"",
        addressline1:"",
        addressline2:"",
        city : "",
        st:"",
        zipcode:"",
        country:"",
        email : ""
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      submit=event =>{
        event.preventDefault()
        var email=localStorage.getItem("email")
    const data = { "firstName": this.state.firstname, "lastName": this.state.lastname, 
    "email": email, "st": this.state.st, "zipcode": this.state.zipcode, "country": this.state.country,
        "addressline1":this.state.addressline1,"addressline2":this.state.addressline2,"city":this.state.city}
        axios.post(url.shipUrl,data)
      .then(res => {
        
        if(res.data[0].msg=="success"){
          window.location.href="#/shipping"
        }else{
          this.setState({open:true})
        }
      })
      };
render(){
    const { classes } = this.props;
    const { firstName, lastName,email , addressline1,addressline2,city,zipcode,country,st } = this.state;
  return (
    <React.Fragment>
        <CssBaseline />
        <Topbar />
        <Paper>
            
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstname"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="addressline1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            value={this.state.addressline1}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="addressline2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            value={this.state.addressline2}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="st" label="State/Province/Region" fullWidth value={this.state.st} onChange={this.handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zipcode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            value={this.state.country}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Grid item xs={12}>
        <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {this.submit}
           
          >
            Proceed For Payment
          </Button>
        </Grid>
      </Grid>
      </Paper>
    </React.Fragment>
  );
}
}

export default withRouter(withStyles(styles)(AddressForm));
