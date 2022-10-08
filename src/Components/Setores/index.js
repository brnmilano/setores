import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Button from "../Button";
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

        <AccordionDetails classes={{ root: styles.AccordionDetails }}>
          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 1
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 2
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 3
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 1
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 2
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 3
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 1
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 2
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 3
          </Button>

          <Box display="flex" gap={1.25} width="100%">
            <Button
              backgroundColor="#c4c4c4"
              textTransform="uppercase"
              padding="5px 15px"
              width="100%"
            >
              Editar
            </Button>

            <Button
              backgroundColor="#c4c4c4"
              textTransform="uppercase"
              padding="5px 15px"
              width="100%"
            >
              Excluir
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion classes={{ root: styles.Accordion }} sx={{ backgroundColor: "#a09f9f" }}>
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

        <AccordionDetails classes={{ root: styles.AccordionDetails }}>
          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 1
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 2
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 3
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 1
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 2
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 3
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 1
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 2
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 3
          </Button>

          <Box display="flex" gap={1.25} width="100%">
            <Button
              backgroundColor="#c4c4c4"
              textTransform="uppercase"
              padding="5px 15px"
              width="100%"
            >
              Editar
            </Button>

            <Button
              backgroundColor="#c4c4c4"
              textTransform="uppercase"
              padding="5px 15px"
              width="100%"
            >
              Excluir
            </Button>
          </Box>
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

        <AccordionDetails classes={{ root: styles.AccordionDetails }}>
          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 1
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 2
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 3
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 1
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 2
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 3
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 1
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 2
          </Button>

          <Button
            backgroundColor="#c4c4c4"
            textTransform="uppercase"
            padding="5px 15px"
          >
            Cargo 3
          </Button>

          <Box display="flex" gap={1.25} width="100%">
            <Button
              backgroundColor="#c4c4c4"
              textTransform="uppercase"
              padding="5px 15px"
              width="100%"
            >
              Editar
            </Button>

            <Button
              backgroundColor="#c4c4c4"
              textTransform="uppercase"
              padding="5px 15px"
              width="100%"
            >
              Excluir
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
