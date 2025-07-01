'use client'

import * as React from 'react'
import { Provider } from 'jotai'

import { Header } from './header'
import { Sidebar } from './sidebar'
import { Main } from './main'
import { Footer } from './footer'
import { ThemeProvider } from '@/components/theme-provider'

/**
 * Root Layout Component
 * Combines all layout components with proper state management and theme support
 * Provides error boundary and loading states
 */
interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Provider>
        <div className="relative min-h-screen bg-background">
          {/* Header */}
          <Header />

          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <Main>{children}</Main>

          {/* Footer */}
          <Footer />
        </div>
      </Provider>
    </ThemeProvider>
  )
}

/**
 * Error Boundary Component
 * Catches and handles layout-related errors gracefully
 */
interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class LayoutErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Layout Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Something went wrong
            </h2>
            <p className="text-muted-foreground">
              There was an error loading the application layout.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}