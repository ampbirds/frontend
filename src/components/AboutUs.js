import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InstructionDialog from "./dialogs/InstructionDialog";
import SwipeDialog from "./dialogs/SwipeDialog";

import Topbar from "./Topbar";

const backgroundShape = require("../images/shape.svg");
const bike1 = require("../images/bike1.jpg");
const bike2 = require("../images/bike2.jpg");
const bike3 = require("../images/bike3.jpg");
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200,
    paddingTop:"20px"
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 40,
    
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%"
  }
});

class AboutUs extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false,
    wd:1110,
    ht:500
  };

  componentDidMount() {
    if(( window.innerWidth <= 800 )){
      this.setState({wd:"100%"})
      this.setState({ht:"auto"})
    }
    else{
      this.setState({wd:1110})
      this.setState({ht:500})
    }
  }

  openDialog = event => {
    this.setState({ learnMoredialog: true });
  };

  dialogClose = event => {
    this.setState({ learnMoredialog: false });
  };

  openGetStartedDialog = event => {
    this.setState({ getStartedDialog: true });
  };

  closeGetStartedDialog = event => {
    this.setState({ getStartedDialog: false });
  };

  render() {
    const { classes } = this.props;
    const {
      wd,
      ht
    }= this.state;
    const currentPath = "/aboutus";
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={4}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12} md={12}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      About Us
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    Lekeamp Mobility is founded by Nayan Mavarkar and Hrishikesh Shiralkar in jan, 2019 in Maharashtra.This company was built with the vision to make every commute of the world smarter and eco-friendly. We are now having few more optimistic cofounders and have already deployed our first product BLITZ CSO3 that have several Unique selling points with appealing look and amazing features. Yet this is just a first generation version. Lekeamp is on the verge to bring more smart solutions in green mobility, for that stay tuned!

                    </Typography>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {/* <Button
                      color="primary"
                      variant="contained"
                      className={classes.actionButtom}
                    >
                      Learn more
                    </Button> */}
                  </div>
                </Paper>
                <br></br>
                <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography variant="body2" gutterBottom>
                  Proudly developed in India, Vasai, Maharashtra! 
                  
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  
                  For free test rides contact <a href="tel:+91 8600839237">+91 8600839237</a>, <a href="tel:+91 99301 17422">+91 99301 17422</a>.
                  
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  
                  
                  Email: <a href="mailto:lekeampmobility@gmail.com">lekeampmobility@gmail.com</a>
                  </Typography>
                  </div>
                </Paper>
              </Grid>
              
              
              
              
              
            </Grid>
          </Grid>
          <SwipeDialog
            open={this.state.learnMoredialog}
            onClose={this.dialogClose}
          />
          <InstructionDialog
            open={this.state.getStartedDialog}
            onClose={this.closeGetStartedDialog}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(AboutUs));
