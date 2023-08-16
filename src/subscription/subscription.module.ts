import { MiddlewareConsumer, Module, NestMiddleware } from "@nestjs/common";

import { PrismaService } from "src/prisma.service";
import { SearchService } from "src/service/search";
import { SubscribtionService } from "./subscription.service";
import { SubscribtionController } from "./subscription.controller";
import { TokenValidationService } from "src/service/validate-token";
import { CheckTokenMiddleware } from "src/middleware/checkToken.middleware";

@Module({
  controllers: [SubscribtionController],
  providers: [
    PrismaService,
    SearchService,
    SubscribtionService,
    TokenValidationService,
  ]
})
export class SubscribtonModule implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    throw new Error("Method not implemented.");
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckTokenMiddleware).forRoutes(SubscribtionController);
  }
}