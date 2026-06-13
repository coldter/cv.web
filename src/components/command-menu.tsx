"use client";

import * as React from "react";
import { ArrowUpRight, Download, Globe, Printer } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { XIcon } from "@/components/icons/XIcon";

interface Props {
  links: { url: string; title: string }[];
  resumeDownloadUrl?: string;
}

/** Map a link title to its brand icon, defaulting to a globe. */
function linkIcon(title: string) {
  const key = title.toLowerCase();
  if (key.includes("github")) return GitHubIcon;
  if (key.includes("telegram")) return TelegramIcon;
  if (key.includes("linkedin")) return LinkedInIcon;
  if (key === "x" || key.includes("twitter")) return XIcon;
  return Globe;
}

export const CommandMenu = ({ links, resumeDownloadUrl }: Props) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runAndClose = (fn: () => void) => () => {
    setOpen(false);
    fn();
  };

  return (
    <>
      <div className="hidden md:block lg:block">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open command menu"
          className="group fixed bottom-0 left-0 right-0 flex items-center justify-center gap-2 border-t border-t-muted bg-white/80 p-2 text-center text-sm text-muted-foreground backdrop-blur transition-colors hover:bg-muted/60 hover:text-foreground print:hidden"
        >
          <span>Press</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
            <span className="text-xxs">⌘/^</span>J
          </kbd>
          <span>or click here to open the command menu</span>
        </button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            {resumeDownloadUrl ? (
              <CommandItem
                onSelect={runAndClose(() =>
                  window.open(resumeDownloadUrl, "_blank"),
                )}
              >
                <Download />
                <span>Download PDF Version</span>
                <CommandShortcut>↵</CommandShortcut>
              </CommandItem>
            ) : null}
            <CommandItem onSelect={runAndClose(() => window.print())}>
              <Printer />
              <span>Print resume</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => {
              const Icon = linkIcon(title);
              return (
                <CommandItem
                  key={url}
                  onSelect={runAndClose(() => window.open(url, "_blank"))}
                >
                  <Icon />
                  <span>{title}</span>
                  <CommandShortcut>
                    <ArrowUpRight />
                  </CommandShortcut>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
