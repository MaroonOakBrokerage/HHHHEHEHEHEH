import PhotoCard from "./PhotoCard";
import { heroImages, industries } from "@/lib/data";

export default function IndustryCards() {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
      {industries.map((industry) => (
        <PhotoCard
          key={industry.label}
          label={industry.label}
          description={industry.description}
          href={industry.href}
          image={heroImages[industry.imageKey]}
        />
      ))}
    </div>
  );
}
