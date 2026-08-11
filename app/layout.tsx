import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammad-ahmed-eight.vercel.app'),

  title: {
    default: 'Muhammad Ahmed | Software Quality Assurance Engineer',
    template: '%s | Muhammad Ahmed',
  },

  description:
    'Muhammad Ahmed is a Software Quality Assurance Engineer specializing in manual testing, functional testing, regression testing, Jira, SQL, API testing, defect management and Agile QA.',

  keywords: [
    'Muhammad Ahmed',
    'Software Quality Assurance Engineer',
    'SQA Engineer',
    'QA Engineer',
    'Manual Tester',
    'Software Tester',
    'Manual Testing',
    'Functional Testing',
    'Regression Testing',
    'Smoke Testing',
    'Sanity Testing',
    'UI Testing',
    'API Testing',
    'Database Testing',
    'SQL',
    'Jira',
    'Agile QA',
    'Scrum',
    'Defect Management',
    'Test Case Design',
    'Test Execution',
    'RBAC Testing',
  ],

  authors: [{ name: 'Muhammad Ahmed' }],

  creator: 'Muhammad Ahmed',

  openGraph: {
    title: 'Muhammad Ahmed | Software Quality Assurance Engineer',
    description:
      'QA portfolio showcasing manual testing, defect management, Jira, SQL, Agile/Scrum and software quality assurance experience.',
    url: 'https://muhammad-ahmed-eight.vercel.app',
    siteName: 'Muhammad Ahmed — QA Portfolio',
    locale: 'en_US',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}