import { Metadata } from "next";
import Layout from "../../layout/layout";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Gbook Ultima",
  description: "The ultimate archives for risk management.",
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: "device-width" },
  openGraph: {
    type: "website",
    title: "Gbook with prime",
    url: "https://www.primefaces.org/ultima-react",
    description: "The archives for risk management.",
    images: ["https://www.primefaces.org/static/social/ultima-react.png"],
    ttl: 604800,
  },
  icons: {
    icon: "/faviconG.ico",
  },
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <Layout>{children}</Layout>;

  // return <>                {children}           </>
}
