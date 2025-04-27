import type { Metadata } from "next";
import "./globals.css"; // 保留全局样式导入

export const metadata: Metadata = {
  title: "虫",
  description: "虫的模板",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
