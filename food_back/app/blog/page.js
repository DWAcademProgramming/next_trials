import Link from "next/link";

export default function BlogPage(){
    return <main>
        <h1>The Main Blog Page</h1>
        <p><Link href="/blog/page1">Post 1</Link></p>
        <p><Link href="/blog/page2">Post 2</Link></p>
    </main>
}