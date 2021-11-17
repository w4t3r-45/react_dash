/**
 * this app is made by @w4t3r-45 for Cloning-UI purpose.
 * WE MUST DEATTACH EACH PART IN A SEPARATE COMPONENT
 * THIS IS NOT PRODUCTION GRADE STRUCTURE
 */
import { useState } from "react";
import {
  Box,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button,
  styled,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import {
  Home,
  Search,
  CropFree,
  FolderOutlined,
  ShieldOutlined,
  Settings,
} from "@mui/icons-material";
import Fade from "react-reveal/Fade";
import FadingCard from "./fadingCard";

// this is custom theme for my app (used to change main bg color)
const mainTheme = createTheme({
  palette: {
    secondary: {
      main: "#FFE5EB",
      dark: "#FFE0EF",
      contrastText: "#B86379",
    },
    background: {
      default: "#232743",
    },
  },
});

// ##################### SIDE BAR #####################
const SideItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: "5px",
  color: "#fff",
  marginBottom: "20px",
}));

const MenuConfig = [
  { Icon: Home, text: "Home" },
  { Icon: Search, text: "Search" },
  { Icon: CropFree, text: "Zones" },
  { Icon: FolderOutlined, text: "Files" },
  { Icon: ShieldOutlined, text: "Privacy" },
];
// ##################### END #####################

// ##################### ORDERS #####################
const OredersButton = styled(Button)(({ theme }) => ({
  fontSize: ".6rem",
  color: "rgba(0, 0, 0, 0.5)",
}));

const OrdersConfig = [
  { text: "ASSIGNED" },
  { text: "UNASSIGNED" },
  { text: "ALL" },
];

const DummyOrders = [
  {
    id: "2477",
    timestamp: "19/06/02 3:25pm",
    picture:
      "https://newsmeter.in/h-upload/2021/01/19/291251-beautiful-sakura.webp",
    innerPic: null,
    finalNmbr: -2,
    finalTime: "11:59",
  },
  {
    id: "2478",
    timestamp: "19/06/02 3:25pm",
    picture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-matricaria-recutita-flowers-with-high-res-stock-photography-129307072-1548366725.jpg",
    innerPic:
      "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
    finalNmbr: 3,
    finalTime: "11:59",
  },
  {
    id: "2498",
    timestamp: "19/06/02 3:25pm",
    picture:
      "https://post.healthline.com/wp-content/uploads/2020/08/edible-flowers-732x549-thumbnail.jpg",
    innerPic: null,
    finalNmbr: 25,
    finalTime: "11:59",
  },
  {
    id: "2423",
    timestamp: "19/06/02 3:25pm",
    picture:
      "https://www.gardeningknowhow.com/wp-content/uploads/2019/09/flower-color-400x391.jpg",
    innerPic: null,
    finalNmbr: -15,
    finalTime: "11:59",
  },
  {
    id: "2496",
    timestamp: "19/06/02 3:25pm",
    picture:
      "https://www.brides.com/thmb/bP4_bRDOEVf6n8ZJQUep7SugcgE=/2048x2048/smart/filters:no_upscale()/sq-91a2f1ec2cee4753baa8be1506f72294.jpg",
    innerPic: null,
    finalNmbr: 18,
    finalTime: "11:59",
  },
  {
    id: "2476",
    timestamp: "19/06/02 3:25pm",
    picture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edible-flowers-1591216919.jpg?crop=0.607xw:0.911xh;0.0994xw,0.0889xh&resize=640:*",
    innerPic: "https://miro.medium.com/max/1200/1*gBQxShAkxBp_YPb14CN0Nw.jpeg",
    finalNmbr: 12,
    finalTime: "11:59",
  },
  {
    id: "24977",
    timestamp: "19/06/02 3:25pm",
    picture:
      "https://media.architecturaldigest.com/photos/5ab188ded91fc303af543b8e/3:4/w_2406,h_3208,c_limit/faux-flowers-urban.jpg",
    innerPic: null,
    finalNmbr: 5,
    finalTime: "11:59",
  },
];
// ##################### END #####################

function App() {
  const [isMenuSelected, setIsMenuSelected] = useState(0);
  const handleSideClick = (event, index) => {
    setIsMenuSelected(index);
  };
  const [currentOrder, setCurrentOrder] = useState(0);
  const handleOrderButtonClick = (event, index) => {
    setCurrentOrder(index);
  };
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Box
          display="flex"
          sx={{
            pb: 2,
            pt: 2,
            pl: 2,
            pr: 2,
            height: "100vh",
          }}
        >
          {/* sidebar container */}
          <Box
            display="flex"
            flexDirection="column"
            sx={{ width: "fit-content" }}
          >
            {/* logo Container */}
            <Typography
              variant="h1"
              fontSize="2rem"
              fontWeight="bold"
              color="#fff"
              ml={2}
              mb={20}
            >
              Flow<span style={{ color: "#9094AE" }}>.</span>
            </Typography>
            {/* controls container */}
            <Box display="flex" flexDirection="column">
              {MenuConfig.map((item, index) => {
                let { Icon } = item;
                return (
                  <SideItem
                    onClick={(event) => handleSideClick(event, index)}
                    key={index}
                    sx={{
                      color: isMenuSelected === index ? "#0F8DF1" : "#fff",
                    }}
                  >
                    <ListItemIcon>
                      <Icon
                        sx={{
                          color: isMenuSelected === index ? "#0F8DF1" : "#fff",
                          mr: 3,
                          fontSize: "1.8rem",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontSize: "0.9rem",
                          fontWeight: 200,
                        },
                      }}
                    >
                      {item.text}
                    </ListItemText>
                  </SideItem>
                );
              })}
            </Box>
            <Box display="flex" pl={2} mt={"auto"}>
              <Avatar
                src="images/person.jpeg"
                style={{ borderRadius: "25px" }}
                sx={{
                  mr: 2,
                }}
              />
              <Button
                size="small"
                startIcon={<Settings sx={{ color: "#fff" }} />}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "200",
                }}
              >
                Settings
              </Button>
            </Box>
          </Box>
          {/* ####################### RIGHT CONTAINER #####################  */}
          <Box
            flexGrow="1"
            display="flex"
            borderRadius="15px"
            sx={{ bgcolor: "#FFE6DE", ml: 4, padding: 1 }}
          >
            {/* Orders Container */}
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                bgcolor: "#fff",
                padding: 1,
                pt: 2,
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="h1"
                fontSize="1.2rem"
                fontWeight="500"
                mb={2}
              >
                Orders
              </Typography>
              {/* buttons container */}
              <Box display="flex" mb={4}>
                {OrdersConfig.map((item, index) => (
                  <OredersButton
                    onClick={(event) => handleOrderButtonClick(event, index)}
                    key={index}
                    size="small"
                    color={currentOrder === index && "secondary"}
                    variant={currentOrder === index && "contained"}
                    sx={{
                      color: currentOrder === index && "secondary.contrastText",
                      mr: 2,
                    }}
                    disableElevation
                  >
                    {item.text}
                  </OredersButton>
                ))}
              </Box>
              {/* cards container */}
              <Box display="flex" flexDirection="column" overflow="hidden">
                {DummyOrders.map((item, index) => {
                  return <FadingCard item={item} wait={index * 200} />;
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
