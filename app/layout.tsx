export const metadata = {
  title: "Seminar Registration",
  description: "ระบบลงทะเบียนสัมมนา",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
