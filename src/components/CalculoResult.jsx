import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';

const CalculoResult = () => {
  const { id } = useParams();
  const [calculo, setCalculo] = useState(null);

  useEffect(() => {
    const fetchCalculo = async () => {
      const docRef = db.collection('calculos').doc(id);
      const doc = await docRef.get();
      if (doc.exists) {
        setCalculo(doc.data());
      }
    };

    fetchCalculo();
  }, [id]);

  if (!calculo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="result-container">
    <h2>Resultado do Cálculo</h2>
    <p>Potência Total: {calculo.potenciaTotal} kW</p>
    {/* Outros campos do cálculo aqui... */}
  </div>
  );
};

export default CalculoResult;
