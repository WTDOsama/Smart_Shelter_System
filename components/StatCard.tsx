"use client";
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color?: string;
  bg?: string;
}

export default function StatCard({ title, value, icon: Icon, color = "text-gold", bg = "bg-gold/10" }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className={`w-12 h-12 ${bg} ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon size={24} />
      </div>
      <h3 className="text-sm text-gray-500 font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-navy">{value}</p>
    </div>
  );
}
