import React, { useState } from 'react'

function Project() {
  const projects = [
    {
      id: 1,
      title: "Coupang-Discovery",
      description: "쿠팡 웹페이지의 <오늘의 발견> 영역 마크업",
      imageUrl: "/src/assets/img/Coupang-Discovery.png",
      backContent: "쿠팡 웹 페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
      Period:"2023-09-20 ~ 2023-09-23",
      Tech: "HTML5 & CSS",
      work1: "HTML 마크업",
      work2: "CSS 스타일링",
      work3: "웹 접근성",
      link:["https://github.com/Luison1472/Coupang-Discovery","https://coupang-discovery.vercel.app/"]
    },
    {
      id: 2,
      title: "Coupang-Offer",
      description: "쿠팡 <카테고리별 추천 상품> 영역 마크업",
      imageUrl: "/src/assets/img/Coupang-CategoryBest.png",
      backContent: "쿠팡 웹 페이지의 <오늘의 쇼핑 제안> 영역을 마크업한 결과물입니다.",
      Period:"2023-09-30 ~ 2023-10-02",
      Tech: "HTML5 & CSS",
      work1: "HTML 마크업",
      work2: "CSS 스타일링",
      work3: "웹 접근성",
      link:["https://github.com/Luison1472/Coupang-CategoryBest","https://coupang-category-best.vercel.app/"]
    },
    {
      id: 3,
      title: "Star Rating",
      description: "JavaScript로 구현한 별점 부여기능",
      imageUrl: "/src/assets/img/starRating.png",
      backContent: "JavaScript로 재사용 가능하도록 ES Module을 이용한 별점 평가 컴포넌트입니다.",
      Period:"2023-11-11 ~ 2023-11-12",
      Tech: "HTML5 & CSS & JavaScript",
      work1: "HTML 마크업",
      work2: "CSS 스타일링",
      work3: "JavaScript 모듈화 및 기능 구현",
      link:["https://github.com/Luison1472/Star-Rating","https://star-rating-eight.vercel.app/"]
    },
    {
      id: 4, title: "DatePicker & Calender",
      description: "ES Module을 활용한 DatePick와 Calender",
      imageUrl: "/src/assets/img/DatePicker.png",
      backContent: "재사용 가능하도록 ES Moudle을 활용하여 구현한 커스텀 DatePick과 Calender입니다.",
      Period:"2023-11-15 ~ 2023-11-17",
      Tech: "HTML5 & CSS & JavaScript",
      work1: "HTML 마크업",
      work2: "CSS 스타일링",
      work3: "JavaScript 모듈화 및 기능 구현",
      link:["GitHub","https://date-picker-calender.vercel.app/"]
    },
    {
      id: 5,
      title: "News Viewer",
      description: "Intersection Observer를 활용한 NewsViwer",
      imageUrl: "/src/assets/img/NewsViewer.png",
      backContent: "Intersection Observer를 활용한 무한 스크롤 뉴스 뷰어입니다.",
      Period:"2023-11-18 ~ 2023-11-22",
      Tech: "HTML5 & CSS & JavaScript",
      work1: "News API 연동",
      work2: "Infinite Scroll 구현",
      work3: "CSS 스타일링",
      link:["https://github.com/Luison1472/News-Viewer","#"],
      add:"[apiKey 정책변경으로 인해 localhost에서만 작동합니다]",
    },
    {
      id: 6,
      title: "Luison ShoppingMall",
      description: "React를 활용한 개인쇼핑몰",
      imageUrl: "/src/assets/img/LuisonShop.png",
      backContent: "React를 이용해 개인 쇼핑몰을 구현한 프로젝트 입니다.",
      Period:"2023-12-06 ~ 2023-12-23",
      Tech: "HTML5 & CSS & React+Vite",
      work1: "HTML 마크업",
      work2: "CSS 스타일링",
      work3: "Component 구현",
     link:["https://github.com/Luison1472/Luison-react-shop-project","https://luison-react-shop-project.vercel.app/"]
    },
    {
      id: 7,
      title: "요리조리",
      description: "React를 활용한 레시피 공유 커뮤니티",
      imageUrl: "/src/assets/img/YoriJori.png",
      backContent: "1인 가구가 늘어남에 따라 React를 이용한 레시피 공유 커뮤니티 프로젝트 입니다.",
      Period:"2023-12-28 ~ 2024-01-30",
      Tech: "HTML5 & CSS & React+Vite",
      add:"test계정 : id-test@gmail.com, pw-password1234",
      work1: "Firebase 연동",
      work2: "게시물/댓글 CRUD 구현",
      work3: "CSS 스타일링",
      link:["https://github.com/Luison1472/YoriJori","https://yori-jori.vercel.app/"]
    },
    {
      id: 8,
      title: "같이 가요~",
      description: "React와 Recoil을 활용한 협업 프로젝트",
      imageUrl: "/src/assets/img/GoTogether.png",
      backContent: "Recoil과 TailwindCSS를 도입하여 진행하고 있는 여행 메이트를 구하는 프로젝트 입니다.",
      Period:"2024-02-13 ~ ing",
      Tech: "React+Vite & TailWindCSS & Recoil",
      add:"진행중인 프로젝트라 데모 버전이 없습니다.",
      work1: "FrontEnd",
      work2: "Design",
      work3: "ProtectRoute 구현",
      link:["https://github.com/orgs/zerobase-I/repositories","#"]
    },
    {
      id: 9,
      title: "포트폴리오",
      description: "TailWindCSS를 활용한 포트폴리오",
      imageUrl: "/src/assets/img/portfolio.png",
      backContent: "TailwindCSS를 이용한 포트폴리오입니다.",
      Period:"2024-03-10 ~ 2024-03-17",
      Tech: "React+Vite & TailWindCSS",
      work1: "TailWind 스타일링",
      work2: "Section 구성",
      work3: "포트폴리오 제작",
      link:["GitHub","Demo"]
    },
  ];
const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (id) => {

    setFlippedCardId(flippedCardId === id ? null : id);
  };

   return (
   <section id="project" className="py-24 bg-white">
      <div className="container mx-auto px-5 py-10">
        <h2 className="text-5xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {projects.map((project) => (
            <div key={project.id} className={`bg-gray-800 shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 ${flippedCardId === project.id ? 'scale-105' : 'scale-100'}`} onClick={() => handleCardClick(project.id)}>
              <div className={`transition-opacity duration-500 ${flippedCardId === project.id ? 'opacity-0' : 'opacity-100'}`}>
                {/* 앞면 컨텐츠 */}
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <h3 className="text-gray-200 text-2xl mb-2">{project.title}</h3>
                  <p className="text-white mb-4">{project.description}</p>
                  <a href={project.link} className="text-red-400 hover:underline">Click</a>
                </div>
              </div>

              <div className={`absolute bg-white top-0 border-none outline-none cursor-pointer left-0 w-full h-full p-5 transition-opacity duration-500 ${flippedCardId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                {/* 뒷면 컨텐츠 */}
                <p className="flex justify-start text-2xl font-bold mb-2">{project.title}</p>
                <p className="text-gray-700 mb-4 text-left">{project.backContent}</p>
                <div className="mt-20">
                <p className="flex justify-start text-xs">{project.add}</p>
                  <p className="flex justify-start italic">#Period : {project.Period}</p>
                  <p className="flex justify-start italic">#Tech : {project.Tech}</p>
                  <p className="flex justify-start italic">#My Work</p>
                  <ul className="list-disc list-inside text-left">
                    <li className="">{project.work1}</li>
                    <li className="">{project.work2}</li>
                    <li className="">{project.work3}</li>
                  </ul>
                  <div className="flex justify-end gap-2 mt-3">
                    <a href={project.link[0]} target="_blank" rel="noopener noreferrer"><p className="bg-slate-400 rounded-xl py-1 px-2">github</p></a>
                    <a href={project.link[1]} target="_blank" rel="noopener noreferrer"><p className="bg-slate-400 rounded-xl py-1 px-2">Demo</p></a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;