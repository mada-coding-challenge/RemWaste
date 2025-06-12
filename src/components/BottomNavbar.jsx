import React from 'react';
import Button from './Button';
const BottomNavbar = ({selected}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 ">
      <div className="navbar  bg-[rgba(246,206,0,0.5)] justify-around">
        <Button text={'BACK'} />
       <div className="inset-0 flex items-top justify-center text-[2rem] font-bold mb-2 pt-[23px] ">
              {selected?`${selected.size} YD³`:""}
            </div>
        <Button text={'NEXT'} />

        {/* Optional: Add a button or icon */}
      </div>
    </div>
  );
};

export default BottomNavbar;
