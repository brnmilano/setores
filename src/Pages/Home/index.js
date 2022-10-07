import * as React from "react";
import AddSetor from "../../Components/AddSetor";
import Container from "../../Components/Container";
import Setores from "../../Components/Setores";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Container maxWidth="1600px">
        <div className={styles.contentWrapper}>
          <Setores />
          
          <AddSetor />
        </div>
      </Container>
    </div>
  );
}
