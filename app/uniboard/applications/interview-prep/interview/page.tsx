"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChatInput } from "@/components/ChatInput"

export default function InterviewPage() {
  const [answer, setAnswer] = useState("")
  const router = useRouter()

  const handleNext = () => {
    router.push("/uniboard/applications/interview-prep/questions")
  }

  return (
    <div className="flex-1 min-h-screen bg-[#F5F5F5]">
      {/* Left-aligned header section */}
      <div className="px-8 pt-8">
        <Link
          href="/uniboard/applications/interview-prep"
          className="inline-flex items-center text-[#346DE0] mb-6 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <h1 className="text-2xl font-semibold text-[#373737] mb-16">Interview Prep</h1>
      </div>

      {/* Centered content section */}
      <div className="max-w-[800px] mx-auto px-8">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#EEF2FF] text-[#346DE0] text-sm rounded-full">Round</span>
          </div>

          <h2 className="text-2xl text-[#373737] text-center mb-8">Can you please tell me a bit about yourself?</h2>

          <div className="space-y-2">
            <label className="text-sm text-[#346DE0] font-medium">Your Answer</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full min-h-[240px] p-4 rounded-lg border border-[#E5E7EB] resize-none focus:ring-2 focus:ring-[#346DE0] focus:border-transparent bg-white"
              placeholder="Type your answer here..."
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" className="px-8 text-[#346DE0] border-[#346DE0] hover:bg-[#EEF2FF]">
              Skip
            </Button>
            <Button className="bg-[#346DE0] hover:bg-[#346DE0]/90 px-8" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="fixed bottom-20 left-[280px] right-0">
          <div className="max-w-[800px] mx-auto px-8">
            <div className="w-full h-1 bg-[#E5E7EB] rounded">
              <div className="w-1/5 h-full bg-[#346DE0] rounded" />
            </div>
          </div>
        </div>
      </div>
      <ChatInput />
    </div>
  )
}

