"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function ChatInput() {
  return (
    <div className="fixed bottom-0 left-[320px] right-0 border-t border-[#E5E7EB] bg-white">
      <div className="px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#346DE0] flex items-center justify-center flex-shrink-0">
            <Image
              src="/AIlogo.png"
              alt="AI Assistant"
              width={31}
              height={25}
              
            />
          </div>
          <Input
            placeholder="Type your message..."
            className="flex-1 border-[#E5E7EB] bg-white focus-visible:ring-[#346DE0]"
          />
          <Button size="icon" className="bg-[#346DE0] hover:bg-[#346DE0]/90 w-8 h-8 flex-shrink-0">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

