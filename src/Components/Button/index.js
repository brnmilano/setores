import styles from "./styles.module.scss";

export default function Button({
  children,
  backgroundColor,
  color = "#000000",
  borderRadius,
  padding,
  width = "unset",
  fontSize,
  fontWeight = "bold",
  textTransform,
  onClick,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={styles.container}
      style={{
        backgroundColor,
        borderRadius,
        padding,
        fontSize,
        fontWeight,
        color,
        width,
        textTransform,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
