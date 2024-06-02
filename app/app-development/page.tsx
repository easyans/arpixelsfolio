 /*import { ProjectCard } from "@/lib/interface";
import {client}"@/lib/sanity";
import Image from 'next/image';

async fucntion getData(){
    const  query = `*[_type == 'uiux ] | order(_createdAt desc) [0...4] {
        title,
        _id,
        link,
        description,
        tags,
        "imageUrl": image.asset->url
    }`;

    const data = await client.fetch(query, {}, {next: { revalidate: 30 } });

    return data;
}
    */



export default function ProjectPage() {
    return (
        <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
            <h1 className="text-2xl font-semibold lg:text-4xl pt-5">My <span className="text-blue-600">App Development</span> Projects</h1>
            <p className="leading-7 text-muted-foreground mt-2 text-slate-500 pt-2">Check out what projects I have created using React Native EXPO 💻⚛📱</p>
        </section>
    )
}


/**  **/