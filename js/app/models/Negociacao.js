class Negociacao {

    // convenção _
    constructor(data, quantidade, valor) {
        // programação defensiva
        this._data = new Date(data);
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    obtemVolume() {
        return this._quantidade * this._valor;
    }

    // podemos criar uma espécie de método, mas que é acessado como se fosse uma propriedade. 
    get data() {
        // programação defensiva
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}