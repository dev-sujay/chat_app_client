import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-5xl font-bold text-center text-primary">
          Welcome to PDF Chat App
        </h1>
        <p className="mt-4 text-xl text-center text-gray-700">
          Upload your PDFs and chat with them.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/chat">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
