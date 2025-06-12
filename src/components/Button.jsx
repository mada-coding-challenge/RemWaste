import React from 'react';

const Button = ({ text }) => {
  return (
    <div className="h-[70px] w-[70px] border border-black  mx-1/3 rounded-full">
      <button
        id="Next"
        className="transition-all duration-200 text-white w-[60px] h-[60px] bg-black m-auto my-1.5 cursor-pointer hover:w-full hover:h-full hover:my-0 rounded-full"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
