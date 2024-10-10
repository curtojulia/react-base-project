import NovoComponente from "../components/NovoComponente/NovoComponente";
import Cartao from "../components/Cartao/cartao"; 
import Base from "./Base";
import ListContainer from "../components/ListContainer/ListContainer";

const MeusDados = [
    {
        titulo:"titulo ",
        texto:"texto pequeno"
    },
    {
        titulo:"mais um titulo",
        texto:" posso criar quando eu quiser"
    }
]

const SobreNos = () =>(
    <Base>
    <NovoComponente/>
    <ListContainer>
    {
        MeusDados.map(ele => (
            <Cartao
                key={ele.titulo}
                titulo={ele.titulo}
                texto={ele.texto}
            />
        ))
    }
    </ListContainer>
    </Base>
)

export default SobreNos;
 