import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export const Sidebar = ({ drawerWith = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWith },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Jose Badilla
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {["January", "February", "March", "April", "May", "June"].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={"lorem Impusom"} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};
