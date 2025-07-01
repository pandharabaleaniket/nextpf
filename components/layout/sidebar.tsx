'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  Home,
  BarChart3,
  Users,
  Settings,
  FileText,
  Folder,
  Calendar,
  Mail,
  HelpCircle,
} from 'lucide-react'
import { useAtom } from 'jotai'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { sidebarCollapsedAtom } from '@/lib/store'
import { cn } from '@/lib/utils'

/**
 * Navigation item interface
 */
interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: NavItem[]
}

/**
 * Navigation configuration
 */
const navigationItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Home,
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
    children: [
      { title: 'Overview', href: '/analytics/overview', icon: BarChart3 },
      { title: 'Reports', href: '/analytics/reports', icon: FileText },
      { title: 'Metrics', href: '/analytics/metrics', icon: BarChart3 },
    ],
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: Folder,
    children: [
      { title: 'All Projects', href: '/projects', icon: Folder },
      { title: 'Active', href: '/projects/active', icon: Folder },
      { title: 'Archived', href: '/projects/archived', icon: Folder },
    ],
  },
  {
    title: 'Team',
    href: '/team',
    icon: Users,
  },
  {
    title: 'Calendar',
    href: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: Mail,
  },
]

const bottomNavigationItems: NavItem[] = [
  {
    title: 'Help & Support',
    href: '/help',
    icon: HelpCircle,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
]

/**
 * Sidebar Component
 * Responsive sidebar with collapsible state and nested navigation
 * Width: 240px expanded, 64px collapsed
 * Uses Sheet component for mobile view
 */
export function Sidebar() {
  const [sidebarCollapsed] = useAtom(sidebarCollapsedAtom)
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])
  const pathname = usePathname()

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    )
  }

  const isExpanded = (href: string) => expandedItems.includes(href)

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-14 md:top-16 z-40 h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] border-r bg-background transition-all duration-200 ease-in-out hidden md:block',
          sidebarCollapsed ? 'w-16' : 'w-60'
        )}
      >
        <TooltipProvider>
          <ScrollArea className="h-full py-4">
            <nav className="flex flex-col gap-2 px-2">
              {/* Main Navigation */}
              {navigationItems.map((item) => (
                <NavItemComponent
                  key={item.href}
                  item={item}
                  isCollapsed={sidebarCollapsed}
                  isExpanded={isExpanded(item.href)}
                  isActive={isActive(item.href)}
                  onToggleExpanded={() => toggleExpanded(item.href)}
                />
              ))}

              <Separator className="my-4" />

              {/* Bottom Navigation */}
              {bottomNavigationItems.map((item) => (
                <NavItemComponent
                  key={item.href}
                  item={item}
                  isCollapsed={sidebarCollapsed}
                  isExpanded={isExpanded(item.href)}
                  isActive={isActive(item.href)}
                  onToggleExpanded={() => toggleExpanded(item.href)}
                />
              ))}
            </nav>
          </ScrollArea>
        </TooltipProvider>
      </aside>
    </>
  )
}

/**
 * Navigation Item Component
 * Handles individual navigation items with tooltips and nested children
 */
interface NavItemComponentProps {
  item: NavItem
  isCollapsed: boolean
  isExpanded: boolean
  isActive: boolean
  onToggleExpanded: () => void
  level?: number
}

function NavItemComponent({
  item,
  isCollapsed,
  isExpanded,
  isActive,
  onToggleExpanded,
  level = 0,
}: NavItemComponentProps) {
  const hasChildren = item.children && item.children.length > 0
  const Icon = item.icon

  const buttonContent = (
    <Button
      variant={isActive ? 'secondary' : 'ghost'}
      className={cn(
        'w-full justify-start gap-2 h-9',
        isCollapsed && 'justify-center px-2',
        level > 0 && 'ml-4 w-[calc(100%-1rem)]'
      )}
      onClick={hasChildren ? onToggleExpanded : undefined}
      asChild={!hasChildren}
    >
      {hasChildren ? (
        <div>
          <Icon className="h-4 w-4 shrink-0" />
          {!isCollapsed && (
            <>
              <span className="truncate">{item.title}</span>
              <ChevronDown
                className={cn(
                  'ml-auto h-4 w-4 shrink-0 transition-transform',
                  isExpanded && 'rotate-180'
                )}
              />
            </>
          )}
        </div>
      ) : (
        <Link href={item.href} className="flex items-center gap-2 w-full">
          <Icon className="h-4 w-4 shrink-0" />
          {!isCollapsed && <span className="truncate">{item.title}</span>}
        </Link>
      )}
    </Button>
  )

  return (
    <div>
      {isCollapsed ? (
        <Tooltip>
          <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
          <TooltipContent side="right" className="font-medium">
            {item.title}
          </TooltipContent>
        </Tooltip>
      ) : (
        buttonContent
      )}

      {/* Nested Children */}
      {hasChildren && isExpanded && !isCollapsed && (
        <div className="mt-1 space-y-1">
          {item.children?.map((child) => (
            <NavItemComponent
              key={child.href}
              item={child}
              isCollapsed={false}
              isExpanded={false}
              isActive={isActive}
              onToggleExpanded={() => {}}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}