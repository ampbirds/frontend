import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import SimpleLineChart from "./SimpleLineChart";
import Months from "./common/Months";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Loading from "./common/Loading";

import Topbar from "./Topbar";
const fea1 = require("../images/fea1.jpg");
const fea2 = require("../images/fea2.jpg");
const fea3 = require("../images/fea3.jpg");
const fea4 = require("../images/fea4.jpg");
const fea5 = require("../images/fea5.jpg");
const bike2 = require("../images/bike2.jpg");
const bike3 = require("../images/bike3.jpg");
const video1 = require("../videos/video1.mp4");
const video2 = require("../videos/video2.mp4");
const numeral = require("numeral");
numeral.defaultFormat("0,000");

const backgroundShape = require("../images/shape.svg");

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
    margin: `0 ${theme.spacing(1)}px`,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 0px)"
    }
  },
  loadingState: {
    opacity: 0.05
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
    overflow:"scroll"
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
    height: 36
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  loanAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  interestAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  mainBadge: {
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
});

const monthRange = Months;

class Dashboard extends Component {
  state = {
    loading: true,
    amount: 15000,
    period: 3,
    start: 0,
    monthlyInterest: 0,
    totalInterest: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    wd:1110,
    ht:500,
    data: []
  };

  updateValues() {
    const { amount, period, start } = this.state;
    const monthlyInterest =
      (amount * Math.pow(0.01 * 1.01, period)) / Math.pow(0.01, period - 1);
    const totalInterest = monthlyInterest * (period + start);
    const totalPayment = amount + totalInterest;
    const monthlyPayment =
      period > start ? totalPayment / (period - start) : totalPayment / period;

    const data = Array.from({ length: period + start }, (value, i) => {
      const delayed = i < start;
      return {
        name: monthRange[i],
        Type: delayed ? 0 : Math.ceil(monthlyPayment).toFixed(0),
        OtherType: Math.ceil(monthlyInterest).toFixed(0)
      };
    });

    this.setState({
      monthlyInterest,
      totalInterest,
      totalPayment,
      monthlyPayment,
      data
    });
  }

  componentDidMount() {
    this.updateValues();
    
    if(( window.innerWidth <= 800 )){
      this.setState({wd:"100%"})
      this.setState({ht:"auto"})
    }
    else{
      this.setState({wd:1110})
      this.setState({ht:500})
    }
  }

  handleChangeAmount = (event, value) => {
    this.setState({ amount: value, loading: false });
    this.updateValues();
  };

  handleChangePeriod = (event, value) => {
    this.setState({ period: value, loading: false });
    this.updateValues();
  };

  handleChangeStart = (event, value) => {
    this.setState({ start: value, loading: false });
    this.updateValues();
  };
  bookNow = (event, value) => {
    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSeaU1hjw01SbL81ASwHepiGI1XnKKCoK61ZgA5jj2lVN0mxrQ/viewform?vc=0&c=0&w=1&flr=0"
  };

  render() {
    const { classes } = this.props;
    const {
      amount,
      period,
      start,
      monthlyPayment,
      monthlyInterest,
      data,
      wd,
      ht,
      loading
    } = this.state;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
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
                <div className={classes.topBar}>
                  <div className={classes.block}>
                    <Typography variant="h6" gutterBottom>
                      Time has come to book your BLITZ CSO3
                    </Typography>
                    {/* <Typography variant="body1">
                      LekeAmp Electric Cycle Features
                    </Typography> */}
                  </div>
                  <div>
                    <Button
                      variant="outlined"
                      className={classes.outlinedButtom}
                      onClick={this.bookNow}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body1">
                      Use slider to set the amount you need.
                    </Typography> */}
                    
