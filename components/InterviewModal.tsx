"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface NewInterviewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NewInterviewModal({ open, onOpenChange }: NewInterviewModalProps) {
  const router = useRouter()
  const [selectedType, setSelectedType] = useState("Question Type 1")

  const questionTypes = ["Question Type 1", "Question Type 1", "Question Type 1"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/uniboard/applications/interview-prep/interview")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">Interview Prep</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-[#808080]">Role</label>
                <Input required />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-[#808080]">Company</label>
                <Input required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#808080]">Job Description</label>
              <Textarea required className="min-h-[120px]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#808080]">Round</label>
              <div className="flex gap-2">
                {questionTypes.map((type) => (
                  <Button
                    key={type}
                    type="button"
                    variant={selectedType === type ? "default" : "outline"}
                    className={`flex-1 ${selectedType === type ? "bg-[#346de0]" : ""}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#346de0] hover:bg-[#346de0]/90">
            Start Interview
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

