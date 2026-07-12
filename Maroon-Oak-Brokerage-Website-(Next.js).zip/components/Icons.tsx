// Lightweight inline SVG icon set.
// Every icon inherits its color through currentColor and can be styled
// with Tailwind classes such as text-gold, stroke-white, or text-maroon.

export type IconProps = {
  className?: string;
};

const base =
  "fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round]";

function iconClass(className: string) {
  return `${base} ${className}`;
}

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export function PinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function HomeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

export function BuildingIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 21v-4h6v4" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    </svg>
  );
}

export function StoreIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M4 10v10h16V10" />
      <path d="M3 4h18l-2 6H5L3 4Z" />
      <path d="M8 20v-6h5v6" />
      <path d="M5 10a2 2 0 0 0 4 0M9 10a2 2 0 0 0 4 0M13 10a2 2 0 0 0 4 0M17 10a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function CarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M5 16v-4l2-4h10l2 4v4" />
      <path d="M3 16h18" />
      <path d="M7 12h10" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export function TruckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M3 6h11v11H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M14 13h6" />
    </svg>
  );
}

export function FamilyIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
      <path d="M17 13a4 4 0 0 1 4 4v1" />
    </svg>
  );
}

export function UmbrellaIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 1 10 10H2A10 10 0 0 1 12 2Z" />
      <path d="M12 12v8a2 2 0 0 1-4 0" />
      <path d="M12 2v2" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function WorkersIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );
}

export function HardHatIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M2 15h20v4H2z" />
      <path d="M9 7v5M15 7v5" />
    </svg>
  );
}

export function CyberIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1.5" />
    </svg>
  );
}

export function MonitorIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="m9 10 2 2 4-4" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  );
}

export function HandshakeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="m8 12 3 3a2 2 0 0 0 3 0l5-5" />
      <path d="m2 12 4-4 4 2 4-2 8 8" />
      <path d="m6 16 2 2M9 18l2 2M14 18l2-2" />
    </svg>
  );
}

export function AlertIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M10.29 3.86 1.82 18A2 2 0 0 0 3.53 21h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A5 5 0 0 1 16 8Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20" />
    </svg>
  );
}

export function DocumentIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
      <path d="M14 2v6h6M8 13h8M8 17h8" />
    </svg>
  );
}

export function CertificateIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="14" rx="2" />
      <path d="M8 7h8M8 11h5" />
      <circle cx="16" cy="15" r="3" />
      <path d="m14.5 17.5-1 4 2.5-1.5 2.5 1.5-1-4" />
    </svg>
  );
}

export function BoatIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="m2 16 2 5h16l2-5-9-2-11 2Z" />
      <path d="M6 16V9h9l3 7M11 9V3h2l3 3" />
    </svg>
  );
}

export function ToolboxIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="2" y="8" width="20" height="12" rx="2" />
      <path d="M8 8V5h8v3M2 13h20M10 13v3h4v-3" />
    </svg>
  );
}

export function CraneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M5 22V3M2 3h15M9 3v4M15 3l4 4" />
      <path d="M17 7v6" />
      <path d="M14 13h6v4h-6z" />
      <path d="M2 22h7" />
    </svg>
  );
}

export function FactoryIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M3 21V10l6 3V9l6 4V6h4v15Z" />
      <path d="M7 17h2M12 17h2M17 17h2" />
      <path d="M18 6V3" />
    </svg>
  );
}

export function WrenchIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4l-3 3-3-3 3-3Z" />
    </svg>
  );
}

export function LockIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PlayIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m10 8.5 6 3.5-6 3.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CompassIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function HeartHandIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <path d="M12.5 8.8c-1-1.6-3.3-2-4.6-.7-1.4 1.4-1.3 3.5.2 5l3.9 3.9c.3.3.7.3 1 0l3.9-3.9c1.5-1.5 1.6-3.6.2-5-1.3-1.3-3.6-.9-4.6.7Z" />
      <path d="M3 19c1.5-1 3-1 4 0l1.5 1c1 .7 2.3.7 3.2-.1l6-5.4" />
      <path d="m15.5 15.5 3-2.7c.8-.7 2-.7 2.7.1.6.7.5 1.8-.3 2.4l-5 4.2c-1 .8-2.3 1.2-3.6 1.2H3" />
    </svg>
  );
}

export function GoogleIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2}
      className={iconClass(className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}
