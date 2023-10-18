import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IConsumerRepository } from "src/application/ports/Repository/IConsumerRepository";
import { IConsumerUseCases } from "src/application/ports/UseCases/IConsumerUseCases";
import { ConsumerUseCases } from "src/application/use-cases/ConsumerUseCases";
import { ConsumerController } from "src/presentation/controllers/consumer.controller";
import { Consumer, ConsumerSchema } from "../database/mapper/consumer.entity";
import { ConsumerRepository } from "../database/repositories/consumerRepository";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Consumer.name,
                schema: ConsumerSchema,
            },
        ]),
    ],
    providers: [
        {
            provide: IConsumerUseCases,
            useClass: ConsumerUseCases,
        },
        {
            provide: IConsumerRepository,
            useClass: ConsumerRepository,
        }
    ],

    controllers: [ConsumerController],
    exports: [IConsumerUseCases, IConsumerRepository],
})

export class ConsumerModule { }