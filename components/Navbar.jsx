import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMenuOpen(false);
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
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={menuOpen}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              getContentAnchorEl={null}
              elevation={10}
             
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "inherit",
                      background:
                        "linear-gradient(162deg, rgba(75,67,193,0.9809173669467787) 0%, rgba(58,58,194,1) 32%, rgba(58,110,195,1) 56%)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "none",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <Link
                      to={page.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
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
                component={Link}
                to={page.path}
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
