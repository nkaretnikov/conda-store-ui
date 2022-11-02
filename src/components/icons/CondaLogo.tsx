import * as React from "react";
import { config } from "../../common/constants";

export const CondaLogo = (props: React.SVGProps<SVGSVGElement>) => {
  const isGrayscaleStyleType = config.styleType === "grayscale";
  const colorTheme = {
    gray: ["#CCCFD2", "#E4E4E5"],
    green: ["#33A852", "#B9D9BD"]
  };

  return (
    <svg
      width={233}
      height={266}
      viewBox="0 0 233 266"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M104.02 145.337c-29.376-16.22-58.646-32.615-87.987-48.905-9.366-5.2-15.938-1.338-15.95 9.33-.035 16.783-.011 33.566-.011 50.36 0 16.783.117 33.578-.07 50.361-.06 5.727 1.947 9.424 7.205 12.064 29.693 14.929 59.257 30.116 88.89 45.162 8.122 4.119 14.648.035 14.648-9.166.035-32.627-.071-65.242.094-97.869.035-5.469-2.16-8.767-6.819-11.337z"
        fill={isGrayscaleStyleType ? colorTheme.gray[0] : colorTheme.green[0]}
        fillOpacity={0.4}
      />
      <path
        d="M128.877 145.337c29.376-16.22 58.646-32.615 87.987-48.905 9.365-5.2 15.937-1.338 15.949 9.33.035 16.783.012 33.566.012 50.36 0 16.783-.117 33.578.07 50.361.059 5.727-1.948 9.424-7.206 12.064-29.692 14.929-59.256 30.116-88.89 45.162-8.122 4.119-14.647.035-14.647-9.166-.035-32.627.07-65.242-.094-97.869-.035-5.469 2.16-8.767 6.819-11.337zM174.25 15.487h-18.203v10.035h18.203s-3.134-3.556-3.333-4.695c-.2-1.138 3.333-5.34 3.333-5.34z"
        fill={isGrayscaleStyleType ? colorTheme.gray[1] : colorTheme.green[1]}
        fillOpacity={0.4}
      />
      <path
        d="M153.312 58.289c-1.526-1.96-4.178-4.002-7.957-6.103-3.779-2.1-7.054-3.709-9.812-4.8-2.769-1.092-7.053-2.723-12.863-4.906-5.668-2.183-9.776-4.107-12.323-5.774-2.546-1.667-3.814-3.52-3.814-5.563 0-2.617 1.091-4.612 3.274-5.997 2.089-1.326 4.39-1.995 6.89-2.054v-.082c10.374.692 22.557 1.901 32.626 2.5 1.808.105 2.183-.376 2.078-2.066-.751-12.37-10.129-20.515-22.346-22.534a50.123 50.123 0 00-3.462-.422c-7.429-.939-12.406-.282-14.096-.012-8.438.892-15.62 3.732-21.547 8.532-7.277 5.892-10.903 13.556-10.903 23.003 0 9.307 2.875 16.537 8.614 21.7 5.74 5.165 13.767 9.484 24.095 12.981 7.417 2.324 12.499 4.296 15.269 5.892 2.758 1.596 4.142 3.568 4.142 5.891 0 2.618-1.161 4.73-3.497 6.326-2.324 1.596-5.528 2.394-9.6 2.394a41.42 41.42 0 01-5.141-.328c-11.29-.822-19.834-2.054-31.124-2.934-1.55-.118-1.948.234-1.925 1.76.188 11.913 9.26 21.196 21.102 22.827 2.171.294 7.699 1.385 12.358 1.432 1.491.094 2.993.141 4.518.141 13.521 0 23.802-3.052 30.855-9.154 7.054-6.103 10.575-14.096 10.575-23.99 0-4.06-.623-7.698-1.855-10.902-1.22-3.216-2.605-5.798-4.131-7.758zM131.494 7.647c2.653.13 4.589 2.242 4.472 4.87-.118 2.641-2.254 4.578-4.894 4.46-2.606-.117-4.624-2.3-4.519-4.882.118-2.57 2.336-4.565 4.941-4.448z"
        fill={isGrayscaleStyleType ? colorTheme.gray[0] : colorTheme.green[0]}
        fillOpacity={0.4}
      />
    </svg>
  );
};
