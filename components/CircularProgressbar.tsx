// import React from 'react';

// interface CircularProgressBarProps {
//   value: number; // Progress value (0 to 100)
//   size?: number; // Diameter of the circle
//   strokeWidth?: number; // Width of the circle stroke
//   color?: string; // Color of the progress
//   textColor?: string; // Color of the text
// }

// const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
//   value,
//   size = 100,
//   strokeWidth = 8,
//   color = '#38b2ac', // Tailwind color teal-400
//   textColor = '#38b2ac', // Tailwind color teal-400
// }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (value / 100) * circumference;

//   return (
//     <svg width={size} height={size}>
//       <circle
//         cx={size / 2}
//         cy={size / 2}
//         r={radius}
//         stroke="#d1d5db" // Tailwind color gray-300 for trail color
//         strokeWidth={strokeWidth}
//         fill="transparent"
//       />
//       <circle
//         cx={size / 2}
//         cy={size / 2}
//         r={radius}
//         stroke={color}
//         strokeWidth={strokeWidth}
//         fill="transparent"
//         strokeDasharray={circumference}
//         strokeDashoffset={offset}
//         strokeLinecap="round"
//         transform={`rotate(-90 ${size / 2} ${size / 2})`}
//       />
//       <text
//         x="50%"
//         y="50%"
//         textAnchor="middle"
//         dy=".3em"
//         fontSize="16px"
//         fill={textColor}
//       >
//         {`${value}%`}
//       </text>
//     </svg>
//   );
// };

// export default CircularProgressBar;
