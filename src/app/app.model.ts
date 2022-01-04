/* export interface Nota {
   idNota?: number,
   avaliacao: number,
   nota_pessoal: string,
   createdAt?: Date | string,
   updatedAt?: Date | string,
} */

export interface Cerveja {
   idCerveja?: number,
   foto: any,
   cervejearia: string,
   marca: string,
   estilo: string,
   copo: string,
   abv: number,
   ibu: number,
   temperatura: number[],
   harmonizacao: string,
   espuma: string,
   coloracao: string,
   brilho: string,
   aroma: string,
   sabor: string,
   nota: Nota[],
   createdAt?: Date | string,
   updatedAt?: Date | string,
   media?: number
}

export interface Nota {
   idNota?: number,
   avaliacao: number,
   nota_pessoal: string
}
