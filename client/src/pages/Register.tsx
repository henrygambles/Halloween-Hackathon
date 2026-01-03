import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/contexts/ThemeContext";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Register() {
  const { theme, toggleTheme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    teamName: "",
    teamSize: 1,
    experience: "beginner" as "beginner" | "intermediate" | "advanced",
    interests: "",
    dietaryRestrictions: "",
  });

  const registerMutation = trpc.registration.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Registration successful! We'll be in touch soon.");
    },
    onError: (error) => {
      toast.error(error.message || "Registration failed. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    registerMutation.mutate(formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Registration Complete!</CardTitle>
            <CardDescription>
              Thank you for registering for the Halloween Hackathon 2025. We've received your submission and will send you more details via email soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/">
              <Button className="w-full" variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container flex h-16 items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
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
        </div>
      </div>

      {/* Form */}
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Register Your Team</h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to secure your spot at the Halloween Hackathon 2025
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>
                All fields marked with * are required
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Team Name */}
                <div className="space-y-2">
                  <Label htmlFor="teamName">Team Name (Optional)</Label>
                  <Input
                    id="teamName"
                    placeholder="The Code Wizards"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  />
                  <p className="text-sm text-muted-foreground">
                    Leave blank if you're registering solo or looking for a team
                  </p>
                </div>

                {/* Team Size */}
                <div className="space-y-2">
                  <Label htmlFor="teamSize">Team Size *</Label>
                  <Select
                    value={formData.teamSize.toString()}
                    onValueChange={(value) => setFormData({ ...formData, teamSize: parseInt(value) })}
                  >
                    <SelectTrigger id="teamSize">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 (Solo)</SelectItem>
                      <SelectItem value="2">2 members</SelectItem>
                      <SelectItem value="3">3 members</SelectItem>
                      <SelectItem value="4">4 members</SelectItem>
                      <SelectItem value="5">5 members</SelectItem>
                      <SelectItem value="6">6 members</SelectItem>
                      <SelectItem value="7">7 members</SelectItem>
                      <SelectItem value="8">7+ members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({ ...formData, experience: value as any })}
                  >
                    <SelectTrigger id="experience">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner - Just getting started</SelectItem>
                      <SelectItem value="intermediate">Intermediate - Some experience</SelectItem>
                      <SelectItem value="advanced">Advanced - Experienced developer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Interests */}
                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest (Optional)</Label>
                  <Textarea
                    id="interests"
                    placeholder="Web development, AI/ML, mobile apps, hardware, etc."
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    rows={3}
                  />
                </div>

                {/* Dietary Restrictions */}
                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">Dietary Restrictions (Optional)</Label>
                  <Textarea
                    id="dietaryRestrictions"
                    placeholder="Vegetarian, vegan, allergies, etc."
                    value={formData.dietaryRestrictions}
                    onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                    rows={2}
                  />
                  <p className="text-sm text-muted-foreground">
                    Help us accommodate your dietary needs during the event
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={registerMutation.isPending}
                >
                  {registerMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Complete Registration"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
