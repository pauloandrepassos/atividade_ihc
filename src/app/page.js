"use client"
import Navbar from "@/components/nav/Navbar";
import styles from "./page.module.css";
import SubNavbar from "@/components/nav/SubNavbar";
import ProductsSection from "@/components/produtos/ProductsSection";
import produtosData from '@/api/BancoDeDados.json'
import { useEffect, useState } from "react";

export default function Home() {
  const [produtosCordas, setProdutosCordas] = useState([])
  const [produtosMadeiras, setProdutosMadeiras] = useState([])
  const [produtosSaxofones, setProdutosSaxofones] = useState([])
  const [produtosMetais, setProdutosMetais] = useState([])
  const [produtosMaisVendidos, setProdutosMaisVendidos] = useState([])

  useEffect(() => {
    setProdutosCordas(produtosData.instrumentos_cordas)
    setProdutosMadeiras(produtosData.instrumentos_madeiras)
    setProdutosSaxofones(produtosData.instrumentos_saxofones)
    setProdutosMetais(produtosData.instrumentos_metais)
    
    const produtoMaisVendido1 = produtosData.instrumentos_cordas.find(produto => produto.id === 1)
    const produtoMaisVendido2 = produtosData.instrumentos_madeiras.find(produto => produto.id === 1)
    const produtoMaisVendido3 = produtosData.instrumentos_saxofones.find(produto => produto.id === 1)
    const produtoMaisVendido4 = produtosData.instrumentos_cordas.find(produto => produto.id === 41)

    setProdutosMaisVendidos([produtoMaisVendido1, produtoMaisVendido2, produtoMaisVendido3, produtoMaisVendido4])
  }, [])


  const produtos1 = []
  return (
    <main>
      <Navbar />
      <SubNavbar />
      <ProductsSection
        section_name='DESTAQUES'
        produtos={produtosMaisVendidos}
      />
      <ProductsSection 
        section_name={'CORDAS'}
        produtos={produtosCordas}
      />
      <ProductsSection
        section_name={'MADEIRAS'}
        produtos={produtosMadeiras}
      />
      <ProductsSection 
        section_name={'SAXOFONES'}
        produtos={produtosSaxofones}
      />
      <ProductsSection
        section_name={'METAIS'}
        produtos={produtosMetais}
      />
    </main>
  );
}
