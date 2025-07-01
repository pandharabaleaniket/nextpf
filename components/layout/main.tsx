'use client'

import * as React from 'react'
import { useAtom } from 'jotai'

import { sidebarCollapsedAtom } from '@/lib/store'
import { cn } from '@/lib/utils'

/**
 * Main Content Layout Component
 * Responsive main content area with dynamic margins based on sidebar state
 * Handles proper spacing and theme inheritance
 */
interface MainProps {
  children: React.ReactNode
  className?: string
}

export function Main({ children, className }: MainProps) {
  const [sidebarCollapsed] = useAtom(sidebarCollapsedAtom)

  return (
    <main
      className={cn(
        // Base layout styles
        'flex-1 transition-all duration-200 ease-in-out',
        // Top margin for fixed header
        'mt-14 md:mt-16',
        // Dynamic left margin based on sidebar state (desktop only)
        'md:ml-16', // Collapsed sidebar width
        !sidebarCollapsed && 'md:ml-60', // Expanded sidebar width
        // Padding for content
        'p-4 md:p-6',
        // Min height calculation (viewport - header - footer)
        'min-h-[calc(100vh-3.5rem-3rem)] md:min-h-[calc(100vh-4rem-3rem)]',
        // Theme inheritance
        'bg-background text-foreground',
        className
      )}
    >
      {/* Content Container */}
      <div className="mx-auto max-w-7xl w-full">
        {children}
      </div>
    </main>
  )
}

/**
 * Content Section Component
 * Reusable content section with consistent spacing and styling
 */
interface ContentSectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
}

export function ContentSection({
  children,
  className,
  title,
  description,
}: ContentSectionProps) {
  return (
    <section className={cn('space-y-6', className)}>
      {(title || description) && (
        <div className="space-y-2">
          {title && (
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

/**
 * Grid Layout Component
 * Responsive grid system for content organization
 */
interface GridLayoutProps {
  children: React.ReactNode
  className?: string
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
}

export function GridLayout({
  children,
  className,
  cols = { default: 1, md: 2, lg: 3 },
}: GridLayoutProps) {
  const gridClasses = cn(
    'grid gap-6',
    cols.default && `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
    className
  )

  return <div className={gridClasses}>{children}</div>
}

/**
 * Card Container Component
 * Consistent card styling for content blocks
 */
interface CardContainerProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

export function CardContainer({
  children,
  className,
  padding = 'md',
}: CardContainerProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  )
}