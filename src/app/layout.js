import "./globals.css";

export const metadata = {
  title: "Restaurant",
  description: "Projeto DevMedia React",
  keywords: "Restaurant, Restaurante, cardapio, react, projeto, DevMedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
