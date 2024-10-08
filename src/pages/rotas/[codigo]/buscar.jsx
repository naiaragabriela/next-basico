import { useRouter } from 'next/router';

export default function buscar() {

    //consigo acessar informações dinâmicas com userouter
    
    const router = useRouter()
    const codigo = router.query.codigo


    return (
        <div>
            <h1>Rotas / {codigo} / Buscar </h1>
        </div>
    )
}