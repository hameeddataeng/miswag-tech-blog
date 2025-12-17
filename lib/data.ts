export interface SiteConfig {
  title: string
  bio: string
}

export interface Category {
  category_id: number
  category_name: string
}

export interface TeamMember {
  team_id: number
  team_member_name: string
  team_member_position: string
  team_member_linkedin: string
  team_member_avatar: string
  team_member_bio?: string
}

export interface Article {
  article_id: string
  article_title: string
  author_team_id: number
  category_id: number
  article_created_at: string
  article_keywords: string[]
  article_description: string
  article_directory: string
  featured_image: string
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/content/site.json`)
  if (!res.ok) throw new Error("Failed to fetch site config")
  return res.json()
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/content/categories.json`)
  if (!res.ok) throw new Error("Failed to fetch categories")
  return res.json()
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/content/team.json`)
  if (!res.ok) throw new Error("Failed to fetch team members")
  return res.json()
}

export async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/content/articles.json`, {
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Failed to fetch articles")
  return res.json()
}

export async function getArticleContent(directory: string): Promise<string> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/data/${directory}/index.md`)
  if (!res.ok) throw new Error("Failed to fetch article content")
  return res.text()
}
