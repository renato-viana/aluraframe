class Negociacao {

    // convenção _
    constructor(data, quantidade, valor) {
        // programação defensiva
        this._data = new Date();
        this._quantidade = 1;
        this._valor = 0.0;
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