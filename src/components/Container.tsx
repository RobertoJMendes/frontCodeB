import { ReactNode } from "react"

type Props = { children:ReactNode }

export function Container({children}:Props){
    return(
        <div className="flex items-center justify-between w-full xl:px-[150px] mx-auto"
        >{children}</div>
    )
}