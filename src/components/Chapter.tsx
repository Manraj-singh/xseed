"use client";
import React from "react";
import { data } from "@/data/data";

const Chapter = () => {
  console.log(data);

  return (
    <div className="p-4 m-auto max-w-3xl mt-4 pt-2 ">
      {data.map((lesson, i) => (
        <>
          <h1 className="text-2xl font-bold text-emerald-500 mb-4" key={i}>
            Lesson {i + 1}: {lesson.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {lesson.introduction}
          </p>
          <iframe
            className="grid justify-center w-full mb-6"
            src={lesson?.video}
            allowFullScreen
            height={350}
          ></iframe>
          <hr className="font-bold" />

          {lesson?.sections.map((block, i) => (
            <section key={i} className="text-gray-600 mt-5 ">
              <h2 className="text-emerald-400 font-bold mb-4 mt-2 text-lg">
                {block.title}
              </h2>
              <p className=" mb-2">{block?.text}</p>
              <br />

              <img className="mb-2" src={block?.image} />
              <ul className="list-disc list-inside  mb-4">
                {block.steps.map((step, i) => (
                  <>
                    <li className="mb-2">
                      <strong>Step {i + 1}: &nbsp;</strong>
                      {step}
                    </li>
                  </>
                ))}
              </ul>
              <p>{block?.answer}</p>
              <hr />
            </section>
          ))}
        </>
      ))}
    </div>
  );
};

export default Chapter;
