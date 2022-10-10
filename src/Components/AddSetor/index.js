import CancelIcon from "@mui/icons-material/Cancel";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSetores } from "../../Store/setoresSlice";
import Button from "../Button";
import Heading from "../Heading";
import TextField from "../TextField/TextField";
import styles from "./styles.module.scss";

export default function AddSetor() {
  const dispatch = useDispatch();
  const [cargo, setCargo] = useState("");

  const setoresFormik = useFormik({
    initialValues: {
      name: "",
      cargos: [],
    },
    onSubmit: (values) => {
      if (values.name) {
        dispatch(postSetores(setoresFormik.values));
        setoresFormik.resetForm();
      }
    },
  });

  const addCargo = () => {
    if (cargo) {
      setoresFormik.setFieldValue("cargos", [
        ...setoresFormik.values.cargos,
        cargo,
      ]);
      setCargo("");
    }
  };

  return (
    <form
      className={styles.addSetorWrapper}
      onSubmit={setoresFormik.handleSubmit}
    >
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
          value={cargo}
          onChange={(event) => setCargo(event.target.value)}
        />

        <Button
          backgroundColor="#4A4A4A"
          textTransform="uppercase"
          padding="19px 35px"
          borderRadius={10}
          color="#ffffff"
          fontWeight={500}
          fontSize={12}
          onClick={addCargo}
          type="button"
        >
          Adicionar
        </Button>
      </Box>

      <Box className={styles.cargoAdd}>
        {setoresFormik.values.cargos.map((cargo, index) => {
          return (
            <Box className={styles.cargo} key={`${cargo} ${index}`}>
              {cargo} <CancelIcon />
            </Box>
          );
        })}
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
          type="submit"
        >
          Salvar
        </Button>
      </Box>
    </form>
  );
}
