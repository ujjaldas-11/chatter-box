import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  description: string;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
  onSubmit: () => void;
  isLoading?: boolean;
  children: ReactNode;
}

export function AuthCard({
  title,
  description,
  footerText,
  footerLink,
  footerLinkText,
  onSubmit,
  isLoading = false,
  children,
}: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{title}</CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="space-y-6"
          >
            {children}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Please wait..." : title}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center border-t pt-6">
          <p className="text-sm text-muted-foreground">
            {footerText}{" "}
            <a href={footerLink} className="text-primary hover:underline">
              {footerLinkText}
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
