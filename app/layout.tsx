import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

/*
export const metadata = {
  title: "Home | Next Movies",
  description: "The best movies on the best frameworks",
};
*/

// meta data 템플릿 만듦
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: "The best movies on the best frameworks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
