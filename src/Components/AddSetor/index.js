import { Box, TextField } from "@mui/material";
import Button from "../Button";
import Heading from "../Heading";
import styles from "./styles.module.scss";

export default function AddSetor() {
  return (
    <Box className={styles.addSetorWrapper}>
      <Heading>Adicionar setores</Heading>

      <Box style={{ marginBottom: 20 }}>
        <TextField
          id="outlined-basic"
          placeholder="Nome:"
          variant="outlined"
          fullWidth
          classes={{
            root: styles.textFieldRoot,
          }}
        />
      </Box>

      <Box className={styles.cargosWrapper}>
        <TextField
          id="outlined-basic"
          placeholder="Cargo(s):"
          variant="outlined"
          classes={{
            root: styles.textFieldRoot,
          }}
        />

        <Button
          backgroundColor="#4A4A4A"
          textTransform="uppercase"
          padding="5px 35px"
          borderRadius={10}
          color="#ffffff"
          fontWeight={500}
          fontSize={12}
        >
          Adicionar
        </Button>
      </Box>

      <Box className={styles.buttonSave}>
        <Button
          backgroundColor="#4A4A4A"
          textTransform="uppercase"
          padding="20px 45px"
          borderRadius={10}
          color="#ffffff"
          fontWeight={500}
          fontSize={12}
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
}
