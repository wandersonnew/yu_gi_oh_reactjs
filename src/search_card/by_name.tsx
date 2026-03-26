import { useState } from "react"
import type { IQueryCard } from "../interfaces/api";
import yugioh from "../http";

export default function ByName()
{
    const [name, setName] = useState("");
    const [card, setCard] = useState<IQueryCard | null>();

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>)
    {
        e.preventDefault();

        const result = await fetchCard(name);

        setCard(result);
    }

    async function fetchCard(name: string): Promise<IQueryCard | null>
    {
        try
        {
            const response = await yugioh.get("", {
                params: { name }
            })

            const card = response.data.data[0];

            let result: IQueryCard = {
                name: card.name,
                type: card.type,
                humanreadablecardtype: card.humanReadableCardType,
                frametype: card.frameType,
                description: card.desc,
                race: card.race,
                atk: card.atk,
                def: card.def,
                level: card.level,
                attribute: card.attribute,
                archetype: card.archetype,
                ygoprodeckurl: card.ygoprodeck_url,
                image: card.card_images[0].image_url
            }

            return result;
        }
        catch (error)
        {
            console.error(error);
            return null;
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center">
                Search Card By Name
            </h1>
            
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-4">
                <div className="mb-5">
                    <label 
                        htmlFor="ByName" 
                        className="block mb-2.5 text-sm font-medium text-heading"
                    >
                        Full Name
                    </label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                        placeholder="full name of card" 
                        required 
                    />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>

            {card && (
                <div className="mt-4 p-4 border rounded">
                    <h2 className="text-xl font-bold">{card.name}</h2>
                    <p>{card.description}</p>
                    <p>ATK: {card.atk} / DEF: {card.def}</p>
                    <img src={card.image} alt="" width={400} />
                    <button className="bg-blue-500 hover:bg-blue-7100 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        <a href={card.ygoprodeckurl} target="_blank">More info</a>
                    </button>
                </div>
            )}
        </>
    )
}