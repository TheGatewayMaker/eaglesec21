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
    <section className="py-12 sm:py-16 md:py-28 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-0 sm:px-6 w-full">
        {/* Section Title with Visual Styling */}
        <div className="mb-12 sm:mb-16 md:mb-24 px-4 sm:px-0">
          <div className="flex items-center gap-3 md:gap-4 mb-4 sm:mb-6">
            <div className="w-1 md:w-1.5 h-10 md:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
              Company Wise Deployments
            </h2>
          </div>
          <p className="text-sm md:text-base font-bold text-muted-foreground ml-0 max-w-3xl leading-relaxed">
            Our security personnel deployed across major organizations
            nationwide
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-0">
          {allData.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border border-border/50 p-8 md:p-10 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Background accent element */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-pk-green-main/3 rounded-full group-hover:bg-pk-green-main/8 transition-all duration-300 group-hover:scale-125"></div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xs md:text-sm font-black text-accent uppercase tracking-widest mb-3 md:mb-4">
                  Organization
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-6 md:mb-8 text-foreground">
                  {item.company}
                </h3>

                {/* Guard Count Display */}
                <div className="flex items-baseline gap-2 md:gap-3">
                  <span className="text-5xl md:text-6xl font-black text-accent">
                    {item.guards}
                  </span>
                  <span className="text-sm md:text-base font-black text-muted-foreground uppercase tracking-wide">
                    Guards Deployed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-12 md:mt-16 lg:mt-20 px-4 sm:px-0">
          <div className="bg-gradient-to-r from-pk-green-main/5 to-accent/5 border border-pk-green-main/20 rounded-lg p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-black text-accent uppercase tracking-widest mb-2">
                Total Deployment
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                1,541+ Guards
              </h3>
            </div>
            <p className="text-base md:text-lg font-bold text-muted-foreground max-w-md">
              Protecting Pakistan's leading organizations with professional
              security services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
