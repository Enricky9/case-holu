import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import {db} from '../firebase';

const CalculoResult = () => {
  const { id } = useParams();
  const [calculo, setCalculo] = useState();

  const navigate = useNavigate();


  useEffect(() => {
    const fetchCalculo = async () => {
      
      const docRef = await getDoc(doc(db, 'calculos', id));
      if (docRef.exists()) {
        setCalculo(docRef.data());
      }
    };

    fetchCalculo();
  }, []);

  if (!calculo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="result-container">
    <h2>Resultado do Cálculo</h2>
    <p>Area Util Paineis: {calculo.areaUtilPaineis.toFixed(2)} m²</p>
    <p>Comprimento Estrutura: {calculo.comprimentoEstrutura.toFixed(2)} m²</p>
    <p>Potencia Paineis: {calculo.potenciaPainel} watts</p>
    <p>Quantidade Paineis: {calculo.quantidadePaineis} </p>

    <button onClick={() => navigate("/calculo")} className="back-button">Voltar</button>
    
  </div>
  );
};

export default CalculoResult;
