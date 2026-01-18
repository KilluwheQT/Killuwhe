'use client';

export default function Logo({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      
      {/* Background with rounded corners */}
      <rect x="2" y="2" width="36" height="36" rx="10" fill="url(#logoGradient)" />
      
      {/* Left bracket < */}
      <path
        d="M14 12L8 20L14 28"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Right bracket > */}
      <path
        d="M26 12L32 20L26 28"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Forward slash / in center */}
      <path
        d="M22 10L18 30"
        stroke="url(#glowGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Cursor blink accent */}
      <rect x="34" y="4" width="3" height="8" rx="1" fill="#38bdf8" opacity="0.9" />
    </svg>
  );
}
