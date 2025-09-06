import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Bell, Focus } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Powerful Features</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover how Streamline helps you manage your digital productivity with intelligent automation and insights.
          </p>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          {/* Feature 1: Screen Time Categorization */}
          <div className="mb-24 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Card className="h-full overflow-hidden rounded-xl border-border/40 bg-card/50 backdrop-blur">
                <CardContent className="aspect-video p-0">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <Brain className="h-16 w-16 text-blue-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-4 flex items-center gap-3">
                <Brain className="h-8 w-8 text-blue-400" />
                <h2 className="text-3xl font-bold">Screen Time Categorization</h2>
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                Categorize screen time into Productive, Unproductive, and Neutral using Gemini AI. Our intelligent
                system learns from your usage patterns to automatically classify applications and websites, giving you
                clear insights into how you spend your digital time.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-sm">Productive activities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                  <span className="text-sm">Unproductive activities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                  <span className="text-sm">Neutral activities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Smart Notifications & Reports */}
          <div className="mb-24 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <Bell className="h-8 w-8 text-orange-400" />
                <h2 className="text-3xl font-bold">Smart Notifications & Reports</h2>
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                If an Unproductive window is open, show 3 notifications to gently redirect your attention. Later, a
                comprehensive report pops up about the time spent, helping you understand your digital habits and make
                informed decisions about your productivity.
              </p>
              <div className="space-y-3">
                <div className="rounded-lg border border-orange-400/20 bg-orange-400/10 p-3">
                  <p className="text-sm font-medium">Gentle Reminder</p>
                  <p className="text-xs text-muted-foreground">You've been on social media for 15 minutes</p>
                </div>
                <div className="rounded-lg border border-orange-400/20 bg-orange-400/10 p-3">
                  <p className="text-sm font-medium">Time Alert</p>
                  <p className="text-xs text-muted-foreground">Consider switching to a productive task</p>
                </div>
                <div className="rounded-lg border border-orange-400/20 bg-orange-400/10 p-3">
                  <p className="text-sm font-medium">Daily Report</p>
                  <p className="text-xs text-muted-foreground">Your productivity summary is ready</p>
                </div>
              </div>
            </div>
            <div>
              <Card className="h-full overflow-hidden rounded-xl border-border/40 bg-card/50 backdrop-blur">
                <CardContent className="aspect-video p-0">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-500/20 to-red-500/20">
                    <Bell className="h-16 w-16 text-orange-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Feature 3: Focus Sessions */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Card className="h-full overflow-hidden rounded-xl border-border/40 bg-card/50 backdrop-blur">
                <CardContent className="aspect-video p-0">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-500/20 to-teal-500/20">
                    <Focus className="h-16 w-16 text-green-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-4 flex items-center gap-3">
                <Focus className="h-8 w-8 text-green-400" />
                <h2 className="text-3xl font-bold">Focus Sessions</h2>
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                If a Productive window is open, automatically start a Focus Session to maximize your productivity. Allow
                users to configure what actions are manual vs automatic, giving you complete control over your workflow
                and focus management.
              </p>
              <div className="space-y-4">
                <div className="rounded-lg border border-green-400/20 bg-green-400/10 p-4">
                  <h4 className="mb-2 font-semibold text-green-400">Auto-Start Focus Session</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically begins when productive apps are detected
                  </p>
                </div>
                <div className="rounded-lg border border-border/40 bg-card/30 p-4">
                  <h4 className="mb-2 font-semibold">Customizable Settings</h4>
                  <p className="text-sm text-muted-foreground">
                    Configure manual vs automatic actions to fit your workflow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
