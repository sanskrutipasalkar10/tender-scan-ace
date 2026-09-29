import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Eye, EyeOff, FileCheck2, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in | Tender AI Platform" },
      { name: "description", content: "Internal bid-team access to the Tender AI Platform workspace." },
      { property: "og:title", content: "Sign in | Tender AI Platform" },
      { property: "og:description", content: "Internal bid-team access to the Tender AI Platform workspace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Login,
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Sign-in is not connected yet. Your credentials were not sent or saved.");
  }
  return <main className="grid min-h-screen bg-paper lg:grid-cols-2">
    <div className="relative hidden min-h-screen flex-col overflow-hidden bg-navy px-10 py-10 text-secondary-foreground lg:flex xl:px-18">
      <Link to="/" className="relative z-10 inline-flex items-center gap-3 self-start font-display text-lg font-semibold"><span className="grid size-9 place-items-center rounded-sm bg-cobalt text-primary-foreground">T</span>Tender AI Platform</Link>
      <div className="relative z-10 my-auto max-w-xl animate-rise-in"><p className="mb-7 text-xs font-bold uppercase text-cobalt-light">Your bid intelligence workspace</p><h1 className="font-display text-5xl font-semibold leading-[1.13] xl:text-6xl">Clarity at every <span className="text-cobalt-light">decision point.</span></h1><p className="mt-7 max-w-md text-base leading-relaxed text-secondary-foreground/65">Review eligibility, understand the full tender, and trace every risk back to the page it came from.</p>
        <div className="relative mt-14 max-w-md overflow-hidden rounded-md border border-secondary-foreground/15 bg-secondary-foreground/5 p-6"><div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cobalt-light/70 animate-scan" /><div className="flex items-center gap-3 border-b border-secondary-foreground/10 pb-4"><FileCheck2 className="size-5 text-cobalt-light" /><span className="text-sm font-semibold">Tender review</span><span className="ml-auto text-xs text-secondary-foreground/45">01 / 03</span></div><div className="mt-5 space-y-4"><div className="h-2 w-3/4 rounded-full bg-secondary-foreground/20" /><div className="h-2 w-11/12 rounded-full bg-secondary-foreground/10" /><div className="h-2 w-2/3 rounded-full bg-secondary-foreground/10" /></div><div className="mt-6 flex items-center gap-2 text-xs text-cobalt-light"><span className="size-1.5 rounded-full bg-cobalt-light animate-soft-pulse" /> Page-cited findings</div></div>
      </div>
      <p className="relative z-10 text-xs text-secondary-foreground/40">Built for Indian government tender bid teams.</p>
      <div className="pointer-events-none absolute -bottom-28 -right-24 size-[540px] rounded-full border border-secondary-foreground/5" /><div className="pointer-events-none absolute -bottom-12 -right-9 size-[410px] rounded-full border border-secondary-foreground/5" />
    </div>
    <div className="flex min-h-screen flex-col px-6 py-7 sm:px-10 sm:py-10 lg:px-16 xl:px-24">
      <div className="flex items-center justify-between"><Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-cobalt"><ArrowLeft className="size-4" /> Back to overview</Link><span className="font-display text-sm font-semibold text-cobalt lg:hidden">Tender AI Platform</span></div>
      <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col justify-center py-15 animate-rise-delay"><div className="mb-9 grid size-12 place-items-center rounded-md bg-cobalt-light text-cobalt"><LockKeyhole className="size-5" /></div><p className="mb-3 text-xs font-bold uppercase text-cobalt">Internal access</p><h2 className="font-display text-3xl font-semibold sm:text-4xl">Welcome back.</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Sign in with your provisioned account to continue to your workspace.</p>
        <form onSubmit={submit} className="mt-10 space-y-6"><div className="space-y-2.5"><Label htmlFor="username" className="text-xs font-bold uppercase text-muted-foreground">Username</Label><Input id="username" name="username" autoComplete="username" required placeholder="Enter your username" className="h-12 rounded-md border-input bg-surface px-4 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-cobalt/25" /></div><div className="space-y-2.5"><Label htmlFor="password" className="text-xs font-bold uppercase text-muted-foreground">Password</Label><div className="relative"><Input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required placeholder="Enter your password" className="h-12 rounded-md border-input bg-surface px-4 pr-12 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-cobalt/25" /><Button type="button" variant="ghost" size="icon" aria-label={showPassword ? "Hide password" : "Show password"} title={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)} className="absolute right-1 top-1.5 text-muted-foreground hover:text-cobalt">{showPassword ? <EyeOff /> : <Eye />}</Button></div></div><Button type="submit" variant="editorial" className="h-12 w-full text-sm">Sign in <ArrowRight /></Button>{message && <p role="status" className="rounded-md border border-cobalt-light bg-cobalt-light/50 p-3 text-sm leading-relaxed text-navy">{message}</p>}</form>
        <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">This workspace is for internal bid teams. Accounts are provisioned directly; self-registration is not available.</p>
      </div>
      <p className="text-center text-xs text-muted-foreground">Tender AI Platform · Advisory outputs for human review</p>
    </div>
  </main>;
}
