class DateHelper {

  //  o constructor é chamando quando criamos uma instância de uma classe com o operador new.
    constructor() {
      throw new Error('DateHelper não pode ser instanciada!');
    }

    static dataParaTexto(data) {
    
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; 
  }

    static textoParaData(texto) {
        
        // Regular expression - O ˆ indica "começando com " e o $ "terminando com".
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) 
          throw new Error('Deve estar no formato YYYY-MM-DD');

        // spread operator ...
        return new Date(...texto.split("-").map((item, indice) => item - indice % 2));
  }

}
