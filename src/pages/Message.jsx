import React from 'react';
import { motion } from 'framer-motion';

function Message() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4">
      <motion.div 
        className="max-w-md w-full bg-white border border-gray-200 shadow-2xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-t-xl">
          <h1 className="text-2xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
            아빠! 생일축하해요 ~
          </h1>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-gray-700 text-left md:text-lg leading-relaxed">
            아빠, 아직 부족한 아들이지만 최대한 능력을 살려서 코딩으로 편지를 써봤어요 ㅎㅎ<br/>
            평소에 아빠 덕분에 응원도 많이 받고 힘을 많이 받는 것 같아<br/>
            취직하기 힘들고 좀 어려운 시기지만 옆에서 기다려주는 아빠를 보면서
            최대한 함께 있는 시간, 추억을 더 많이 많이 만들고 싶네 ㅎㅎ<br/>
            내가 부끄러움이 많아서 평소에 표현을 잘 못하는 편이지만
            나에게 아빠는 항상 세상에서 가장 든든한 지원군이야<br /><br/>
            사랑해요!!
          </p>
          <p className="text-gray-500 text-sm md:text-base text-right">
            사랑을 담아, 둘째 아들 민서가
          </p>
        </div>
        <div className="bg-gray-100 p-4 text-center rounded-b-xl">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-gradient-to-l transform transition-all duration-300">
            🎉 생일 축하해요! 🎉
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Message;
