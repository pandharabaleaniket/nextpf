import { ContentSection, GridLayout, CardContainer } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, TrendingUp, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <ContentSection
        title="Welcome to Your Dashboard"
        description="Monitor your application performance and manage your projects from this central hub."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-federal-blue-500 hover:bg-federal-blue-600">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </div>
      </ContentSection>

      {/* Stats Cards */}
      <ContentSection title="Overview" description="Key metrics and performance indicators">
        <GridLayout cols={{ default: 1, sm: 2, lg: 4 }}>
          <CardContainer>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">12,345</p>
                <p className="text-xs text-green-600">+12% from last month</p>
              </div>
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContainer>

          <CardContainer>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">$54,321</p>
                <p className="text-xs text-green-600">+8% from last month</p>
              </div>
              <TrendingUp className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContainer>

          <CardContainer>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold">23</p>
                <p className="text-xs text-blue-600">3 new this week</p>
              </div>
              <BarChart3 className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContainer>

          <CardContainer>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">System Health</p>
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-xs text-green-600">All systems operational</p>
              </div>
              <Activity className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContainer>
        </GridLayout>
      </ContentSection>

      {/* Recent Activity */}
      <ContentSection title="Recent Activity" description="Latest updates and changes">
        <GridLayout cols={{ default: 1, lg: 2 }}>
          <CardContainer>
            <h3 className="font-semibold mb-4">Project Updates</h3>
            <div className="space-y-3">
              {[
                { title: "Website Redesign", status: "In Progress", time: "2 hours ago" },
                { title: "Mobile App", status: "Completed", time: "1 day ago" },
                { title: "API Integration", status: "Review", time: "3 days ago" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    item.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContainer>

          <CardContainer>
            <h3 className="font-semibold mb-4">Team Activity</h3>
            <div className="space-y-3">
              {[
                { user: "Alice Johnson", action: "Updated project timeline", time: "1 hour ago" },
                { user: "Bob Smith", action: "Completed code review", time: "3 hours ago" },
                { user: "Carol Davis", action: "Added new feature request", time: "5 hours ago" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 py-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-medium">{item.user.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{item.user}</span> {item.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContainer>
        </GridLayout>
      </ContentSection>

      {/* Color Theme Showcase */}
      <ContentSection title="Theme Colors" description="Current color palette in use">
        <GridLayout cols={{ default: 1, md: 2, lg: 5 }}>
          {/* Federal Blue */}
          <CardContainer padding="sm">
            <h4 className="font-semibold text-federal-blue-700 mb-3">Federal Blue</h4>
            <div className="space-y-2">
              <div className="h-8 bg-federal-blue-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-federal-blue-500 rounded flex items-center justify-center text-xs text-white">500</div>
              <div className="h-8 bg-federal-blue-700 rounded flex items-center justify-center text-xs text-white">700</div>
            </div>
          </CardContainer>
          
          {/* Honolulu Blue */}
          <CardContainer padding="sm">
            <h4 className="font-semibold text-honolulu-blue-700 mb-3">Honolulu Blue</h4>
            <div className="space-y-2">
              <div className="h-8 bg-honolulu-blue-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-honolulu-blue-500 rounded flex items-center justify-center text-xs text-white">500</div>
              <div className="h-8 bg-honolulu-blue-700 rounded flex items-center justify-center text-xs text-white">700</div>
            </div>
          </CardContainer>
          
          {/* Pacific Cyan */}
          <CardContainer padding="sm">
            <h4 className="font-semibold text-pacific-cyan-700 mb-3">Pacific Cyan</h4>
            <div className="space-y-2">
              <div className="h-8 bg-pacific-cyan-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-pacific-cyan-500 rounded flex items-center justify-center text-xs text-white">500</div>
              <div className="h-8 bg-pacific-cyan-700 rounded flex items-center justify-center text-xs">700</div>
            </div>
          </CardContainer>
          
          {/* Non Photo Blue */}
          <CardContainer padding="sm">
            <h4 className="font-semibold text-non-photo-blue-600 mb-3">Non Photo Blue</h4>
            <div className="space-y-2">
              <div className="h-8 bg-non-photo-blue-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-non-photo-blue-500 rounded flex items-center justify-center text-xs">500</div>
              <div className="h-8 bg-non-photo-blue-700 rounded flex items-center justify-center text-xs">700</div>
            </div>
          </CardContainer>
          
          {/* Light Cyan */}
          <CardContainer padding="sm">
            <h4 className="font-semibold text-light-cyan-400 mb-3">Light Cyan</h4>
            <div className="space-y-2">
              <div className="h-8 bg-light-cyan-300 rounded flex items-center justify-center text-xs text-white">300</div>
              <div className="h-8 bg-light-cyan-500 rounded flex items-center justify-center text-xs">500</div>
              <div className="h-8 bg-light-cyan-700 rounded flex items-center justify-center text-xs">700</div>
            </div>
          </CardContainer>
        </GridLayout>
      </ContentSection>
    </div>
  );
}