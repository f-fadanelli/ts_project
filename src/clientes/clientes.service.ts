import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Clientes } from './schemas/clientes.schemas';
import { Model } from 'mongoose';
import { CreateClienteDto } from './dto/create.cliente-dto';
import { UpdateClienteDto } from './dto/update.cliente-dto';

@Injectable()
export class ClientesService {
    constructor(@InjectModel(Clientes.name) private clienteModel: Model<Clientes>) {}
  
    create(cliente: CreateClienteDto)  {
        const createdCliente = new this.clienteModel(cliente)
        return createdCliente.save()
    }
  
    findAll()  {
        return this.clienteModel.find().exec()
    }
  
    findOne(cpf: String)  {
        return this.clienteModel.findOne({cpf: cpf}).exec()
    }
  
    async update(cpf: String, cliente: UpdateClienteDto)  {
        const updatedCliente = await this.clienteModel.findOneAndUpdate({ cpf: cpf }, cliente).exec();
        return updatedCliente
    }
    
    async remove(cpf: String)  {
        const cliente = await this.clienteModel.findOneAndDelete({ cpf: cpf }).exec();
        return cliente
    }
  }
