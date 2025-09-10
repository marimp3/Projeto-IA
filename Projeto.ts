class ArraySimples {
    private arrayOriginal: any[];

    constructor(array: any[]) {
        this.arrayOriginal = array; }

    removeDuplicados(): any[] {
        const arrayUnico = new Set(this.arrayOriginal);
        return Array.from(arrayUnico);}}

// Teste 1: Um array com alguns itens repetidos
const arrayComRepetidos = [1, 2, 3, 5, 4, 1, 5];
const organizador1 = new ArraySimples(arrayComRepetidos);
console.log("Array original:", arrayComRepetidos);
console.log("Array sem duplicados:", organizador1.removeDuplicados()); 
console.log("---");

// Teste 2: Um array com todos os itens repetidos
const arrayTodosIguais = [50, 50, 50, 50, 50];
const organizador2 = new ArraySimples(arrayTodosIguais);
console.log("Array original:", arrayTodosIguais);
console.log("Array sem duplicados:", organizador2.removeDuplicados()); 
console.log("---");

// Teste 3: Um array vazio
const arrayVazio: any[] = [];
const organizador3 = new ArraySimples(arrayVazio);
console.log("Array original:", arrayVazio);
console.log("Array sem duplicados:", organizador3.removeDuplicados()); 
console.log("---");

// Teste 4: Tipos diferentes (números, textos, etc.)
const arrayTiposDiferentes = [1, "Mari", 2, "Casa", "Gato", 1];
const organizador4 = new ArraySimples(arrayTiposDiferentes);
console.log("Array original:", arrayTiposDiferentes);
console.log("Array sem duplicados:", organizador4.removeDuplicados()); 