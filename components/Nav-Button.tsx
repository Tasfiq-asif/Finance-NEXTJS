import Link from "next/link";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";


type Props = {
    href : string;
    isActive? : boolean;
    label: string;
}


const NavButton = ({isActive,href,label}:Props) => {
    return ( <div>
        <Button
        asChild
        size={"sm"}
        variant={"outline"}
        className={cn(
            "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none   outline-none text-white focus:bg-white/30 transition",
            isActive ? "bg-white/10 text-white" : "bg-transparent",
        )}
        >
            <Link href={href}>
            {label}
            </Link>
        </Button>
    </div> );
}

export default NavButton;