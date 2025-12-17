import Link from "next/link"
import Image from "next/image"
import { withBasePath } from "@/lib/utils"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={withBasePath("/logo.png")} alt="Miswag" width={150} height={40} className="h-10 w-auto" priority />
        </Link>

        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/articles" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Articles
          </Link>
          <Link href="/team" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Team
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
