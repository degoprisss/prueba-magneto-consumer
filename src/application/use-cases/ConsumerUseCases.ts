import { Injectable } from "@nestjs/common";
import { IConsumer } from "../ports/Interfaces/IConsumer";
import { IConsumerRepository } from "../ports/Repository/IConsumerRepository";
import { IConsumerUseCases } from "../ports/UseCases/IConsumerUseCases";

@Injectable()
export class ConsumerUseCases extends IConsumerUseCases {
    constructor(private consumerRepo: IConsumerRepository) {
        super();
    }

    async create(data: IConsumer): Promise<IConsumer> {
        return await this.consumerRepo.create(data);
    }

    async find(): Promise<IConsumer[]> {
        return this.consumerRepo.find();
    }
}