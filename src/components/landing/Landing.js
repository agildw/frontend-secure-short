import React from "react";
import LandingHeaders from "@/components/landing/LandingHeaders";
import LandingMain from "@/components/landing/LandingMain";
import LandingFooter from "./LandingFooter";

function Landing() {
  return (
    <div
      className="
    flex flex-col items-center justify-center w-full h-screen justify-between
    "
    >
      <LandingHeaders />
      <LandingMain />
      <LandingFooter />
    </div>
  );
}

export default Landing;
