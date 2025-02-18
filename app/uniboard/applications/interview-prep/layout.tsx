import type React from "react"


export default function InterviewPrepLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-[#F5F5F5]">
    
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}

