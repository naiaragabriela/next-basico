import Link from "next/link";
import router from 'next/router';

export default function Rotas() {

    function navegacaoSimples(url) {
        router.push(url)
    }
    function navegacaoComParams() {
        router.push({
            pathname:"/rotas/params",
            query: {
                id: 123,
                nome: "Maria Silva"
            }
        })
    }
    return(
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Maria">
                    <li>
                        Params
                    </li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>
                        Buscar
                    </li>
                </Link>
                <Link href="/rotas/123/Daniel">
                    <li>
                        Daniel
                    </li>
                </Link>
            </ul>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <button onClick={() => router.push("/rotas/123/buscar")}> Buscar</button>
                <button onClick={() => navegacaoComParams()}> Params</button>
                <button onClick={() => navegacaoSimples("/rotas/123/Daniel")}> Daniel</button>
            </div>
        </div>
    )
}