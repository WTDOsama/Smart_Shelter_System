// Navigation Component for Mobile/Responsive
import Link from 'next/link';
import { LayoutDashboard, Users, Home, Shield, Bell, Search, ChevronDown, Menu, X, Calendar, FileText, Clipboard, Building2, User, Truck, Box, AlertTriangle, MapPin, Settings, LogOut, Plus, Edit, Trash2, Download, Printer, Upload, QrCode, MessageSquare } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center p-3 z-50 md:hidden">
      <Link href="/" className="flex flex-col items-center text-royal">
        <LayoutDashboard size={20} />
        <span className="text-[10px] mt-1">الرئيسية</span>
      </Link>
      <Link href="/families" className="flex flex-col items-center text-gray-500">
        <Users size={20} />
        <span className="text-[10px] mt-1">العائلات</span>
      </Link>
      <Link href="/shelters" className="flex flex-col items-center text-gray-500">
        <Building2 size={20} />
        <span className="text-[10px] mt-1">المخيمات</span>
      </Link>
      <Link href="/aid" className="flex flex-col items-center text-gray-500">
        <Truck size={20} />
        <span className="text-[10px] mt-1">المساعدات</span>
      </Link>
      <Link href="/settings" className="flex flex-col items-center text-gray-500">
        <Settings size={20} />
        <span className="text-[10px] mt-1">الإعدادات</span>
      </Link>
    </nav>
  );
}
