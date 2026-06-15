import avatar from '../../assets/avatar.svg'
import './topbar.css'

function Topbar() {
    return (
        <header>
            <h1>Olá Aluno</h1>
            <img src={avatar} alt="" />
        </header>
    )
}

export default Topbar