// src/components/SkeletonCard.jsx
import React from "react";

export default function SkeletonCard() {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white animate-pulse space-y-3">
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}
