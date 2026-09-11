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
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
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
      <DialogContent className="border-border/60 bg-popover/80 supports-[backdrop-filter]:bg-popover/70 data-[state=open]:zoom-in-95 top-[20%] max-w-xl translate-y-0 gap-0 overflow-hidden rounded-2xl p-0 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl sm:rounded-2xl dark:ring-white/10 [&>button]:hidden">
        <DialogTitle className="sr-only">Command Menu</DialogTitle>
        <DialogDescription className="sr-only">
          Search for a command to run, or jump to a link.
        </DialogDescription>
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground/70 bg-transparent [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-1 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0">
          {children}
        </Command>
        <CommandFooter />
      </DialogContent>
    </Dialog>
  );
};

const CommandFooter = () => (
  <div className="border-border/60 bg-muted/40 text-muted-foreground flex items-center justify-between gap-2 border-t px-3 py-2 text-[11px]">
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
  <kbd className="border-border/70 bg-background text-muted-foreground pointer-events-none inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded border px-1 font-sans text-[10px] font-medium shadow-sm select-none">
    {children}
  </kbd>
);

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="border-border/60 flex items-center border-b px-4"
    cmdk-input-wrapper=""
  >
    <Search className="text-muted-foreground/60 mr-3 h-5 w-5 shrink-0" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "placeholder:text-muted-foreground/60 flex h-14 w-full rounded-md bg-transparent py-3 text-base outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
      "max-h-[360px] scroll-py-2 overflow-x-hidden overflow-y-auto p-2",
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
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
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
    className={cn("bg-border -mx-1 h-px", className)}
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
      "text-foreground relative flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 outline-none select-none",
      "before:bg-primary before:absolute before:top-1/2 before:left-0 before:h-5 before:w-[3px] before:-translate-y-1/2 before:rounded-full before:opacity-0 before:transition-opacity",
      "hover:bg-accent/60 aria-selected:bg-accent aria-selected:text-accent-foreground aria-selected:before:opacity-100",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "[&_svg]:text-muted-foreground aria-selected:[&_svg]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0",
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
        "text-muted-foreground ml-auto text-xs tracking-widest",
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
