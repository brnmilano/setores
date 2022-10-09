import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetores } from "../../Store/setoresSlice";
import Button from "../Button";
import Heading from "../Heading";
import styles from "./styles.module.scss";

export default function Setores() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.setores);
  console.log(data);

  useEffect(() => {
    dispatch(fetchSetores());
  }, []);

  return (
    <Box className={styles.setoresWrapper}>
      <Heading>Setores</Heading>
      {data.map((item, index) => {
        return (
          <Accordion sx={{ backgroundColor: "#a09f9f" }}>
            <AccordionSummary
              expandIcon={
                <ArrowDropDownCircleRoundedIcon sx={{ color: "#000000" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
                {item.name}
              </Typography>
            </AccordionSummary>

            <AccordionDetails classes={{ root: styles.AccordionDetails }}>
              {item.cargos.map((cargo, index2) => {
                return (
                  <Button
                    backgroundColor="#c4c4c4"
                    textTransform="uppercase"
                    padding="5px 15px"
                  >
                    {cargo}
                  </Button>
                );
              })}

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
        );
      })}
    </Box>
  );
}
