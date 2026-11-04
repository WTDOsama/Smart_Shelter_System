// Main Dashboard Shell - Arabic RTL
"use client";

import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Home, Shield, Bell, 
  Search, ChevronDown, Menu, X, Calendar, 
  FileText, Clipboard, Building2, User, 
  Truck, Box, AlertTriangle, MapPin, 
  Settings, LogOut, Plus, Edit, Trash2,
  Download, Printer, Upload, QrCode, MessageSquare
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Mock Data
const stats = [
  { title: "إجمالي العائلات المسجلة", value: "1,240", icon: Users, color: "text-gold", bg: "bg-gold/10" },
  { title: "إجمالي الأفراد المسجلين", value: "5,890", icon: User, color: "text-gold", bg: "bg-gold/10" },
  { title: "مراكز الإيواء النشطة", value: "18", icon: Building2, color: "text-royal", bg: "bg-royal/10" },
  { title: "العائلات المقيمة حالياً", value: "980", icon: Home, color: "text-navy", bg: "bg-navy/10" },
  { title: "العمليات الموزعة", value: "342", icon: Truck, color: "text-royal", bg: "bg-royal/10" },
  { title: "الشكاوى المفتوحة", value: "24", icon: AlertTriangle, color: "text-gold", bg: "bg-gold/10" },
];

const activityFeed = [
  { id: 1, title: "تسجيل عائلة جديدة - منطقة الشمال", time: "قبل ساعة", type: "success" },
  { id: 2, title: "شكوى جديدة: نقص المياه - مخيم الزعتري", time: "قبل ساعتين", type: "warning" },
  { id: 3, title: "توزيع مساعدات غذائية - القطاع أ", time: "قبل 4 ساعات", type: "info" },
  { id: 4, title: "تحديث بيانات الإيواء - مركز رقم 5", time: "أمس", type: "success" },
];

const chartData = [
  { name: "يناير", families: 400, individuals: 1800 },
  { name: "فبراير", families: 300, individuals: 1400 },
  { name: "مارس", families: 500, individuals: 2200 },
  { name: "أبريل", families: 450, individuals: 2000 },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-lightGrayBlue font-arabic overflow-hidden">
      {/* Right Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-navy text-white transition-all duration-300 flex flex-col z-50 shadow-xl`}>
        <div className="p-4 flex items-center justify-center border-b border-navy/20">
          {sidebarOpen && <span className="font-bold text-gold text-xl tracking-wider">نظام إدارة المخيمات الرقمي</span>}
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-bold">
            {sidebarOpen ? "S" : "S"}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-2">
          {[
            { label: "لوحة التحكم", icon: LayoutDashboard, active: true },
            { label: "العائلات", icon: Users },
            { label: "تسجيل العائلات", icon: Plus },
            { label: "تدقيق بيانات الأسر", icon: Shield },
            { label: "طلبات الانضمام", icon: Clipboard },
            { label: "مراكز الإيواء والمخيمات", icon: Building2 },
            { label: "الأفراد", icon: User },
            { label: "توزيع المساعدات", icon: Truck },
            { label: "مخزون المساعدات", icon: Box },
            { label: "إدارة الشكاوى", icon: AlertTriangle },
            { label: "الزيارات الميدانية", icon: MapPin },
            { label: "إدارات مراكز الإيواء", icon: Home },
            { label: "المناطق والقواطع", icon: MapPin },
            { label: "التقارير والإحصائيات", icon: FileText },
            { label: "إدارة المستخدمين", icon: User },
            { label: "الصلاحيات والأدوار", icon: Shield },
            { label: "سجل العمليات", icon: Clipboard },
            { label: "إعدادات النظام", icon: Settings },
          ].map((item, idx) => (
            <div 
              key={idx}
              className={`flex items-center p-3 mb-1 rounded-lg cursor-pointer transition-colors ${
                item.active ? 'bg-royal text-gold' : 'hover:bg-navy/30 text-gray-300'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-navy/20">
          <div className="flex items-center p-2 rounded-lg hover:bg-navy/30 cursor-pointer">
            <Settings size={20} className="mr-3 text-gray-300" />
            {sidebarOpen && <span className="text-sm">الإعدادات</span>}
          </div>
          <div className="flex items-center p-2 rounded-lg hover:bg-navy/30 cursor-pointer mt-1">
            <LogOut size={20} className="mr-3 text-gray-300" />
            {sidebarOpen && <span className="text-sm">تسجيل الخروج</span>}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Toolbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="البحث في النظام..." 
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-royal/50 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-navy text-white px-3 py-1.5 rounded-lg">
              <Calendar size={16} className="text-gold" />
              <span className="text-sm font-medium">الأربعاء، 4 نوفمبر 2026</span>
            </div>
            <div className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <Bell size={20} />
              <span className="absolute top-1 left-1 bg-gold text-navy text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">12</span>
            </div>
            <div className="flex items-center space-x-2 border-l border-gray-200 pl-4">
              <div className="w-8 h-8 bg-royal rounded-full flex items-center justify-center text-white font-bold">
                م
              </div>
              <div className="hidden md:block">
                <span className="block text-sm font-bold">مدير النظام</span>
                <span className="block text-xs text-gray-500">المنطقة المركزية</span>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Welcome Banner */}
          <div className="bg-navy text-white rounded-xl p-6 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">أهلاً بك في لوحة التحكم</h1>
              <p className="text-gray-300 mb-6">نظام إدارة المخيمات الرقمي - إدارة مراكز الإيواء والأسر النازحة</p>
              <div className="flex space-x-4">
                <button className="bg-gold text-navy px-6 py-2 rounded-lg font-bold hover:bg-gold/90 transition-colors">
                  عرض التقارير
                </button>
                <button className="bg-transparent border border-white/20 px-6 py-2 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  تحديث البيانات
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                  <stat.icon size={24} />
                </div>
                <h3 className="text-sm text-gray-500 font-medium mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-navy">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-navy mb-6 flex items-center">
                <LayoutDashboard size={20} className="mr-2 text-gold" />
                اتجاهات تسجيل العائلات والأفراد
              </h2>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ fontWeight: 'bold' }}
                    />
                    <Bar dataKey="families" fill="#D4AF37" radius={[4, 4, 0, 0]} name="العائلات" />
                    <Bar dataKey="individuals" fill="#1E3A8A" radius={[4, 4, 0, 0]} name="الأفراد" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-navy mb-6 flex items-center">
                <Bell size={20} className="mr-2 text-royal" />
                النشاط الأخير
              </h2>
              <div className="space-y-4">
                {activityFeed.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 border-r-4 border-royal p-3 rounded-l-lg bg-gray-50">
                    <div className="flex-1">
                      <p className="text-sm font-bold text-navy">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full mt-1 ${
                      item.type === 'success' ? 'bg-green-500' : 
                      item.type === 'warning' ? 'bg-gold' : 'bg-royal'
                    }`}></div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 text-sm font-bold text-royal hover:bg-royal/5 rounded-lg transition-colors">
                عرض كل الأنشطة
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
