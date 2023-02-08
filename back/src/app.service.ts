import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World! I'm Eugene Bystrov from 8K93 of TPU!";
  }
}
