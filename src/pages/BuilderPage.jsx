import { useState } from "react";

import Header from "../components/Header";
import FillSection from "../components/FillSection";

export default function BuilderPage() {
  const [step, setStep] = useState(1);
  return (
    <>
      <Header />
      <div className="-mt-8 px-10">
        <FillSection step={step} setStep={setStep} />
      </div>
    </>
  );
}
