import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  let host = process.env.RABBITMQ_HOST || 'rabbitmq'
  let port = process.env.RABBITMQ_PORT || 5672
  console.log(host, port)
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${host}:${port}`],
      queue: 'cats_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.listen();
  console.log(
    `Consumer integration Microservice started successfully on port ${host}:${port}`
  );
}
bootstrap();
