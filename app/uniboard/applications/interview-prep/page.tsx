"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"

import { ChatInput } from "@/components/ChatInput"

export default function InterviewPrepPage() {
  const [showModal, setShowModal] = useState(false)

  const interviews = [
    { title: "Data Manager", company: "Google" },
    { title: "Data Analyst", company: "Google" },
  ]

  return (
    <div className="min-h-screen pb-24">
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-[#373737] mb-6">Interview Prep</h1>

        <div className="grid gap-6">
          {/* New Interview Card */}
          <Card
            className="bg-[#EEF2FF] border-dashed border-2 border-[#346DE0]/20 p-6 cursor-pointer hover:bg-[#EEF2FF]/80 transition-colors"
            onClick={() => setShowModal(true)}
          >
            <button className="w-full flex items-center justify-center gap-2 text-[#346DE0]">
              <Plus className="h-5 w-5" />
              <span className="font-medium">Start new Interview</span>
            </button>
          </Card>

          {/* Interview Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {interviews.map((interview) => (
              <Card key={interview.title} className="p-6 flex items-center justify-between bg-white">
                <div>
                  <h3 className="font-medium text-[#373737]">{interview.title}</h3>
                  <p className="text-sm text-[#808080]">{interview.company}</p>
                </div>
                <Button className="bg-[#346DE0] hover:bg-[#346DE0]/90">Retake</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <ChatInput />
   
    </div>
  )
}

