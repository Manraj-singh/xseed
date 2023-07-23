"use client";
import Navbar from "@/components/Navbar";
import Subject from "@/components/Subject";
import useAlan from "@/helpers/chatbot";

export default function Home() {
  useAlan();
  return (
    <>
      <Navbar />
      <Subject />
    </>
  );
}
