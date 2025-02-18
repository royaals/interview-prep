"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
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

  const questionTypes = ["Question Type 1", "Question Type 2", "Question Type 3"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/uniboard/applications/interview-prep/interview")
    onOpenChange(false)
  }

  const inputStyles = "border border-[#0000004D] focus-visible:ring-[#346DE0] focus-visible:ring-1 focus-visible:border-[#0000004D]"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-6">
        <div className="relative mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onOpenChange(false)}
            className="absolute right-0 h-6 w-6 p-0 hover:bg-transparent"
          >
           
          </Button>
          <h2 className="text-[#346DE0] text-[17px] font-semibold text-center">
            Interview Prep
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-[#6B7280]">Role</label>
                <Input 
                  required 
                  className={`h-10 ${inputStyles}`}
                  style={{ outline: '1px solid #0000004D' }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-[#6B7280]">Company</label>
                <Input 
                  required 
                  className={`h-10 ${inputStyles}`}
                  style={{ outline: '1px solid #0000004D' }}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-[#6B7280]">Job Description</label>
              <Textarea 
                required 
                className={`min-h-[120px] ${inputStyles}`}
                style={{ outline: '1px solid #0000004D' }}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-[#6B7280]">Round</label>
              <div className="flex gap-2">
                {questionTypes.map((type) => (
                  <Button
                    key={type}
                    type="button"
                    variant={selectedType === type ? "default" : "outline"}
                    className={`
                      flex-1 h-9 text-sm
                      ${selectedType === type 
                        ? "bg-[#346DE0] hover:bg-[#346DE0]/90 text-white" 
                        : "bg-white text-[#6B7280] border-[#E5E7EB] hover:bg-gray-50"
                      }
                    `}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-10 bg-[#346DE0] hover:bg-[#346DE0]/90 text-sm"
          >
            Start Interview
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}