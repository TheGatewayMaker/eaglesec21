export default function CompanyWiseDeployments() {
  const allData = [
    { company: "National Bank", guards: "1,300" },
    { company: "Descon A. Hakim", guards: "94" },
    { company: "Rousch P.P", guards: "80" },
    { company: "Imtiaz Stores", guards: "25" },
    { company: "Allied Schools", guards: "10" },
    { company: "Summit Cardboards", guards: "5" },
    { company: "ARY News", guards: "7" },
    { company: "Shifa International", guards: "10" },
    { company: "Daud Hercules", guards: "10" },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-0 sm:px-6 w-full">
        {/* Section Title with Visual Styling */}
        <div className="mb-6 sm:mb-8 md:mb-10 px-4 sm:px-0">
          <div className="flex items-center gap-3 md:gap-4 mb-3 sm:mb-4">
            <div className="w-1 md:w-1.5 h-10 md:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
              Company Wise Deployments
            </h2>
          </div>
          <p className="text-sm md:text-base font-bold text-muted-foreground ml-0 max-w-3xl leading-relaxed">
            Our security personnel deployed across major organizations
          </p>
        </div>

        {/* Professional Table Layout */}
        <div className="bg-card border border-border overflow-hidden mx-4 sm:mx-0">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 bg-pk-green-main text-white px-6 md:px-8 py-4 md:py-5 font-black">
            <div className="text-base md:text-lg">Organization</div>
            <div className="col-span-2"></div>
          </div>

          {/* Data Rows */}
          <div className="divide-y divide-border">
            {allData.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-4 px-6 md:px-8 py-3 md:py-4 hover:bg-accent/3 transition-colors duration-200 items-center"
              >
                <span className="text-sm md:text-base font-bold text-foreground">
                  {item.company}
                </span>
                <div></div>
                <span className="text-sm md:text-base font-black text-accent text-right">
                  {item.guards}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
