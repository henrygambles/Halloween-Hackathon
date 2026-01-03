import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="text-2xl hover:scale-110 transition-transform cursor-pointer focus:outline-none"
              aria-label="Toggle dark mode"
              style={{
                filter: theme === 'dark' ? 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.8)) drop-shadow(0 0 16px rgba(251, 146, 60, 0.6))' : 'none',
                transition: 'filter 0.3s ease'
              }}
            >
              🎃
            </button>
            <h1 className="text-xl font-bold">Halloween Hackathon</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Schedule</a>
            <a href="#prizes" className="text-sm font-medium hover:text-primary transition-colors">Prizes</a>
            <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Team</a>
            <Link href="/register">
              <Button>Register Now</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Link href="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              October 31st - November 2nd, 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Halloween Hackathon <span className="text-primary">2025</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us for an epic weekend of coding, creativity, and innovation. Build something amazing with your team and compete for incredible prizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/register">
                <Button size="lg" className="text-lg px-8">
                  Register Your Team
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#schedule">View Schedule</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">About the Event</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>3-Day Event</CardTitle>
                  <CardDescription>
                    An intensive weekend starting October 31st, 2025. Build, learn, and network with fellow developers.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Team Based</CardTitle>
                  <CardDescription>
                    Form teams of 1-4 members. Solo hackers welcome! All skill levels encouraged to participate.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Trophy className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Amazing Prizes</CardTitle>
                  <CardDescription>
                    Compete for top prizes including an iPod Classic, Raspberry Pi, and exclusive Manus access.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Opening Weekend Schedule</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Friday */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Friday, October 31st
              </h3>
              <div className="space-y-3">
                <ScheduleItem time="6:00 PM" title="Registration & Check-in Opens" />
                <ScheduleItem time="7:00 PM" title="Opening Ceremony & Welcome" />
                <ScheduleItem time="7:30 PM" title="Team Formation & Networking" />
                <ScheduleItem time="8:00 PM" title="Hacking Begins!" highlight />
                <ScheduleItem time="10:00 PM" title="Midnight Snacks & Refreshments" />
              </div>
            </div>

            {/* Saturday */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Saturday, November 1st
              </h3>
              <div className="space-y-3">
                <ScheduleItem time="9:00 AM" title="Breakfast & Morning Standup" />
                <ScheduleItem time="12:00 PM" title="Lunch Break" />
                <ScheduleItem time="2:00 PM" title="Workshop: Modern Web Development" />
                <ScheduleItem time="4:00 PM" title="Mentor Office Hours" />
                <ScheduleItem time="6:00 PM" title="Dinner" />
                <ScheduleItem time="8:00 PM" title="Evening Progress Check-ins" />
              </div>
            </div>

            {/* Sunday */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Sunday, November 2nd
              </h3>
              <div className="space-y-3">
                <ScheduleItem time="9:00 AM" title="Breakfast & Final Sprint" />
                <ScheduleItem time="12:00 PM" title="Project Submissions Due" highlight />
                <ScheduleItem time="1:00 PM" title="Lunch" />
                <ScheduleItem time="2:00 PM" title="Project Presentations Begin" />
                <ScheduleItem time="4:00 PM" title="Judging & Deliberation" />
                <ScheduleItem time="5:00 PM" title="Awards Ceremony" highlight />
                <ScheduleItem time="6:00 PM" title="Closing Remarks & Networking" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Prizes</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">🥇</div>
                <CardTitle className="text-2xl">First Place</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold mb-2">iPod Classic</p>
                <p className="text-muted-foreground">
                  The ultimate prize for the winning team - a classic piece of tech history reimagined for modern creators.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">🥈</div>
                <CardTitle className="text-2xl">Second Place</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold mb-2">Raspberry Pi</p>
                <p className="text-muted-foreground">
                  Perfect for your next hardware project - endless possibilities for innovation and experimentation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">🥉</div>
                <CardTitle className="text-2xl">Third Place</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold mb-2">Manus Invite</p>
                <p className="text-muted-foreground">
                  Exclusive early access to the Manus AI platform - build the future with cutting-edge AI tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Organizers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Halloween Hackathon Committee brings together experienced event organizers, technical directors, and community managers dedicated to creating an unforgettable experience for all participants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  Mentors & Judges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our panel of experienced developers, entrepreneurs, and industry professionals will be available throughout the event to provide guidance and evaluate projects. Get expert feedback and learn from the best in the field.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Volunteers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A dedicated team of volunteers will be on-site to ensure the event runs smoothly and all participants have an amazing experience. From technical support to logistics, we've got you covered.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-background to-muted/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Join?</h2>
            <p className="text-xl text-muted-foreground">
              Don't miss out on this incredible opportunity to learn, build, and compete with fellow developers.
            </p>
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Halloween Hackathon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ScheduleItem({ time, title, highlight }: { time: string; title: string; highlight?: boolean }) {
  return (
    <Card className={highlight ? "border-primary/40 bg-primary/5" : ""}>
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex items-center gap-2 min-w-[100px]">
          <Clock className="h-4 w-4 text-primary" />
          <span className="font-mono text-sm font-medium">{time}</span>
        </div>
        <div className="h-8 w-px bg-border" />
        <p className={`font-medium ${highlight ? "text-primary" : ""}`}>{title}</p>
      </CardContent>
    </Card>
  );
}
