import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Rotate90DegreesCcw } from "@mui/icons-material";


const pages = [
  { name: "Overview", path: "/" },
  { name: "Tracks", path: "/tracks" },
  { name: "Submission", path: "/submission" },
  { name: "Committee", path: "/committee" },
  { name: "Schedule", path: "/schedule" },
  { name: "Registration", path: "/registration" },
  { name: "Call for papers", path: "/call" },
  { name: "Contact Us", path: "/contact" },
];

function ResponsiveAppBar() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [iconRotated, setIconRotated] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    setIconRotated(!iconRotated);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(162deg, rgba(75,67,193,0.9809173669467787) 0%, rgba(58,58,194,1) 32%, rgba(58,110,195,1) 56%)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        marginBottom: "3px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center"
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerToggle}
              color="inherit"
              sx={{ position: 'absolute', zIndex: 1300 }}
            >
             {drawerOpen ? <CloseIcon sx={{ fontSize: 32}} /> : <MenuIcon sx={{ fontSize: 32 }} />}
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleCloseDrawer}
              ModalProps={{
                keepMounted: true, 
              }}
              PaperProps={{
                sx: { width: '250px', mt: { xs: 7, sm: 8 } } // Adjust top margin only for extra small screens
              }}
            >
              <Box
                sx={{
                  width: 250,
                  background:
                    "linear-gradient(162deg, rgba(75,67,193,0.9809173669467787) 0%, rgba(58,58,194,1) 32%, rgba(58,110,195,1) 56%)",
                  height: "100%",
                  color: "white",
                }}
                role="presentation"
                onClick={handleCloseDrawer}
                onKeyDown={handleCloseDrawer}
              >
                <List>
                  {pages.map((page) => (
                    <ListItem
                      
                      key={page.name}
                      component={Link}
                      to={page.path}
                      sx={{
                        color: "white",
                        backgroundColor: location.pathname === page.path ? "rgba(255, 255, 255, 0.2)" : "transparent",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      <ListItemText primary={page.name} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "inherit",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
