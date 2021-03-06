//
// Section component
//

// Imports
import React from "react";
import Divider from "../divider/divider";
import Paragraph from "../paragraph/paragraph";
import Link from "../link/link";

// Props
export interface SectionProps {
  title: string;
  text: string;
}

export interface SectionSocialProps {
  title: string;
  socials: Array<{ label: string; link: string }>;
}

// Section versions
export default function Section({ title, text }: SectionProps) {
  return (
    <div className="section">
      <Divider title={title} />
      <Paragraph text={text} />
    </div>
  );
}

export function SectionSocial({ title, socials }: SectionSocialProps) {
  return (
    <div className="section">
      <Divider title={title} />
      {socials.map((social) => (
        <Link label={social.label} link={social.link} />
      ))}
    </div>
  );
}
