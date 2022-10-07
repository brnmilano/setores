import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Heading from "../Heading";
import styles from "./styles.module.scss";

export default function Setores() {
  return (
    <Box className={styles.setoresWrapper}>
      <Heading>Setores</Heading>

      <Accordion sx={{ backgroundColor: "#a09f9f" }}>
        <AccordionSummary
          expandIcon={
            <ArrowDropDownCircleRoundedIcon sx={{ color: "#000000" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
            Setor 1
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 1
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 2
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 3
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 1
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 2
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 3
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 1
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 2
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 3
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#a09f9f" }}>
        <AccordionSummary
          expandIcon={
            <ArrowDropDownCircleRoundedIcon sx={{ color: "#000000" }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
            Setor 2
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 1
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 2
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 3
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 1
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 2
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 3
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 1
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 2
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 3
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#a09f9f" }}>
        <AccordionSummary
          expandIcon={
            <ArrowDropDownCircleRoundedIcon sx={{ color: "#000000" }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
            Setor 3
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 1
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 2
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 3
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 1
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 2
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 3
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 1
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 2
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#c4c4c4",
              padding: 1,
              textTransform: "uppercase",
            }}
          >
            cargo 3
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
