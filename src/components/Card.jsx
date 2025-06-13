// src/components/Card.jsx
import { useState } from 'react';
import bin_g from '../assets/bin_g.png';
import bin_y from '../assets/bin_y.png';
import { motion } from 'framer-motion';

const images = [bin_g, bin_y];
export default function Card({ skip, isSelected, onSelect }) {
    const [isHovered, setIsHovered] = useState(false);
  const cardClasses = `card w-[300px] cursor-pointer transition m-auto hover:outline outline-[#d9d9d9] pt-[25px]
    ${isSelected ? "   outline outline-offset-2 outline-[#d9d9d9]" : "hover:shadow"} `;

  return (
    
        <div
        className={cardClasses}
        onClick={() =>{ setIsHovered(false);onSelect(skip)}}
        onMouseEnter={() =>  !isSelected && setIsHovered(true)}
        onMouseLeave={() => !isSelected && setIsHovered(false)}
        
      >
    
        <figure>
          {/* <div className="flex flex-col items-center justify-center "> */}
          <div className="relative w-[280px] h-[130px] ">
            {/* Background image (first image) */}
            <img
              src={images[0]}
              alt="First Image"
              className="absolute w-full h-full "
            />

            {/* Second image (the one that appears on hover) */}
            <motion.img
              src={images[1]}
              alt="Second Image"
              initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
              animate={{
                clipPath:
                  isHovered ||  isSelected
                    ? 'circle(150% at 50% 50%)'
                    : 'circle(0% at 50% 50%)',
                opacity: isHovered ||  isSelected ? 1 : 0,
              }}
              exit={{
                clipPath: 'circle(0% at 50% 50%)',
                opacity: 0,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }} // Faster animation
              className="absolute w-full h-full "
              // Click event to toggle the permanent state
            />
            <div className="absolute inset-0 flex items-top justify-center text-[2rem] font-bold mb-2 pt-[8px]">
              {skip.size}YD³
            </div>
            {/* Green "Excellent" logo in the center */}
            {isSelected && ( 
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="badge badge-success text-white badge-xl text-lg font-bold">
                  SELECTED
                </div>
              </div>
              
            )}
          </div>
          {/* </div> */}
        </figure>
        <div className="card-body">
          <div className="card-actions justify-between">
       
      <div className="badge badge-outline text-[#d9d9d9]">{skip.hire_period_days} days</div>
      <div className="badge badge-outline text-[#d9d9d9]">£{skip.price_before_vat}</div>
  </div><div>
            {skip.allows_heavy_waste&&(
            <div className="badge badge-error font-bold">
              <svg
                className="size-[1em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <rect
                    x="1.972"
                    y="11"
                    width="20.056"
                    height="2"
                    transform="translate(-4.971 12) rotate(-45)"
                    fill="currentColor"
                    strokeWidth={0}
                  ></rect>
                  <path
                    d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                    strokeWidth={0}
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
                 &nbsp;heavy waste isn't allowed
            </div>)}
{!skip.allowed_on_road && (
            <div className="badge badge-warning font-bold ">
              <svg
                className="size-[1em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <g fill="currentColor">
                  <path
                    d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <line
                    x1="9"
                    y1="6.5"
                    x2="9"
                    y2="10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></line>
                  <path
                    d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
                    fill="currentColor"
                    data-stroke="none"
                    stroke="none"
                  ></path>
                </g>
              </svg>
             &nbsp; Skip not allowed on roads
            </div>)}
          </div>
        </div>
      </div>
   
  );
}
