import Link from "next/link";
import { BiEdit } from "react-icons/bi"
import RemoveBtn from "./RemoveBtn";
const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        });

        if(!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

export default async function Topics () {

    const { topics } = await getTopics();
    console.log(topics)
    return <>
        {topics?.map((t) => (
            <div key={t._id}  className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">{t.title}</h2>
                    <p>{t.description}</p>
                </div>
                <div className="flex gap-2">
                    <RemoveBtn id={t._id} />
                    <Link href={`/update_topic/${t._id}`}>
                    <BiEdit size={24} className=" text-blue-500"/>
                    </Link>
                </div>
            </div>
        ))}    
    </>;
}