import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../firebase';
//import getFirestore from "firebase/firestore";

const CalculoForm = () => {
  const [potenciaTotal, setPotenciaTotal] = useState('');
  const navigate = useNavigate();

  // Função para calcular a quantidade de placas e inversores necessários
function calcularSistemaSolar(potenciaTotal) {
    // Dados do painel solar
    const potenciaPainel = 550; // Watts
    const larguraPainel = 1.95; // metros
    const comprimentoPainel = 1.1; // metros
  
    // Dados do inversor
    const maxPaineisPorInversor = 4;
  
    // Área útil necessária para os painéis
    const areaUtilPaineis = (potenciaTotal * 1000) / potenciaPainel; // m²
  
    // Quantidade de painéis necessários
    const quantidadePaineis = Math.ceil(areaUtilPaineis / (larguraPainel * comprimentoPainel));
  
    // Quantidade de inversores necessários
    const quantidadeInversores = Math.ceil(quantidadePaineis / maxPaineisPorInversor);
  
    // Comprimento de estrutura necessário
    const comprimentoEstrutura = quantidadePaineis * comprimentoPainel;
  
    return {
      quantidadePaineis,
      quantidadeInversores,
      potenciaPainel,
      comprimentoEstrutura,
      areaUtilPaineis,
    };
  }
  
  // Parâmetro recebido para o cálculo (4,5 kW)
  
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Chamar a função para calcular o sistema solar aqui
    // ...
    const resultado = calcularSistemaSolar(potenciaTotal);


    // Criar um novo documento no Firebase com os dados calculados
    const docRef = await db.collection('calculos').add({
      potenciaTotal: Number(resultado),
      // Outros campos do cálculo aqui...
    });

    // Redirecionar para a página de resultado com o ID do documento criado
    navigate.push(`/calculo/${docRef.id}`);
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="form">
      <label>
        Potência Total (kW):
        <input type="number" step="0.1" value={potenciaTotal} onChange={(e) => setPotenciaTotal(e.target.value)} />
      </label>
      <button type="submit" className="submit-button">Calcular</button>
    </form>
  </div>
);
};

export default CalculoForm;
