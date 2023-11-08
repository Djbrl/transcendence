import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: ['http://localhost:3000', 'http://frontend:3000'],
        credentials: true,

        //    origin: '*',
        //    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        //    preflightContinue: false,
        //    optionsSuccessStatus: 204,
    });

    app.setGlobalPrefix('api/v0');
    app.use(cookieParser());
    app.enableShutdownHooks();

    await app.listen(3000);
}
bootstrap();
