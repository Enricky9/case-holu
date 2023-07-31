import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';



const CalculoForm = () => {
  const [potenciaTotal, setPotenciaTotal] = useState('');
  const navigate = useNavigate();

  function calcularSistemaSolar(potenciaTotal) {

    const potenciaPainel = 550; // Watts
    const larguraPainel = 1.95; // metros
    const comprimentoPainel = 1.1; // metros


    const areaUtilPaineis = (potenciaTotal * 1000) / potenciaPainel; // m²

    const quantidadePaineis = Math.ceil(areaUtilPaineis / (larguraPainel * comprimentoPainel));

    const comprimentoEstrutura = quantidadePaineis * comprimentoPainel;

    return {
      quantidadePaineis,
      potenciaPainel,
      comprimentoEstrutura,
      areaUtilPaineis,
    };

  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    const resultado = calcularSistemaSolar(potenciaTotal);


    const docRef = await addDoc(collection(db, 'calculos'), {
      potenciaPainel: Number(resultado.potenciaPainel),
      quantidadePaineis: Number(resultado.quantidadePaineis),
      areaUtilPaineis: Number(resultado.areaUtilPaineis),
      comprimentoEstrutura: Number(resultado.comprimentoEstrutura),
    });


    navigate(`/calculo/${docRef.id}`);
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
