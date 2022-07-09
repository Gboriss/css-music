

import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from "../styles/pages/Instrument.module.css";

//Instruments
import Guitar from "../components/guitar";

const Instrument = () => {
  const router = useRouter();
  const { name } = router.query;

  switch (name) {
    case "guitar":
      return <Guitar />;
      break;
    default:
      return <Cheating />;
  }
}

function Cheating() {
  return (
    <div>
      <h1>Don't cheat with me</h1>
      <Link href="/">
        <span>Click here to return to home</span>
      </Link>
    </div>
  );
}

export default Instrument;