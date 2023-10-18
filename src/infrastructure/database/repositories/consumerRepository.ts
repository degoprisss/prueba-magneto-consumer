import { InjectModel } from "@nestjs/mongoose";
import { IConsumerRepository } from "src/application/ports/Repository/IConsumerRepository";
import { Consumer } from "../mapper/consumer.entity";
import { Model } from "mongoose";
import { IConsumer } from "src/application/ports/Interfaces/IConsumer";

export class ConsumerRepository extends IConsumerRepository {
    constructor(
        @InjectModel(Consumer.name) private consumerModel: Model<Consumer>
    ) {
        super();
    }

    async create(data: IConsumer): Promise<IConsumer> {
        return this.consumerModel.create(data);
    }

    async find(): Promise<IConsumer[]> {
        return await this.consumerModel.find().lean().exec();
    }

}