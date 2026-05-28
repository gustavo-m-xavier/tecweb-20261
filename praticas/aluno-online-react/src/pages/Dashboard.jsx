import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'
import DashboardCard from '../components/dashboard-card/DashboardCard'

function Dashboard() {

    const cardItems = [
        {
            title: 'Mural de Avisos',
            items: [
                'Inscrição para o projeto de extensão',
                'Eleição para representante de turma'
            ]
        },
        {
            title: 'Calendário Acadêmico',
            items: [
                '23/02 - Início do período letivo 2026-1',
                '25/04 - Prazo final para aplicação P1',
                '23/06 - Prazo final para aplicação P2',
                '04/07 - Fim do período letivo 2026-1',
            ]
        },
        {
            title: 'Minhas disciplinas',
            items: [
                'Banco de dados I',
                'Estrutura de Dados',
                'Tecnologias Web'
            ]
        },
    ]

    return (
        <>
            <Sidebar />
            <main>
                <Topbar />
                <section>
                    <h2>Bem-vindo ao Portal do Aluno</h2>
                    {cardItems.map((item) => (
                        <DashboardCard title={item.title} items={item.items} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Dashboard