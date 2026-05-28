import './sidebar.css'
import logo from '../../assets/learn.svg'

function Sidebar() {

    const items = [
        'Dashboard',
        'Notas',
        'Faltas',
        'Boletos',
        'Requerimentos',
        'Sair'
    ]

    return (
        <aside>
            <header>
                <img src={logo} alt="" />
                <h1>Aluno Online</h1>
            </header>

            <nav>
                <ul>
                    {items.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;