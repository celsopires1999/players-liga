import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/frontend/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import ProfileButton from "./ProfileButton";
import { Button } from "./ui/button";

const Header = () => {
  const routes = [
    {
      href: "/",
      label: "Option 1",
    },
    {
      href: "/",
      label: "Option 2",
    },
    {
      href: "/",
      label: "Option 3",
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-inherit sm:flex sm:justify-between">
      {/* <div className="flex h-16 w-full items-center justify-between px-4 lg:px-8"> */}
      <div className="flex h-16 w-full items-center justify-between px-4">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6 md:hidden" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {routes.map((route, i) => (
                  <Link
                    key={i}
                    href={route.href}
                    className="block px-2 py-1 text-lg"
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-4 md:ml-0">
            <h1 className="text-xl font-bold">PLAYERS LIGA</h1>
          </Link>
        </div>
        <nav className="mb:flex mx-6 hidden items-center space-x-4 md:block lg:space-x-6">
          {routes.map((route, i) => (
            <Button key={i} asChild variant="ghost">
              <Link
                href={route.href}
                className="text-sm font-medium transition-colors"
              >
                {route.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center">
          <ModeToggle />
          <ProfileButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
