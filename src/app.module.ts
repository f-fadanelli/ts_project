import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';
import { ClientesModule } from './clientes/clientes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ContasModule, ClientesModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/', {dbName: 'teste'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
