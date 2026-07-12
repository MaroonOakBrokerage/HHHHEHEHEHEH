import PhotoCard from "./PhotoCard";
import { heroImages, lifeEvents } from "@/lib/data";

export default function LifeEventCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {lifeEvents.map((event) => (
        <PhotoCard
          key={event.label}
          label={event.label}
          description={event.description}
          href={event.href}
          image={heroImages[event.imageKey]}
        />
      ))}
    </div>
  );
}
