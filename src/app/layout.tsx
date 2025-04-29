import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Technouniverse",
  description: "Technouniverse is a leading IT company delivering innovative software development, cloud solutions, and technology consulting to businesses worldwide.",
  keywords: ["IT company", "Software Development", "Cloud Solutions", "Technology Consulting", "Technouniverse"],
  authors: [{ name: "Technouniverse Team", url: "https://technouniversenp.com" }],
  openGraph: {
    title: "Technouniverse",
    description: "Empowering businesses with cutting-edge technology services and solutions.",
    url: "https://technouniversenp.com",
    siteName: "Technouniverse",
    type: "website",
    images: [
      {
        url: "/1.png", // Path to your logo image
        width: 800,
        height: 800,
        alt: "Technouniverse Logo"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/2.png" />
      </head>
      <body
        className={`antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
