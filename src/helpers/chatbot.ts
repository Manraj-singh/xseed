import React, { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const useAlan = () => {
  useEffect(() => {
    alanBtn({
      key: process.env.ALAN_KEY!,
      onCommand: () => {},
    });
  }, []);
};

export default useAlan;
