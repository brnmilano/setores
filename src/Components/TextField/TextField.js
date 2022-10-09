import { Box, TextField as TextFieldMUI } from "@mui/material";
import clsx from "clsx";
import Text from "../Text";
import styles from "./styles.module.scss";

export default function TextField({
  theme = "White",
  required,
  topLabel,
  ...props
}) {
  return (
    <Box width={props.fullWidth ? "100%" : undefined}>
      {topLabel && (
        <Text
          sx={{
            color: "#0581f8",
            fontSize: 24,
            marginBottom: 2,
          }}
        >
          {topLabel}
          {required && <span style={{ color: "#F76140" }}>*</span>}
        </Text>
      )}

      <TextFieldMUI
        InputProps={{
          classes: {
            root: styles.inputRoot,
            input: styles.input,
          },
        }}
        FormHelperTextProps={{
          classes: {
            error: styles.helperTextError,
          },
        }}
        classes={{
          root: clsx(styles.root, theme === "Gray" && styles.gray),
        }}
        fullWidth
        variant="standard"
        {...props}
      />
    </Box>
  );
}
