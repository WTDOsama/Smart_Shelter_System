// Next.js App Router Layout
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'نظام إدارة المخيمات الرقمي - Smart Digital Shelter Management',
  description: 'نظام احترافي لإدارة مراكز الإيواء والأسر النازحة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-lightGrayBlue font-arabic antialiased">
        {children}
      </body>
    </html>
  );
}
