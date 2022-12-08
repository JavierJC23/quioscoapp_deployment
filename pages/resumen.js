import Layout from "../layout/layout"
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "../components/ResumenProducto"

export default function Resumen() {
    const {pedido} = useQuiosco()
    return(
        <Layout
            pagina='Resumen'
        >
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-5">Revisa tu Pedido</p>

            {pedido.lenght === 0 ? (
                <p className="text-center text-2xl">No ay elementos en tu pedido</p>
            ) : (
                pedido.map(producto => (
                    <ResumenProducto
                        key={producto.id}
                        producto={producto}
                    />
                ))
            )}
        </Layout>
    )
}