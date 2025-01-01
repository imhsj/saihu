const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="flex flex-col justify-center items-center h-full bg-white">
      {children}
    </main> 
  );
};

export default MarketingLayout;