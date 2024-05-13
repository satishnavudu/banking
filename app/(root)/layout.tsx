import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user={firstName:"Satish", lastName:"Nav"}
  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar user={user}/>
    {children}
   </main>
  );
}
