import { IConsumer } from "../Interfaces/IConsumer";

export abstract class IConsumerUseCases {
    abstract create(data: IConsumer): Promise<IConsumer>;
    abstract find(): Promise<IConsumer[]>;
}