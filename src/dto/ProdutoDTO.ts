export type ProdutoDTO ={
  idProduto?: number;
  descricao: string;
  validade?: Date | null;
  preco: number;
  qtdEstoque: number;
  qtdMinEstoque: number;
}