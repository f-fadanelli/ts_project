import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Clientes, ClientesSchema } from './schemas/clientes.schemas';

@Module({
  imports: [MongooseModule.forFeature([{name: Clientes.name, schema: ClientesSchema}])],
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [ClientesModule]
})
export class ClientesModule {}
