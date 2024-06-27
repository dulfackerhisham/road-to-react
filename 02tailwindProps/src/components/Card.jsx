
function Card ({username='No name', post='not assigned'}) {
    return (
        <div id="card">
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/171C2/production/_132985649_gettyimages-1979924934gazafeb24.jpg" alt="" width="384" height="512"/>
            <div className="pt-6 space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div>
                    {username}
                </div>
                <div>
                    {post}
                </div>
                </figcaption>
            </div>
            </figure>

        
        </div>
    )
}

export default Card
