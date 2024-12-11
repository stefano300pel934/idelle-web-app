"use client"

import * as React from "react"
import Link from "next/link"
import Image from 'next/image'

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Home from "./page"

const components: { title: string; href: string; description: string }[] = [

  {
    title: "Copywriter Web",
    href: "/copywriter-web",
    description:
      "",
  },
  {
    title: "Consulente web marketing",
    href: "/consulente-web-marketing",
    description: "",
  },
  {
    title: "Siti web per aziende",
    href: "/siti-web-performanti-per-aziende",
    description: "",
  },
  
 
]

export function NavigationMenuDemo() {
  return (
   
    <NavigationMenu>
      <NavigationMenuList>
        <Link href="/">
        <Image 
        src="/IDELLE-sito.png"
        width={80}
        height={80}
        alt="home"
        className="space-x-1"
        />
        </Link>
        <NavigationMenuItem>
        <Link href="/contatti" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contatti
            </NavigationMenuLink>
          </Link>
      
        
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm">Servizi</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul >
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
  
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-xs",
            className
          )}
          {...props}
        >
          <div className="text-xs font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
