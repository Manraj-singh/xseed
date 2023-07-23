"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");

      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <nav className="bg-white border-gray-200 text-black px-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center">
            <img
              width={50}
              height={50}
              src="data:image/png;base64,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"
              alt="icons"
              className="mr-2"
            />

            <span className="self-center text-2xl font-semibold whitespace-nowrap text-emerald-500">
              My Classroom
            </span>
          </Link>
          <div className="flex items-center">
            <Link
              href="/profile"
              className="text-md mr-2  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Profile
            </Link>
            <span
              onClick={logout}
              className="text-md  text-blue-600 dark:text-blue-500 hover:underline"
            >
              logout
            </span>
          </div>
        </div>
      </nav>
      <nav className="bg-emerald-400 p-2 ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Maths
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  English
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Social Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
