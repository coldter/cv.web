"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));

Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="top-[20%] max-w-xl translate-y-0 gap-0 overflow-hidden rounded-2xl border-border/60 bg-popover/80 p-0 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl supports-[backdrop-filter]:bg-popover/70 data-[state=open]:zoom-in-95 dark:ring-white/10 sm:rounded-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">Command Menu</DialogTitle>
        <DialogDescription className="sr-only">
          Search for a command to run, or jump to a link.
        </DialogDescription>
        <Command className="bg-transparent [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-1 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground/70 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2">
          {children}
        </Command>
        <CommandFooter />
      </DialogContent>
    </Dialog>
  );
};

const CommandFooter = () => (
  <div className="flex items-center justify-between gap-2 border-t border-border/60 bg-muted/40 px-3 py-2 text-[11px] text-muted-foreground">
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-1">
        <CommandKbd>↑</CommandKbd>
        <CommandKbd>↓</CommandKbd>
        navigate
      </span>
      <span className="flex items-center gap-1">
        <CommandKbd>↵</CommandKbd>
        select
      </span>
    </div>
    <span className="flex items-center gap-1">
      <CommandKbd>esc</CommandKbd>
      close
    </span>
  </div>
);

const CommandKbd = ({ children }: { children: React.ReactNode }) => (
  <kbd className="pointer-events-none inline-flex h-5 min-w-[1.25rem] select-none items-center justify-center rounded border border-border/70 bg-background px-1 font-sans text-[10px] font-medium text-muted-foreground shadow-sm">
    {children}
  </kbd>
);

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="flex items-center border-b border-border/60 px-4"
    cmdk-input-wrapper=""
  >
    <Search className="mr-3 h-5 w-5 shrink-0 text-muted-foreground/60" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-14 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "max-h-[360px] overflow-y-auto overflow-x-hidden scroll-py-2 p-2",
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground outline-none transition-colors duration-150",
      "before:absolute before:left-0 before:top-1/2 before:h-5 before:w-[3px] before:-translate-y-1/2 before:rounded-full before:bg-primary before:opacity-0 before:transition-opacity",
      "hover:bg-accent/60 aria-selected:bg-accent aria-selected:text-accent-foreground aria-selected:before:opacity-100",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground aria-selected:[&_svg]:text-foreground",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
