import { SearchResult } from "@/types/SearchResult"

type Props = {
    results: SearchResult;
}

export const SearchReveal = ({ results }: Props) => {


    return (
        <div>
            <p className="text-3xl">{(results.person.name.toUpperCase())}</p>
            <p className=" text-3xl my-3">Parebéns, você tirou:</p>
            <p className="text-4xl bg-blue-800 my-5 px-5 py-20 rounded-lg 
            border-2 border-dashed border-blue-300">🎉{results.personMatched.name.toUpperCase()}🎉</p>
        </div>
    )
}