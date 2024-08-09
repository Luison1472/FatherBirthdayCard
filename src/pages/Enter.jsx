import React from 'react';
import { useNavigate } from 'react-router-dom';

function Enter() {
  const navigate = useNavigate();

  const handleOpenMessage = () => {
    navigate('/message');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4">
      <div className="max-w-sm w-full bg-white border border-gray-200 shadow-2xl rounded-lg p-8 text-center">
        <div className="mb-8">
          {/* 편지 아이콘 */}
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform rotate-45 rounded-lg"></div>
            <div className="absolute inset-0 bg-white border-2 border-gray-200 transform rotate-45 rounded-lg" style={{ top: '12px', left: '12px', width: 'calc(100% - 24px)', height: 'calc(100% - 24px)' }}></div>
          </div>
          <div className="text-gray-800 text-2xl font-semibold mt-6">아빠에게 전하는 편지</div>
          <p className="text-gray-500 mt-2">둘째 아들이 생일을 축하하며</p>
        </div>
        <button 
          className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-gradient-to-l transform hover:scale-105 transition-all duration-300"
          onClick={handleOpenMessage}
        >
          열어보기
        </button>
      </div>
    </div>
  )
}

export default Enter;
