const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto h-full w-full max-w-screen-xl">{children}</div>
    </main>
  );
};

export default LandingLayout;
