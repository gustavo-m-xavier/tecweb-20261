function Card({title, items}) {
    return (
        <article>
            <h3>{title}</h3>
            <ul>
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </article>
    )
}

export default Card