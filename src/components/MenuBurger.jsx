import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useState } from "react";
function MenuBurger() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: "80vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "darkred",
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List
        sx={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "30px 0",
        }}
      >
        {["À propos de moi", "Mes projets", "Contact"].map((text) => (
          <ListItem
            sx={{
              padding: "5vh 0",
            }}
            key={text}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={() => toggleDrawer(true)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="jss217"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
        </svg>
      </Button>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default MenuBurger;
