import { Controller } from "@nestjs/common";
import { Ctx, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import { IConsumer } from "src/application/ports/Interfaces/IConsumer";
import { IConsumerUseCases } from "src/application/ports/UseCases/IConsumerUseCases";

@Controller()
export class ConsumerController {
    constructor(private readonly consumerUseCases: IConsumerUseCases) { }

    @MessagePattern('createProducer')
    async createProducer(@Payload() data: IConsumer) {
        return await this.consumerUseCases.create(data);
    }

    @MessagePattern('getProducer')
    async findProducer() {
        return await this.consumerUseCases.find();
    }

}