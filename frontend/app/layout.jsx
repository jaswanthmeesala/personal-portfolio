import "./globals.css";

export const metadata = {
  title: "Jaswanth Meesala | Java Backend Developer",
  description:
    "Jaswanth Meesala builds Java and Spring Boot services for healthcare billing. Explore his experience, projects, and achievements.",
};

export const viewport = {
  themeColor: "#1b142a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
