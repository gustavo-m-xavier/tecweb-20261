function Menu() {

    const items = [
        'Dashboard',
        'Notas',
        'Faltas',
        'Boletos',
        'Requerimentos',
        'Sair'
    ]

    return (
        <nav>
            <ul>
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu