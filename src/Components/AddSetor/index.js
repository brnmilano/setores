import { Box } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postSetores } from "../../Store/setoresSlice";
import Button from "../Button";
import Heading from "../Heading";
import TextField from "../TextField/TextField";
import styles from "./styles.module.scss";

export default function AddSetor() {
  const dispatch = useDispatch();

  const setoresFormik = useFormik({
    initialValues: {
      name: "",
      cargos: [],
    },
  });

  const addSetor = async () => {
    dispatch(
      postSetores({
        data: setoresFormik.cargos,
      })
    );
  };
  return (
    <Box className={styles.addSetorWrapper}>
      <Heading>Adicionar setores</Heading>

      <Box style={{ marginBottom: 20 }}>
        <TextField
          id="outlined-basic"
          topLabel="Nome:"
          variant="outlined"
          fullWidth
          classes={{
            root: styles.textFieldRoot,
          }}
          {...setoresFormik.getFieldProps("name")}
        />
      </Box>

      <Box className={styles.cargosWrapper}>
        <TextField
          id="outlined-basic"
          topLabel="Cargo(s):"
          variant="outlined"
          fullWidth
          classes={{
            root: styles.textFieldRoot,
          }}
          {...setoresFormik.getFieldProps("cargos")}
        />

        <Button
          backgroundColor="#4A4A4A"
          textTransform="uppercase"
          padding="5px 35px"
          borderRadius={10}
          color="#ffffff"
          fontWeight={500}
          fontSize={12}
          onClick={addSetor}
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
