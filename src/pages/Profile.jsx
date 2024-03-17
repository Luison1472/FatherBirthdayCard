import React from 'react';

function Project() {
    return (
        <section id="profile" className="pt-36 relative">
            <div id="scrollText" className="my-3">
                <p className="text-center text-3xl animate-fadeIn">편안한 삶, 새로운 일상을 제공하고 싶은</p>
                <p className="text-center text-3xl animate-fadeIn">신입 FrontEnd 개발자 박민서 입니다.</p>
            </div>

            <div className="mx-auto my-5 py-4 px-7 w-full max-w-screen-lg bg-white shadow-2xl">
                <h2 className="text-5xl flex justify-center mb-5">Profile</h2>
                <div className="flex justify-evenly items-center">
                    <div>
                        <img src="/img/my-profile.png" alt="프로필" className="float-left w-56 h-auto object-cover" />
                    </div>
                    <div className="profile-list text-gray-700 text-lg">
                        <ul className="profile-ul-box flex flex-col my-2 px-5 py-2 w-full">
                            <li className="flex items-center gap-2"><img className="w-8" src="/img/name.png" alt="이름 아이콘" />박민서</li>
                            <li className="flex items-center gap-2"><img className="w-8" src="/img/birthday.png" alt="생일 아이콘"/>1999.08.27</li>
                            <li className="flex items-center gap-2"><img className="w-8" src="/img/adress.png" alt="주소 아이콘"/>인천광역시 서구</li>
                            <li className="flex items-center gap-2"><img className="w-8" src="/img/email.png" alt="이메일 아이콘"/>melody9908@naver.com</li>
                            <li className="flex items-center gap-2"><img className="w-8" src="/img/school.png" alt="학교 아이콘"/>청운대학교&#40;전자공학과,전자공학부&#41; </li>
                            <li className="flex items-center gap-2"><img className="w-8" src="/img/education.png" alt="교육 아이콘"/>제로베이스 프론트엔드 취업 스쿨 졸업</li>
                        </ul>
                        <ul className="profile-ul-box flex flex-col my-2 px-5 py-2 w-full">
                            <a href="https://github.com/Luison1472"><li className="flex items-center gap-2"><img className="w-8" src="/img/github.png" alt="깃허브 아이콘"/>Git</li></a>
                            <a href="https://blog.naver.com/mingcoding"><li className="flex items-center gap-2"><img className="w-8" src="/img/blogicon.png" alt="블로그 아이콘"/>Blog</li></a>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="mt-2 mb-2 text-4xl">About Me</h2>
                    <div className="font-semibold">
                        <p className="pb-2">저는 궁금증이 있다면 깊이 파고드는 것을 좋아해 공학과인 전자공학을 선택하였습니다.</p>
                        <p className="pb-2">전자공학과에서 4년을 보냈지만 제 길이 아닌 것 같아 방황하던 중</p>
                        <p className="pb-2">친형이 스스로 길을 찾아가고 결국 그 길을 뛰어가는 것이 저에게는 충격이였습니다.</p>
                        <p className="pb-2">개발자인 친형의 모습을 옆에서 지켜보며 자연스럽게 프론트엔드 개발자를 목표에 담게 되었습니다. </p>
                        <p className="pb-2">끊임없는 도전과 배움을 통해 다양한 기술 스택을 쌓아</p>
                        <p className="pb-2">적재적소에 알맞은 기술을 적용하여 최고의 UX를 제공할 수 있는</p>
                        <p className="pb-2">프론트엔드 개발자가 되고 싶습니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;