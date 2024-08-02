import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({collection: 'clientes'})
export class Clientes{
    @Prop({required: true})
    nome: String
    @Prop({required: true})
    sobrenome: String
    @Prop({required: true})
    cpf: String
}

export const ClientesSchema = SchemaFactory.createForClass(Clientes)