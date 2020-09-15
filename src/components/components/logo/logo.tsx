//
// Container component
//

// Imports
import React from "react";
import "./logo.scss";

// Logo versions
export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 432.11 789.57"
      width="350"
    >
      <path
        className="logo"
        d="M357.07,210.45c-5.74,33.56,11.46,68.39,2,100.58a12.36,12.36,0,0,1-6.86,8.25c-28.21,16.69-2.08-47-52.22-39.1-31,12,13.37,41.2,29.08,46.93,6.15,11.23-21.85,34.53-34,23.76-13.64-9.26-29,6.72-43.57,7.65-13,5.8-32.11,3.91-42.49,12.22,28.1,10.67,64.87.07,95.52,4-9.39,12.74-.25,35.94-19.78,41,5.32-18-6.66-36-31.25-30.94-11.78,1.66-32.26-6.35-39.88-.14,12.87,19.72,39.68,28.75,61.77,34.65,3.89,31.84-32.84,52.76-64.08,44.92C158.68,453,116.08,415.25,86,371.67c9.65-22.66,26.82-40.09,40.71-60,98.34-179.08-193.51-149.06-46.41,60C-23.24,716.36,597.15,312.71,350.72,785.08c-3,25.76,31.86-67.43,38.38-78.46,134-351.08-394.79-29-309.83-320.56,6.06-22.52,25.34,22.49,37.26,29.56C153.26,449.68,233.11,499.9,272,447.67a8.87,8.87,0,0,1,.54-1.22c5.23-15.35,8.62-25.7,22.59-32.74a8.4,8.4,0,0,1,2-1.21,8.6,8.6,0,0,1,1.29-1.1,9.2,9.2,0,0,1,.76-1.12c7.52-13.13,1.88-31.83,17.33-39.93,11.92-6.55,5.53-27.53,21.39-43.09,57.06-1.18,12.52-81.84,23.39-117,19.56-11.32,75.58-16.64,70.42-49.95-12.8-12.76-34.33-9.42-50.32-1.82-17.53,10.17-21,30-26.25,46.53C194.24,250.65,137.71,38.72.2,0A5.85,5.85,0,0,1,0,1.08,7.75,7.75,0,0,1,1,3.5C126.77,43.48,197.39,251.57,357.07,210.45Zm60.63-50.89c29.48,15.29-42,45.25-56.73,43.94C359.89,173.51,391.91,151.81,417.7,159.56ZM82.88,367.69C-23.38,216.36,116,149.22,144,236.08,151.49,289.55,104.68,324.59,82.88,367.69Zm195.58,47.07c-18.88-1.24-44.29-12.93-57.46-27.53C240.72,390.08,293.86,379.52,278.46,414.76ZM312,367.69c-28.29,4.18-59.57,5.36-88.25,1.94,26.83-1.75,52.77-24.75,76.66-10.8C312,353.35,328.63,353.81,312,367.69Zm19.87-46.36c-4.51.11-7.84-4.53-10.15-7.66-5.6-2.65-11.49-2.7-16.51-6.77C275,268.08,341,284,331.88,321.33Z"
      />
    </svg>
  );
}

export function LogoWhite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 432.11 789.57"
      width="350"
    >
      <path
        className="logo logo--white"
        d="M357.07,210.45c-5.74,33.56,11.46,68.39,2,100.58a12.36,12.36,0,0,1-6.86,8.25c-28.21,16.69-2.08-47-52.22-39.1-31,12,13.37,41.2,29.08,46.93,6.15,11.23-21.85,34.53-34,23.76-13.64-9.26-29,6.72-43.57,7.65-13,5.8-32.11,3.91-42.49,12.22,28.1,10.67,64.87.07,95.52,4-9.39,12.74-.25,35.94-19.78,41,5.32-18-6.66-36-31.25-30.94-11.78,1.66-32.26-6.35-39.88-.14,12.87,19.72,39.68,28.75,61.77,34.65,3.89,31.84-32.84,52.76-64.08,44.92C158.68,453,116.08,415.25,86,371.67c9.65-22.66,26.82-40.09,40.71-60,98.34-179.08-193.51-149.06-46.41,60C-23.24,716.36,597.15,312.71,350.72,785.08c-3,25.76,31.86-67.43,38.38-78.46,134-351.08-394.79-29-309.83-320.56,6.06-22.52,25.34,22.49,37.26,29.56C153.26,449.68,233.11,499.9,272,447.67a8.87,8.87,0,0,1,.54-1.22c5.23-15.35,8.62-25.7,22.59-32.74a8.4,8.4,0,0,1,2-1.21,8.6,8.6,0,0,1,1.29-1.1,9.2,9.2,0,0,1,.76-1.12c7.52-13.13,1.88-31.83,17.33-39.93,11.92-6.55,5.53-27.53,21.39-43.09,57.06-1.18,12.52-81.84,23.39-117,19.56-11.32,75.58-16.64,70.42-49.95-12.8-12.76-34.33-9.42-50.32-1.82-17.53,10.17-21,30-26.25,46.53C194.24,250.65,137.71,38.72.2,0A5.85,5.85,0,0,1,0,1.08,7.75,7.75,0,0,1,1,3.5C126.77,43.48,197.39,251.57,357.07,210.45Zm60.63-50.89c29.48,15.29-42,45.25-56.73,43.94C359.89,173.51,391.91,151.81,417.7,159.56ZM82.88,367.69C-23.38,216.36,116,149.22,144,236.08,151.49,289.55,104.68,324.59,82.88,367.69Zm195.58,47.07c-18.88-1.24-44.29-12.93-57.46-27.53C240.72,390.08,293.86,379.52,278.46,414.76ZM312,367.69c-28.29,4.18-59.57,5.36-88.25,1.94,26.83-1.75,52.77-24.75,76.66-10.8C312,353.35,328.63,353.81,312,367.69Zm19.87-46.36c-4.51.11-7.84-4.53-10.15-7.66-5.6-2.65-11.49-2.7-16.51-6.77C275,268.08,341,284,331.88,321.33Z"
      />
    </svg>
  );
}
