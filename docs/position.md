`src/app/layout.tsx`

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Players Liga",
  description: "Top scorer among your friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[300px]`}>{children}</body>
    </html>
  );
}
```

`src/app/example/layout.tsx`

```typescript
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Players Liga",
  description: "Top scorer among your friends",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="h-[1600px]">{children}</main>;
}
```

`src/app/example/page.tsx`

```typescript
export default function ExamplePage() {
  return (
    <>
      <div className="h-24 border border-[#222] bg-[#CCC] p-2.5">Div 1</div>
      <div className="h-24 border border-[#222] bg-[#CCC] p-2.5">Div 2</div>
      <div className="relative left-5 top-5 h-24 border border-[#222] bg-[#321] p-2.5 text-white">
        Relative 1
      </div>
      <div className="sticky top-4 z-50 h-12 w-32 border border-[#222] bg-yellow-600 p-2.5">
        Stcky 1
      </div>
      <div className="h-24 border border-[#222] bg-[#CCC] p-2.5">Div 3</div>
      <p>Meu parágafo</p>
      <div className="h-24 border border-[#222] bg-[#CCC] p-2.5">Div 4</div>
      <div className="relative h-24 border border-[#222] bg-[#321] p-2.5 text-white">
        Relative 2
        <div className="absolute right-5 top-5 h-12 w-32 border border-[#222] bg-red-500 p-2.5">
          Absolute 2
        </div>
      </div>
      <div className="absolute right-5 top-5 h-12 w-32 border border-[#222] bg-red-500 p-2.5">
        Absolute 1
      </div>
      <div className="sticky left-44 top-4  z-50 h-12 w-32 border border-[#222] bg-yellow-600 p-2.5">
        Stcky 2
      </div>
      <div className="fixed left-16 top-4 h-12 w-32 border border-[#222] bg-red-500 p-2.5">
        Fixed
      </div>
    </>
  );
}

```
