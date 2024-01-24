import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, I'm Aayush Baniya
          </h1>
          <p className="text-gray-500">Welcome to my 3d portfolio</p>
          <p className="mt-3">More about me:</p>
          <ul className="leading-9">
            <li>🧑‍💻 I'm currently a high school senior</li>
            <li>🧑‍🏫 Planning to major in Computer Science</li>
            <li>📦 Currently Focusing on Frontend Development</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets🔥
          </h1>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Other Technologies 🔬</b>
          </p>
          <ul className="leading-9">
            <li>Flutter</li>
            <li>Git</li>
            <li>NodeJS</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Check out my Projects
          </h1>
        
          <p className="mt-6 p-3 bg-slate-200 rounded-lg hover: scale-200">
            🤖 <a href="https://github.com/AayushBaniya2006">Click here to access my github</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};