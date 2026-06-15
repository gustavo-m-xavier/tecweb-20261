import Card from "./Card"
import Topbar from "./Topbar"

function Content() {

    const cardItems = [
        {
            title: 'Mural de Avisos',
            items: [
                'aabb',
                'ccdd',
                'eeff'
            ]
        },
        {
            title: 'A1',
            items: [
                'aabb',
                'ccdd',
                'eeff'
            ]
        },
        {
            title: 'A2',
            items: [
                'aabb',
                'ccdd',
                'eeff'
            ]
        },
    ]

    return (
        <main>
            <Topbar />
            <section>
                <h2>Bem-vindo ao Portal do Aluno</h2>
                {cardItems.map((item) => (
                    <Card title={item.title} items={item.items} />
                ))}
            </section>
        </main>
    )
}

export default Content