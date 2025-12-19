import Link from 'next/link';
import {
  MessageSquare,
  Lightbulb,
  HelpCircle,
  Megaphone,
  Code2,
  Rocket,
  ArrowRight,
  ExternalLink,
  Github,
  Twitter,
  Users,
  Zap,
  BookOpen,
  Shield,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

const discussionCategories = [
  {
    title: 'General',
    description: 'General discussions about Lux Network.',
    icon: MessageSquare,
    href: 'https://github.com/luxfi/lps/discussions/categories/general',
    color: 'blue',
    count: null,
  },
  {
    title: 'Ideas',
    description: 'Share new ideas and feature requests for the ecosystem.',
    icon: Lightbulb,
    href: 'https://github.com/luxfi/lps/discussions/categories/ideas',
    color: 'amber',
    count: null,
  },
  {
    title: 'Q&A',
    description: 'Ask questions and get answers from the community.',
    icon: HelpCircle,
    href: 'https://github.com/luxfi/lps/discussions/categories/q-a',
    color: 'green',
    count: null,
  },
  {
    title: 'Announcements',
    description: 'Official updates and announcements from the team.',
    icon: Megaphone,
    href: 'https://github.com/luxfi/lps/discussions/categories/announcements',
    color: 'purple',
    count: null,
  },
  {
    title: 'Developers',
    description: 'Technical discussions for developers building on Lux.',
    icon: Code2,
    href: 'https://github.com/luxfi/lps/discussions/categories/developers',
    color: 'cyan',
    count: null,
  },
  {
    title: 'Show & Tell',
    description: 'Showcase your projects built on Lux Network.',
    icon: Rocket,
    href: 'https://github.com/luxfi/lps/discussions/categories/show-and-tell',
    color: 'pink',
    count: null,
  },
];

const resources = [
  {
    title: 'Lux Proposals',
    description: 'Technical specifications and standards',
    href: 'https://lps.lux.network',
    icon: BookOpen,
  },
  {
    title: 'Help Center',
    description: 'Documentation and guides',
    href: 'https://lux.help',
    icon: HelpCircle,
  },
  {
    title: 'GitHub',
    description: 'Source code and contributions',
    href: 'https://github.com/luxfi',
    icon: Github,
  },
  {
    title: 'Security',
    description: 'Report vulnerabilities',
    href: 'https://github.com/luxfi/lps/security',
    icon: Shield,
  },
];

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  green: 'bg-green-500/10 text-green-600 dark:text-green-400',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  cyan: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  pink: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
};

export default function ForumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto max-w-6xl">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={28} />
            <span className="font-semibold text-lg">Forum</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://lux.help"
              className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Help
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://github.com/luxfi/lps/discussions"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border/50">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/5 rounded-full mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Lux Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join the conversation. Share ideas, ask questions, and connect with developers
              building on Lux Network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/luxfi/lps/discussions"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="h-5 w-5" />
                Open Discussions
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/luxfi/lps/discussions/new/choose"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
              >
                <Zap className="h-5 w-5" />
                Start a Discussion
              </a>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Discussion Categories</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {discussionCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <a
                    key={category.title}
                    href={category.href}
                    className="group p-6 rounded-xl border border-border/50 bg-background hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className={`inline-flex p-3 rounded-lg ${colorClasses[category.color]} mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View discussions
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 px-4 md:px-6 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <a
                    key={resource.title}
                    href={resource.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-background hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="p-2 rounded-lg bg-muted">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <span className="font-medium block">{resource.title}</span>
                      <span className="text-sm text-muted-foreground">{resource.description}</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Community Guidelines</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <h3 className="font-semibold mb-2">Be Respectful</h3>
                <p className="text-sm text-muted-foreground">
                  Treat everyone with respect. Healthy discussions require diverse perspectives.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <h3 className="font-semibold mb-2">Stay On Topic</h3>
                <p className="text-sm text-muted-foreground">
                  Keep discussions relevant to Lux Network and the broader ecosystem.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <h3 className="font-semibold mb-2">Share Knowledge</h3>
                <p className="text-sm text-muted-foreground">
                  Help others by sharing your experience and expertise. We grow together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto max-w-4xl text-center">
            <MessageSquare className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">Ready to join the conversation?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              All discussions happen on GitHub. Sign in with your GitHub account to participate.
            </p>
            <a
              href="https://github.com/luxfi/lps/discussions"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Github className="h-5 w-5" />
              Go to Discussions
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Logo size={20} />
              <span className="text-sm text-muted-foreground">
                BSD-3-Clause &copy; 2020 - {new Date().getFullYear()} Lux Industries Inc.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/luxfi"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/luxfi"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
