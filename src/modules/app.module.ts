

import {Module} from '@nestjs/common'
import {AppController} from '../controllers/app.controllers'


@Module(

    {
        controllers:[AppController]
    }
)

export class AppModule{}
