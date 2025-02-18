import type React from "react"
import { Sidebar } from "@/components/SideBar"

export default function InterviewPrepLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      <Sidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}

