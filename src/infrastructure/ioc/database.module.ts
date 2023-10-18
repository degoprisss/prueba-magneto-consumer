import { ConfigService } from "@nestjs/config";
import { Global, Logger, Module } from "@nestjs/common";
import { MongoClient } from "mongodb";
import { MongooseModule } from "@nestjs/mongoose";

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService): any => {
        return {
          uri: configService.get<string>("DB_MONGO_URI"),
          connectionFactory: (connection) => {
            console.log("Connection initialized");
            connection.on("connected", () => {
              console.log("is connected");
            });
            connection.on("disconnected", () => {
              console.log("DB disconnected");
            });
            connection.on("error", (error) => {
              console.log("DB connection failed! for error: ", error);
            });
            return connection;
          },
        };
      },
      inject: [ConfigService],
    })
  ],
  providers: [
    {
      provide: "MONGO",
      useFactory: async (configService: ConfigService) => {
        Logger.log("New connection intantiaded", "MONGO_PROVIDER");
        const uri = configService.get<string>("DB_MONGO_URI");
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(configService.get<string>("DB_NAME"));
        return database;
      },
      inject: [ConfigService],
    },
  ],
  exports: ["MONGO"],
})
export class DatabaseModule { }
