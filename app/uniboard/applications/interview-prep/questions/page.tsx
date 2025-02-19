"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap } from "lucide-react"
import Link from "next/link"
import { ChatInput } from "@/components/ChatInput"

const questionTypes = ["All", "Behavioural", "Question Type 1", "Question Type 2"]

const questions = [
  {
    id: 1,
    text: "Can you please tell me a bit about yourself?",
    type: "Behavioural",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam quisque id. Aenean euismod elementum nisi quis eleifend quam. Mattis ullamcorper velit sed ullamcorper. Pretium viverra suspendisse potenti nullam ac tortor. A arcu cursus vitae congue mauris. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Aenean euismod elementum nisi quis eleifend quam adipiscing. In cursus turpis massa tincidunt dui ut ornare lectus sit. Mattis nunc sed blandit libero volutpat sed cras. Feugiat nisl pretium fusce id. Bibendum enim facilisis gravida neque convallis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Vitae auctor eu augue ut lectus arcu bibendum. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Ut tristique et egestas quis ipsum suspendisse. Tincidunt tortor aliquam nulla facilisi cras fermentum. Aliquet nibh praesent tristique magna sit amet. Odio euismod lacinia at quis risus sed vulputate odio ut.",
  },
  {
    id: 2,
    text: "Tell me about a time you had to deliver on multiple competing priorities. What did you do, and what were the results?",
    type: "Question Type",
    answer: "euismod elementum nisi quis eleifend quam. Mattis ullamcorper velit sed ullamcorper.",
  },
]

export default function QuestionsPage() {
  const [selectedType, setSelectedType] = useState("All")

  return (
    <div className="flex-1 min-h-screen">
      <div className="flex">
     
        <div className="flex-[2] border-r border-[#E5E7EB]">
          <div className="p-8">
            
            <div className="mb-8">
              <Link
                href="/uniboard/applications/interview-prep"
                className="inline-flex items-center text-[#346DE0] mb-6 hover:underline"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-[#373737]">Data Manager</h1>
                  <p className="text-[#808080]">Google</p>
                </div>
                <Button className="bg-[#346DE0] hover:bg-[#346DE0]/90">Retake</Button>
              </div>
            </div>

            
            <div className="flex gap-2 mb-6">
              {questionTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "secondary"}
                  className={`rounded-full px-4 py-2 text-sm ${
                    selectedType === type ? "bg-[#346DE0] text-white" : "bg-[#F3F4F6] text-[#808080]"
                  }`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>

            
            <div className="space-y-6">
              {questions.map((question) => (
                <div key={question.id} className="border rounded-lg p-6 bg-white space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-medium text-[#373737]">{question.text}</h3>
                    <span className="px-3 py-1 bg-[#EEF2FF] text-[#346DE0] text-sm rounded-full whitespace-nowrap">
                      {question.type}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#346DE0] font-medium">Your Answer</label>
                    <textarea
                      className="w-full min-h-[200px] p-4 rounded-lg border border-[#E5E7EB] resize-none focus:ring-2 focus:ring-[#346DE0] focus:border-transparent"
                      defaultValue={question.answer}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
        <div className="flex-1 p-8">
          <div className="sticky top-8">
            <div className="border rounded-lg p-6 bg-white">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-[#373737]">Recommended Answer</h3>
              </div>
              <p className="text-[#808080] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Morbi non arcu risus quis varius quam quisque id. Aenean euismod elementum nisi
                quis eleifend quam. Mattis ullamcorper velit sed ullamcorper. Pretium viverra suspendisse potenti nullam
                ac tortor. A arcu cursus vitae congue mauris. Habitasse platea dictumst quisque sagittis purus sit amet
                volutpat consequat. Aenean euismod elementum nisi quis eleifend quam adipiscing. In cursus turpis massa
                tincidunt dui ut ornare lectus sit. Mattis nunc sed blandit libero volutpat sed cras. Feugiat nisl
                pretium fusce id. Bibendum enim facilisis gravida neque convallis. Suspendisse faucibus interdum posuere
                lorem ipsum dolor sit. Vitae auctor eu augue ut lectus arcu bibendum. Neque aliquam vestibulum morbi
                blandit cursus risus at ultrices mi. Ut tristique et egestas quis ipsum suspendisse. Tincidunt tortor
                aliquam nulla facilisi cras fermentum. Aliquet nibh praesent tristique magna sit amet. Odio euismod
                lacinia at quis risus sed vulputate odio ut.
              </p>
              <Button className="w-full bg-[#346DE0] hover:bg-[#346DE0]/90">
                <GraduationCap className="h-4 w-4 mr-2" />
                Generate another
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ChatInput />
    </div>
  )
}

