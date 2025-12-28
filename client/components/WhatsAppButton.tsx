interface WhatsAppButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  size = "md",
  className = "",
  phoneNumber = "+923115555555",
  message = "Hello! I'm interested in your security services.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    message,
  )}`;

  const sizeClasses = {
    sm: "px-4 sm:px-5 py-2 text-xs sm:text-xs",
    md: "px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base",
    lg: "px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-sm md:text-base lg:text-lg",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-accent text-accent-foreground inline-flex items-center gap-2 sm:gap-3 font-black transition-all duration-300 rounded-lg hover:shadow-xl hover:scale-105 ${sizeClasses[size]} ${className}`}
    >
      <img
        src="https://i.ibb.co/27tgGvMZ/whatsapp-phone-icon.png"
        alt="WhatsApp"
        className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0"
      />
      <span>Contact Via WhatsApp</span>
    </a>
  );
}
