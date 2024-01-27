//dados candidato
var idade= 29;
var experienciaAnos = 7;
var nivelEducacao; "superior";
var possuiCertificado = true;

//Criterios de elegibilidade
var idadeMinima = 18;
var experienciaMinimaAnos = 3;
var nivelEducacaoMinimo; "superior";
var certificadoObrigatorio = true;

//verificar elegibilidade
var elegivel =
idade>=idadeMinima &&
experienciaAnos>=experienciaMinimaAnos &&
(nivelEducacao===nivelEducacaoMinimo || possuiCertificado)&& (!certificadoObrigatorio || possuiCertificado);
//resultado
console.log("Elegivel para a Vaga?" + elegivel);
