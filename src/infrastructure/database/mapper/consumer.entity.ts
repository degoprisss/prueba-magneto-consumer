import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Consumer extends mongoose.Document {
    @Prop()
    user: string;
}
export const ConsumerSchema = SchemaFactory.createForClass(Consumer);