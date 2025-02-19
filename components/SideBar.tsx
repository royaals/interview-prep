import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronRight, MoreVertical } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Sidebar() {
  const menuItems = [
    { name: "Home", hasArrow: false },
    { name: "My Resume", hasArrow: false },
    { name: "LinkedIN Optimisation", hasArrow: true },
    { name: "Portfolio", hasArrow: false },
    { name: "Applications", hasArrow: true },
  ]

  return (
    <aside className="w-[320px] flex flex-col bg-white border-r border-[#E5E7EB]">
     
     <div className="relative h-[120px] bg-[#346DE0] overflow-hidden">
  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 320 40" fill="none" preserveAspectRatio="none">
    <path d="M0 0 Q160 40 320 0 V40 H0 Z" fill="white" />
  </svg>
  <div className="relative h-full flex items-center justify-center pb-6">
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Unimad Logo"
        width={24}
        height={24}
      />
      <span className="text-white text-2xl font-semibold">unimad</span>
    </div>
  </div>
</div>

      {/* Profile section */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-6 h-6">
            <AvatarImage src="/tanya.png" alt="Tanya Fernandez" />
           
          </Avatar>
          <span className="text-[#346DE0] text-[17px] font-semibold">Tanya Fernandez</span>
        </div>
        <Button variant="ghost" size="icon" className="text-[#808080]  h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="px-2 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href="/"
                className={`flex items-center justify-between px-4 py-2 rounded-lg text-m ${
                  item.name === "Applications" ? "text-[#346DE0] bg-[#EEF2FF]" : "text-[#808080] hover:bg-gray-50"
                }`}
              >
                <span>{item.name}</span>
                {item.hasArrow && <ChevronRight className="h-4 w-4" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

