"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function InterviewPage() {
  const [answer, setAnswer] = useState("")
  const router = useRouter()

  const handleNext = () => {
    router.push("/uniboard/applications/interview-prep/questions")
  }

  return (
    <div className="flex-1 min-h-screen bg-[#F5F5F5]">
     
      <div className="px-8 pt-8">
        <Link
          href="/uniboard/applications/interview-prep"
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF2FF] text-[#346DE0] text-sm rounded-md hover:bg-[#EEF2FF]/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <h1 className="text-[17px] font-semibold text-[#346DE0] mt-8">Interview Prep</h1>
      </div>

      
      <div className="max-w-[800px] mx-auto px-8 mt-16">
        <div className="space-y-6">
          <div className="flex justify-center">
            <span className="px-3 py-1 bg-[#346DE033] text-[#346DE0] text-sm rounded-md">
              Round
            </span>
          </div>

          <h2 
            className="text-center mt-8 mb-20"  
            style={{
              fontFamily: 'Inter',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '29.05px',
              letterSpacing: '0%',
              color: '#808080'
            }}
          >
            Can you please tell me a bit about yourself?
          </h2>

          <div className="mt-20">
            <div className="bg-white rounded-lg border border-[#0000004D]">
              
              <div 
                className="w-full py-2 px-4 text-[#346DE0] text-sm font-medium"
                style={{
                  background: '#EEF2FF',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px'
                }}
              >
                Your Answer
              </div>
              
              
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full min-h-[160px] p-4 text-[#373737] resize-none focus:outline-none"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam quisque id. Aenean euismod elementum nisi quis eleifend quam. 
"
                style={{
                  border: 'none',
                  background: 'transparent'
                }}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button 
              variant="outline" 
              className="h-9 px-6 text-sm text-[#346DE0] border-[#346DE0] hover:bg-[#EEF2FF] font-medium"
            >
              Skip
            </Button>
            <Button 
              onClick={handleNext}
              className="h-9 px-6 text-sm bg-[#346DE0] hover:bg-[#346DE0]/90 font-medium"
            >
              Next
            </Button>
          </div>
        </div>

        
        <div className="fixed bottom-24 left-[320px] right-0">
          <div className="max-w-[800px] mx-auto px-8">
            <div className="w-full h-1 bg-[#E5E7EB] rounded-full overflow-hidden">
              <div className="w-1/5 h-full bg-[#346DE0]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}