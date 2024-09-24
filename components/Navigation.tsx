"use client"
import { usePathname, useRouter } from "next/navigation";
import NavButton from "./Nav-Button";
import { useState } from "react";
import {useMedia} from  "react-use"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const  routes =  [
    {
        href: "/",
        label: "Overview"
    },
    {
        href: "/transactions",
        label: "Transactions"
    },
    {
        href: "/accounts",
        label: "Accounts"
    },
    {
        href: "/categories",
        label: "Categories"
    },
    {
        href: "/settings",
        label: "Settings"
    },
]

const Navigation = () => {
    const [isOpen, setisOpen] = useState(false)

    const router = useRouter()
    const  pathname = usePathname()
    const ismobile= useMedia("(max-width:1024px),false")

    const onClick = (href:string) =>{
        router.push(href)
        setisOpen(false)
    }

    if (ismobile){
        return(
            <Sheet open={isOpen} onOpenChange={setisOpen}>
                <SheetTrigger>
                    <Button
                        variant={"outline"}
                        size={"sm"}
                        className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition "
                    >
                        <Menu className="h-4 w-4"/>
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"} className="px-2">
                    <nav className=" flex flex-col gap-y-2 pt-6">
                    {
                        routes.map( (route)=>(
                            <Button key={route.label} onClick={()=>onClick(route.href)} className={route.href === pathname ? "secondary" : "ghost"}>{route.label}</Button>
                        ))
                    }
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }

    return (
        <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {
                routes.map((route)=>(
                    <NavButton
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}/>
                ))}
        </nav>
     );
}

export default Navigation;