import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTeamMembers, getArticles } from "@/lib/data"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export default async function TeamPage() {
  const [teamMembers, articles] = await Promise.all([getTeamMembers(), getArticles()])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold text-balance">Our Team</h1>
            <p className="text-lg text-muted-foreground">Meet the talented individuals behind Miswag Tech Blog</p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => {
                const memberArticles = articles.filter((a) => a.author_team_id === member.team_id)
                return (
                  <Card key={member.team_id} className="group overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="mb-4 flex justify-center">
                        <div className="relative h-32 w-32 overflow-hidden rounded-full bg-muted ring-4 ring-background transition-all group-hover:ring-primary">
                          <Image
                            src={`/avatars/${member.team_member_avatar}`}
                            alt={member.team_member_name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <CardTitle className="text-center text-xl">{member.team_member_name}</CardTitle>
                      <CardDescription className="text-center">{member.team_member_position}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {member.team_member_bio && (
                        <p className="text-center text-sm text-muted-foreground text-pretty">
                          {member.team_member_bio}
                        </p>
                      )}

                      <div className="flex flex-col items-center gap-3">
                        <div className="text-center text-sm">
                          <span className="font-semibold text-primary">{memberArticles.length}</span>
                          <span className="text-muted-foreground">
                            {" "}
                            {memberArticles.length === 1 ? "Article" : "Articles"}
                          </span>
                        </div>

                        {member.team_member_linkedin && (
                          <a
                            href={member.team_member_linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                              <Linkedin className="h-4 w-4" />
                              LinkedIn Profile
                            </Button>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
