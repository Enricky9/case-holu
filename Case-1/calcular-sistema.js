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
const potenciaTotalKiloWatts = 4.5;
const resultado = calcularSistemaSolar(potenciaTotalKiloWatts);

console.log("Resultado:");
console.log("Quantidade de painéis:", resultado.quantidadePaineis);
console.log("Quantidade de inversores:", resultado.quantidadeInversores);
console.log("Potência do painel utilizado (Watts):", resultado.potenciaPainel);
console.log("Comprimento de estrutura necessário (metros):", resultado.comprimentoEstrutura);
console.log("Área útil necessária (metros quadrados):", resultado.areaUtilPaineis);
