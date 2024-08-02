import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create.cliente-dto';
import { UpdateClienteDto } from './dto/update.cliente-dto';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}
  
    @Post()
    create(@Body() cliente: CreateClienteDto) {
      return this.clientesService.create(cliente);
    }
  
    @Get()
    findAll() {
      return this.clientesService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: String) {
      return this.clientesService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: String, @Body() cliente: UpdateClienteDto) {
      return this.clientesService.update(id, cliente);
    }
  
    @Delete(':id')
    remove(@Param('id') id: String) {
      return this.clientesService.remove(id);
    }
  }
