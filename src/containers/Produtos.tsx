import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'
import * as S from './styles'

const favoritos: ProdutoType[] = []
const favoritar = (produto: ProdutoType) => {
  // Lógica para favoritar um produto
}

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
