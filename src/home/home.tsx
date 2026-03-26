import { useEffect } from "react"

export default function Home()
{
    useEffect(() => {
        alert("Welcome Super Deck");
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold text-center">
                Home Page
            </h1>
        </>
    )
}