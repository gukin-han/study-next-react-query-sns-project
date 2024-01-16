export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      home layout
      {children}
    </div>
  );
}
