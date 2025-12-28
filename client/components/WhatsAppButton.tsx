import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  variant = "primary",
  size = "md",
  className = "",
  phoneNumber = "+923115555555",
  message = "Hello! I'm interested in your security services.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    message
  )}`;

  const sizeClasses = {
    sm: "px-4 sm:px-5 py-2 text-xs sm:text-xs",
    md: "px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base",
    lg: "px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-sm md:text-base lg:text-lg",
  };

  const variantClasses = {
    primary:
      "bg-[#25D366] text-white hover:bg-[#1fa357] shadow-lg hover:shadow-2xl hover:scale-105",
    outline:
      "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-105",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 font-black font-bold transition-all duration-300 rounded-lg ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
      <span>Contact Via WhatsApp</span>
    </a>
  );
}
