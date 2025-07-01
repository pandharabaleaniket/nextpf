'use client'

import * as React from 'react'
import Link from 'next/link'
import { useAtom } from 'jotai'

import { Separator } from '@/components/ui/separator'
import { sidebarCollapsedAtom } from '@/lib/store'
import { cn } from '@/lib/utils'

/**
 * Footer Component
 * Sticky footer with responsive layout and theme-aware styling
 * Height: 48px, positioned at bottom of viewport
 */
export function Footer() {
  const [sidebarCollapsed] = useAtom(sidebarCollapsedAtom)

  const footerLinks = [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
    { title: 'Support', href: '/support' },
    { title: 'Docs', href: '/docs' },
  ]

  return (
    <footer
      className={cn(
        // Base positioning and styling
        'border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        'h-12 flex items-center justify-between px-4 md:px-6',
        // Dynamic margin for desktop sidebar
        'md:ml-16',
        !sidebarCollapsed && 'md:ml-60',
        // Transition for smooth sidebar changes
        'transition-all duration-200 ease-in-out'
      )}
    >
      {/* Left side - Copyright */}
      <div className="flex items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 AppName. All rights reserved.
        </p>
      </div>

      {/* Right side - Links */}
      <nav className="hidden md:flex items-center gap-4">
        {footerLinks.map((link, index) => (
          <React.Fragment key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.title}
            </Link>
            {index < footerLinks.length - 1 && (
              <Separator orientation="vertical" className="h-4" />
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Mobile - Simplified version */}
      <div className="md:hidden">
        <p className="text-xs text-muted-foreground">v1.0.0</p>
      </div>
    </footer>
  )
}