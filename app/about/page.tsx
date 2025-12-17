import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getSiteConfig } from "@/lib/data"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, TrendingUp, Target } from "lucide-react"

export default async function AboutPage() {
  const siteConfig = await getSiteConfig()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold text-balance">About Us</h1>
            <p className="text-lg text-muted-foreground">{siteConfig.bio}</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-balance">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                At Miswag Tech Blog, we are dedicated to sharing knowledge and insights about the latest developments in
                technology. Our team of experienced engineers and developers brings you in-depth articles on data
                engineering, backend development, cloud architecture, and machine learning.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Quality Content</CardTitle>
                  <CardDescription>
                    We produce well-researched, comprehensive articles that provide real value to developers and
                    engineers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expert Authors</CardTitle>
                  <CardDescription>
                    Our content is written by industry professionals with hands-on experience in their respective
                    fields.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Latest Technologies</CardTitle>
                  <CardDescription>
                    Stay up-to-date with the newest trends, tools, and best practices in the tech industry.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Practical Focus</CardTitle>
                  <CardDescription>
                    We emphasize real-world applications and practical solutions that you can implement in your
                    projects.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-t border-border bg-muted/20 py-16">
          <div className="container mx-auto max-w-2xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance">Get in Touch</h2>
            <p className="mb-6 text-lg text-muted-foreground text-pretty">
              Have questions or suggestions? We'd love to hear from you. Connect with us on social media or reach out to
              our team members directly.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