                    <div className={classes.rangeLabel}>
                    <img width={wd} height={ht} src={fea1} alt="" />
                    </div>
                    <Typography variant="body1">
                    Indicates battery percentage, speed, distance, PAS levels etc.
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body1">
                      Use slider to set the amount you need.
                    </Typography> */}
                    
                    <div className={classes.rangeLabel}>
                    <img width={wd} height={ht} src={fea2} alt="" />
                    </div>
                    <Typography variant="body1">
                    Let's stop talking about the future, and start living it! 
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body1">
                      Use slider to set the amount you need.
                    </Typography> */}
                    
                    <div className={classes.rangeLabel}>
                    <img width={wd} height={ht} src={fea3} alt="" />
                    </div>
                    <Typography variant="body1">
                    Waterproof buttons for headlamp and horn
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body1">
                      Use slider to set the amount you need.
                    </Typography> */}
                    
                    <div className={classes.rangeLabel}>
                    <img width={wd} height={ht} src={fea4} alt="" />
                    </div>
                    <Typography variant="body1">
                    Electric lock that locks the ebike mechanically as well as electrically!
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body1">
                      Use slider to set the amount you need.
                    </Typography> */}
                    
                    <div className={classes.rangeLabel}>
                    <img width={wd} height={ht} src={fea5} alt="" />
                    </div>
                    <Typography variant="body1">
                    White head led lamp which is water resistant! 
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body1">
                      Use slider to set the amount you need.
                    </Typography> */}
                    
                    <div className={classes.rangeLabel}>
                    <img width={wd} height={ht} src={bike2} alt="" />
                    </div>
                    <Typography variant="body1">
                    Battery with the smart lock inside! 
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body1">
                      Use slider to set the amount you need.
                    </Typography> */}
                    
                    <div className={classes.rangeLabel}>
                    <img width={wd} height={ht} src={bike3} alt="" />
                    </div>
                    <Typography variant="body1">
                    Swipe to access the trunk/ to remove the battery to unlock the ebike.
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body1">
                      Use slider to set the amount you need.
                    </Typography> */}
                    
                    <div className={classes.rangeLabel}>
                    {/* <video width={wd} height={ht} controls  >
                      <source src={video1} type="video/mp4"/>
                    </video> */}
                    <iframe width={wd} height={ht} src="https://www.youtube.com/embed/IX6KxPvF0Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                    </div>
                  </div>
                </Paper>
              </Grid>
               <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <div>
                    {/* <Typography variant="subtitle1" gutterBottom>
                      How much you want to transfer
                    </Typography>
                    <Typography variant="body1">
                      Use slider to set the amount you need.
                    </Typography> */}
                    
                    <div className={classes.rangeLabel}>
                    {/* <video width={wd} height={ht} controls  >
                      <source src={video2} type="video/mp4"/>
                    </video> */}
                    <iframe width={wd} height={ht} src="https://www.youtube.com/embed/KFG6ieHDYk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" allowfullscreen></iframe>
                    </div>
                  </div>
                </Paper>
              </Grid>
              {/* <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Period
                    </Typography>
                    <Typography variant="body1">A sample period</Typography>
                    <div className={classes.blockCenter}>
                      <Typography color="secondary" variant="h6" gutterBottom>
                        {period} months
                      </Typography>
                    </div>
                    <div>
                      <Slider
                        value={period}
                        min={1}
                        max={6}
                        step={1}
                        onChange={this.handleChangePeriod}
                      />
                    </div>
                    <div className={classes.rangeLabel}>
                      <div>
                        <Typography variant="subtitle2">1 month</Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2">6 months</Typography>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid> */}

              {/* <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Start date
                    </Typography>
                    <Typography variant="body1">
                      Set your preferred start date.
                    </Typography>
                    <div className={classes.blockCenter}>
                      <Typography color="secondary" variant="h6" gutterBottom>
                        {monthRange[start]}
                      </Typography>
                    </div>
                    <div>
                      <Slider
                        value={start}
                        min={0}
                        max={5}
                        step={1}
                        onChange={this.handleChangeStart}
                      />
                    </div>
                    <div className={classes.rangeLabel}>
                      <div>
                        <Typography variant="subtitle2">Dec 2018</Typography>
                      </div>
                      <div>
                        <Typography variant="subtitle2">May 2019</Typography>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid> */}

              {/* <Grid container spacing={4} justify="center">
                <Grid item xs={12} md={8}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                    <Loading loading={loading} />
                    <div className={loading ? classes.loadingState : ""}>
                      <Typography variant="subtitle1" gutterBottom>
                        Some details
                      </Typography>
                      <Typography variant="body1">
                        Details about the graph
                      </Typography>
                      <div style={{ marginTop: 14, marginBottom: 14 }}>
                        <div className={classes.inlining}>
                          <Avatar className={classes.loanAvatar}></Avatar>
                          <Typography
                            className={classes.inlining}
                            variant="subtitle2"
                            gutterBottom
                          >
                            Type
                          </Typography>
                          <Typography
                            className={classes.inlining}
                            color="secondary"
                            variant="h6"
                            gutterBottom
                          >
                            {numeral(monthlyPayment).format()} units
                          </Typography>
                        </div>
                        <div className={classes.inlining}>
                          <Avatar className={classes.interestAvatar}></Avatar>
                          <Typography
                            className={classes.inlining}
                            variant="subtitle2"
                            gutterBottom
                          >
                            Othe type
                          </Typography>
                          <Typography
                            className={classes.inlining}
                            color="secondary"
                            variant="h6"
                            gutterBottom
                          >
                            {numeral(monthlyInterest).format()} units
                          </Typography>
                        </div>
                      </div>
                      <div>
                        <SimpleLineChart data={data} />
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                    <Loading loading={loading} />
                    <div className={loading ? classes.loadingState : ""}>
                      <Typography variant="subtitle1" gutterBottom>
                        State
                      </Typography>
                      <div className={classes.mainBadge}>
                        <VerifiedUserIcon
                          style={{ fontSize: 72 }}
                          fontSize={"large"}
                          color={"secondary"}
                        />
                        <Typography
                          variant="h5"
                          color={"secondary"}
                          gutterBottom
                        >
                          Verified
                        </Typography>
                      </div>
                      <div className={classes.buttonBar}>
                        <Button
                          to={{ pathname: "/dashboard", search: `?type=save` }}
                          component={Link}
                          variant="outlined"
                          className={classes.actionButtom}
                        >
                          Save
                        </Button>
                        <Button
                          to={{ pathname: "/dashboard", search: `?type=apply` }}
                          component={Link}
                          color="primary"
                          variant="contained"
                          className={classes.actionButtom}
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid> 
              </Grid> */}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Dashboard));
