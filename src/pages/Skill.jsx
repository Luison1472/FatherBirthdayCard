import React, { useEffect, useRef } from 'react';

const Skill = () => {
    const skillRef = useRef(null);

   

    return (
        <section id="skill_box" className="p-28 bg-white">
            <div className="skill-container mx-auto max-w-4xl" ref={skillRef}>
                <h2 className="text-5xl font-bold pb-10 mt-10 text-center">Skills</h2>
                <ul className="justify-center flex gap-44 mb-36">
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/img/html.png" alt="html 아이콘"/></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/img/css.png" alt="css 아이콘"/></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/img/react.png" alt="react 아이콘"/></li>
                </ul>
                <ul className="justify-center flex gap-44 mb-36">
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/img/javascript.png" alt="javascript 아이콘" /></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/img/ts.png" alt="typescript 아이콘"/></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/img/git.png" alt="github 아이콘" /></li>
                    <li className="w-36 animate-fadeIn hover:scale-125 transition-transform duration-600"><img className="bg-purple-700 rounded-md" src="/img/daisyui.png" alt="daisyui 아이콘" /></li>
                </ul>
                <ul className="justify-center flex gap-44 mb-16">
                    <li className="w-28 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/img/recoil.png" alt="recoil 아이콘"/></li>
                    <li className="w-28 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/img/tailwindcss.png" alt="tailwindcss 아이콘" /></li>
                    <li className="w-28 animate-fadeIn hover:scale-125 transition-transform duration-600"><img src="/img/reactquery.png" alt="reactquery 아이콘" /></li>
                </ul>
            </div>
        </section>
    );
};

export default Skill;