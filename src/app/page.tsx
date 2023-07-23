"use client";
import Navbar from "@/components/Navbar";
import Subject from "@/components/Subject";
import useAlan from "@/helpers/chatbot";
import { useRef } from "react";

export default function Home() {
  const alanBtnContainer = useRef(null);
  useAlan();
  return (
    <>
      <Navbar />
      <Subject />
      <div ref={alanBtnContainer} />
    </>
  );
}
