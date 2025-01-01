import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center flex-col space-y-6"> 
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Welcome to saihu
        </h1>
        <div className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          saihu is an experimental PLM project.
        </div>
        <div className="space-x-3">
          <Button size="lg">
            <Link href="/sign-up">
              Get Started
            </Link>
          </Button>
          <Button size="lg" variant="outline">
            <Link href="#">
              Learn more
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
