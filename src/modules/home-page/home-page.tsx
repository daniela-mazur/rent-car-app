import { Grid, Typography, Box } from "@material-ui/core";

import CarPoster from "assets/images/car-poster.jpg";
import Cabriolet from "assets/images/cabriolet.jpg";
import Hatchback from "assets/images/hatchback.jpg";
import Minivan from "assets/images/minivan.jpg";
import Sedan from "assets/images/sedan.jpg";
import Suv from "assets/images/suv.jpg";
import Pickup from "assets/images/pickup.jpg";
import Supercar from "assets/images/supercar.jpg";

import { useStyles } from "./home-page.styles";

const CAR_TYPES = [
  {
    icon: Cabriolet,
    name: "Cabriolet",
  },
  {
    icon: Hatchback,
    name: "Hatchback",
  },
  {
    icon: Minivan,
    name: "Minivan",
  },
  {
    icon: Sedan,
    name: "Sedan",
  },

  {
    icon: Suv,
    name: "Suv",
  },
  {
    icon: Pickup,
    name: "Pickup",
  },
  {
    icon: Supercar,
    name: "Super Car",
  },
];

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Box>
        <img src={CarPoster} alt="car" className={classes.bannerImage} />
      </Box>
      <Typography
        variant="h3"
        color="secondary"
        className={classes.sectionTitle}
      >
        Choose a vehicle type
      </Typography>
      <Grid
        container
        spacing={7}
        justify="center"
        className={classes.chooseCarSection}
      >
        {CAR_TYPES.map((car) => (
          <Grid item key={car.name} xs={4}>
            <Box className={classes.carTypeContainer}>
              <img src={car.icon} alt="carIcon" className={classes.carImage} />
              <Typography variant="subtitle1" className={classes.carName}>
                {car.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { HomePage };
