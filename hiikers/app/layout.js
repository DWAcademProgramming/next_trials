import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'Hiikers',
  description: 'Amazing hikes, shared by fellow nature lovers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
