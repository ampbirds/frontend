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
    paddingBottom: 200
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
    height: 65
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

class Main extends Component {
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
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Our Vision
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    We at Lekeamp Mobility Pvt. Ltd., have a vision to make every commute of the world smarter and Eco-friendly!

                    </Typography>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.actionButtom}
                    >
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Our Team
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    The best part is, Lekeamp Mobility have dedicated, experienced and optimistic core team who are completely aware about the vision of this venture.
                    </Typography>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.actionButtom}
                    >
                      Learn more
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Upcomming Product
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Blitz CS03
                    </Typography>
                  </div>
                  <div className={classes.alignRight}>
                    <Button
                      onClick={this.openDialog}
                      variant="outlined"
                      className={classes.actionButtom}
                    >
                      Learn more
                    </Button>
                    <Button
                      onClick={this.openGetStartedDialog}
                      color="primary"
                      variant="contained"
                      className={classes.actionButtom}
                    >
                      Dashboard
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div >
                        <Typography color="secondary" gutterBottom>
                          Electric Cycle
                        </Typography>
                        <img width={wd} height={ht} src={bike1} alt="" />
                      </div>
                      <div className={classes.alignRight}>
                        <Button
                          color="primary"
                          variant="contained"
                          className={classes.actionButtom}
                        >
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div >
                        <Typography color="secondary" gutterBottom>
                          Electric Cycle
                        </Typography>
                        <img width={wd} height={ht} src={bike2} alt="" />
                      </div>
                      <div className={classes.alignRight}>
                        <Button
                          color="primary"
                          variant="contained"
                          className={classes.actionButtom}
                        >
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div >
                        <Typography color="secondary" gutterBottom>
                          Electric Cycle
                        </Typography>
                        <img width={wd} height={ht} src={bike3} alt="" />
                      </div>
                      <div className={classes.alignRight}>
                        <Button
                          color="primary"
                          variant="contained"
                          className={classes.actionButtom}
                        >
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
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

export default withRouter(withStyles(styles)(Main));
