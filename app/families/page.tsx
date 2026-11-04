// Family Management Page - Inspired by Reference Screenshot 2
"use client";

import React, { useState } from 'react';
import { 
  Users, Search, Plus, Edit, Trash2, Download, 
  Printer, Upload, QrCode, MessageSquare, ChevronDown,
  ShieldCheck, Clock, AlertCircle, Filter, X
} from 'lucide-react';

const familyData = [
  {
    id: "FAM-001",
    head: "أحمد محمد علي",
    nationalId: "1234567890",
    dob: "1985-05-12",
    age: 39,
    gender: "ذكر",
    size: 6,
    region: "الشمال",
    sector: "أ",
    shelter: "مركز الإيواء رقم 5",
    regDate: "2026-09-15",
    residence: "مقيم",
    verification: "مُدقّق",
    aid: "مؤهل",
    status: "active"
  },
  {
    id: "FAM-002",
    head: "فاطمة حسن محمود",
    nationalId: "9876543210",
    dob: "1990-11-20",
    age: 33,
    gender: "أنثى",
    size: 4,
    region: "الجنوب",
    sector: "ب",
    shelter: "مخيم الأمل",
    regDate: "2026-10-02",
    residence: "مقيم",
    verification: "قيد التدقيق",
    aid: "غير مؤهل",
    status: "pending"
  },
  {
    id: "FAM-003",
    head: "خالد إبراهيم",
    nationalId: "1122334455",
    dob: "1978-03-30",
    age: 48,
    gender: "ذكر",
    size: 8,
    region: "الوسط",
    sector: "ج",
    shelter: "مركز الإيواء رقم 2",
    regDate: "2026-08-20",
    residence: "مغادر",
    verification: "مُدقّق",
    aid: "مؤهل",
    status: "departed"
  }
];

const statusColors = {
  active: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  departed: "bg-gray-100 text-gray-700",
  rejected: "bg-red-100 text-red-700"
};

const verificationColors = {
  "مُدقّق": "bg-green-500/10 text-green-700",
  "قيد التدقيق": "bg-yellow-500/10 text-yellow-700",
  "مرفوض": "bg-red-500/10 text-red-700"
};

export default function FamilyManagement() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="flex flex-col h-screen bg-lightGrayBlue font-arabic">
      {/* Header */}
      <header className="bg-white p-6 border-b border-gray-200 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-navy flex items-center">
            <Users className="mr-3 text-royal" size={28} />
            العائلات
          </h1>
          <p className="text-sm text-gray-500 mt-1">إجمالي العائلات المسجلة: 1,240</p>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-bold">
            <Printer size={16} className="mr-2" /> طباعة
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-bold">
            <Download size={16} className="mr-2" /> تصدير
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-bold">
            <Upload size={16} className="mr-2" /> استيراد
          </button>
          <button className="flex items-center px-4 py-2 bg-royal text-white rounded-lg hover:bg-navy transition-colors text-sm font-bold">
            <Plus size={16} className="mr-2" /> إضافة عائلة
          </button>
        </div>
      </header>

      {/* Filters Panel */}
      <div className="bg-white p-4 border-b border-gray-100 flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="البحث باسم رب الأسرة أو الرقم الوطني..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal/50"
          />
        </div>
        <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50">
          <Filter size={16} className="mr-2" /> الفلاتر المتقدمة
        </button>
        <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50">
          <X size={16} className="mr-2" /> مسح
        </button>
      </div>

      {/* Data Table */}
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-4 border-b border-navy/20 text-sm font-bold">الإجراءات</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">حالة التحقق</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">حالة الإقامة</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">الأهلية</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">تاريخ التسجيل</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">المخيم/المركز</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">القطاع/المنطقة</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">حجم الأسرة</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">الجنس</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">العمر</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">تاريخ الميلاد</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">الرقم الوطني</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">رب الأسرة</th>
                <th className="p-4 border-b border-navy/20 text-sm font-bold">اختيار</th>
              </tr>
            </thead>
            <tbody>
              {familyData.map((family) => (
                <tr key={family.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 flex space-x-2">
                    <button className="p-1.5 bg-royal/10 text-royal rounded hover:bg-royal/20 transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-1.5 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors">
                      <Trash2 size={16} />
                    </button>
                    <button className="p-1.5 bg-gold/10 text-gold rounded hover:bg-gold/20 transition-colors">
                      <QrCode size={16} />
                    </button>
                    <button className="p-1.5 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors">
                      <MessageSquare size={16} />
                    </button>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${verificationColors[family.verification]}`}>
                      {family.verification}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[family.status]}`}>
                      {family.residence}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium text-gray-600">{family.aid}</td>
                  <td className="p-4 text-sm text-gray-500">{family.regDate}</td>
                  <td className="p-4 text-sm font-medium text-navy">{family.shelter}</td>
                  <td className="p-4 text-sm text-gray-600">{family.region} / {family.sector}</td>
                  <td className="p-4 text-sm font-bold text-navy">{family.size}</td>
                  <td className="p-4 text-sm text-gray-600">{family.gender}</td>
                  <td className="p-4 text-sm font-bold text-navy">{family.age}</td>
                  <td className="p-4 text-sm text-gray-500">{family.dob}</td>
                  <td className="p-4 text-sm font-medium text-navy">{family.nationalId}</td>
                  <td className="p-4 text-sm font-bold text-navy">{family.head}</td>
                  <td className="p-4">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 accent-royal" 
                      onChange={(e) => {
                        setSelected(prev => e.target.checked ? [...prev, family.id] : prev.filter(id => id !== family.id))
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50">
            <div className="text-sm text-gray-500">عرض 1-50 من 1,240 سجل</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100 text-sm">السابق</button>
              <button className="px-3 py-1 border border-royal bg-royal text-white rounded hover:bg-navy text-sm">1</button>
              <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100 text-sm">2</button>
              <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100 text-sm">التالي</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
