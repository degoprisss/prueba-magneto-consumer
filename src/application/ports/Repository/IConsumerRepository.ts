import { IConsumer } from "../Interfaces/IConsumer";

export abstract class IConsumerRepository {
    abstract create(data: IConsumer): Promise<IConsumer>;
    abstract find(): Promise<IConsumer[]>;
}