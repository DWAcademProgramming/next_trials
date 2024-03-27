export default function BlogPostpage({params}){
    return(
        <main>
            <h1>Blog Post Page</h1>
            <p>{params.slug}</p>
        </main>
    )
}