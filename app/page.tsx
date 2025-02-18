import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Brain, CheckCircle, Sparkles, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Interview Practice",
      description: "Get personalized feedback and improve your interview skills with our AI assistant",
    },
    {
      icon: Target,
      title: "Role-Specific Questions",
      description: "Practice with questions tailored to your target role and industry",
    },
    {
      icon: Sparkles,
      title: "Real-time Feedback",
      description: "Receive instant feedback on your responses and areas for improvement",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Unimad Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold">unimad</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <Link href="/uniboard/applications/interview-prep">
            <Button className="bg-[#346DE0] hover:bg-[#346DE0]/90">Start Interview Prep</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Master Your Interviews with AI-Powered Practice</h1>
            <p className="text-xl text-gray-600 mb-8">
              Practice interviews, get instant feedback, and improve your chances of landing your dream job.
            </p>
            <Link href="/uniboard/applications/interview-prep">
              <Button size="lg" className="bg-[#346DE0] hover:bg-[#346DE0]/90">
                Try Interview Prep <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <feature.icon className="h-12 w-12 text-[#346DE0] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                "Select your target role and company",
                "Practice with AI-generated interview questions",
                "Get instant feedback and suggestions",
                "Review your performance and improve",
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#346DE0] text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-lg font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Unimad</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Personalized feedback for improvement",
              "Industry-specific question bank",
              "Real-time performance analytics",
              "Practice at your own pace",
              "Expert-curated content",
              "Continuous learning and improvement",
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#346DE0] flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#346DE0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ace Your Interviews?</h2>
          <p className="text-xl mb-8 text-blue-100">Start practicing today and boost your confidence.</p>
          <Link href="/uniboard/applications/interview-prep">
            <Button size="lg" variant="secondary">
              Start Free Practice
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

