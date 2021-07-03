import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoneIcon from "@material-ui/icons/Done";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";
import Back from "./common/Back";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import url from './const/url';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const backgroundShape = require("../images/shape.svg");

const logo = require("../images/lekeIcon.png");

const numeral = require("numeral");
numeral.defaultFormat("0");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary["A100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 10,
    padding: 20,
    paddingBottom: 500
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  smallContainer: {
    width: "60%"
  },
  bigContainer: {
    width: "80%"
  },
  logo: {
    marginBottom: 24,
    display: "flex",
    justifyContent: "center"
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stepGrid: {
    width: "80%"
  },
  buttonBar: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center"
  },
  button: {
    backgroundColor: theme.palette.primary["A100"]
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  stepper: {
    backgroundColor: "transparent"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42
  },
  formControl: {
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

const getSteps = () => {
  return ["User", "Signin", "Permission"];
};

class Signup extends Component {
  state = {
    activeStep: 0,
    receivingAccount: "",
    termsChecked: false,
    loading: true,
    labelWidth: 0,
    open:false

  };
  

  handleLogin = (event) => {
    event.preventDefault()
    const data = {"username":this.state.username,"password":this.state.password}
    
    axios.post(url.loginUrl,data)
      .then(res => {
        if(res.data[0].msg=="success"){
          window.location.href="#/home"
        }else{
          this.setState({open:true})
        }
      })
    
  };
  handleClose = () =>{
    this.setState({open:false})
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

 
  handleuChange= event => {
        this.setState({username: event.target.value});
  }
  handlepChange= event => {
    this.setState({password: event.target.value});
}


  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, loading,username , password,open } = this.state;
   

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <div className={classes.logo}>
                  <img width={100} height={100} src={logo} alt="" />
                </div>
                <div className={classes.stepContainer}>
                  
                  {activeStep === 0 && (
                    <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <div>
                         
                          <div>
                            <Typography
                              style={{
                                textTransform: "uppercase",
                                marginBottom: 20
                              }}
                              color="secondary"
                              gutterBottom
                            >
                              Login
                            </Typography>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <TextField
                                id="email"
                                label="Email"
                                type="text"
                                autoComplete="email"
                                variant="filled"
                                value={this.state.username}
                                onChange={this.handleuChange}
                              />
                              <br></br>
                                  <TextField
                                  id="password"
                                  label="Password"
                                  type="password"
                                  autoComplete="current-password"
                                  variant="filled"
                                  value={this.state.password}
                                onChange={this.handlepChange}
                                />
                                <br></br>
                                <div>
                                <Button
                              variant="contained"
                              color="primary"
                              onClick={this.handleLogin}
                              className={classes.button}
                              endIcon={<Icon>send</Icon>}
                            >
                              Login
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                                <Button variant="contained" color="secondary">
                                  Sign In
                                </Button>
                                </div>
                            </FormControl>
                          </div>
                        </div>
                      </Paper>
                    </div>
                  )}
                  <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="error">
                      Username or Password is incorrect!
                    </Alert>
                  </Snackbar>
                  
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Signup));
