"use client";

import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md"
export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm(`you're about to delete the topic`);

        if ( confirmed ) {
            try {
                const res = await fetch(
                `http://localhost:3000/api/topics?id=${id}`,
                { method : "DELETE",});

             if (!res.ok) {
                throw new Error("Failed to delete topic");
              }
        
              router.refresh();
              router.push("/");
            } catch (error) {
              console.log(error);
            }
        }
    };

    return (
        <button onClick={removeTopic}>
            <MdDeleteOutline size={24} className=" text-red-500"/>
        </button>
    )
}